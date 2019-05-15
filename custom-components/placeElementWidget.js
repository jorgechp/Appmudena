class StarScoreWidget extends HTMLElement {

    /**Sets the score to be drawn.
     */
    constructor(score) {
        super();

        this.score = score;
        this.maxScore = 5;
        this.render();
    }

    /**
     * Draws a list of stars according to the given score.
     *
     */
    render() {
        let filledStar = new Image(15, 15);
        let emptyStar = new Image(15, 15);
        filledStar.src = "images/filledStar.svg";
        emptyStar.src = "images/emptyStar.svg";

        let generatedHTML = document.createElement('ul');
        for (let i = 0; i < this.score; ++i) {
            generatedHTML.appendChild(filledStar.cloneNode());
        }
        for (let i = 0; i < this.maxScore - this.score; ++i) {
            generatedHTML.appendChild(emptyStar.cloneNode());
        }

        this.innerHTML = generatedHTML.innerHTML;
    }
}

customElements.define('stars-score-widget', StarScoreWidget);

class PlaceElementWidget extends HTMLElement {

    /**
     * Sets the name, address and score for the place.
     */
    constructor(name, address, score, comment) {
        super();
        this.name = name;
        this.address = address;
        this.score = new StarScoreWidget(score);
        this.comment = comment;

        this.render();
    }

    /**
     * Generates the on list item component. Please refer to
     * https://onsen.io/v2/api/js/ons-list.html for more information.
     *
     */
    render() {
        this.innerHTML = `<ons-list-item lock-on-drag="true" modifier="tappable" onclick="alert('${this.comment}')">
							  <div class="left">
								<img class="list-item__thumbnail" src="https://placekitten.com/g/40/40">
							  </div>
							  <div class="center" style="width: 40%">
								<span class="list-item__title">${this.name}</span>
								<span class="list-item__subtitle">${this.address}</span>
							  </div>
							  <div class="right" style="min-width: 100px;">
								<span>` + this.score.innerHTML + `</span>		
							  </div>
						</ons-list-item>`
    }
}

customElements.define('place-element-widget', PlaceElementWidget);

			
			