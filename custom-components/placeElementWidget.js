function hideDialog() {
    let elem = document.getElementsByTagName('ons-dialog')[0];
    elem.parentNode.removeChild(elem);
}

class PlaceCommentWidget extends HTMLElement {

    /**Sets the score to be drawn.
     */
    constructor(name, address, score, comment) {
        super();
        this.timestampID = new Date().getUTCMilliseconds();
        this.name = name;
        this.address = address;
        this.comment = comment;
        this.score = new StarScoreWidget(score);

        this.render();
    }

    /**
     * Draws a list of stars according to the given score.
     *
     */
    render() {
        this.innerHTML = `<ons-dialog id="place-comment">
			<div style="text-align: center; padding: 10px;">
				<h1>${this.name}</h1>
				<p style="font-size: 17px; font-variant-caps: petite-caps;">${this.address}</p>
				<p>` + this.score.innerHTML + `</p>
				<hr/>
				<p style="text-align: justify; font-size: 17px; font-family: 'Liberation Sans', 'Arial', 'sans-serif';line-height: 1.5;">${this.comment}</p>
			</div>
			
			<br/><br/>
			
            <div style="position: fixed; width: 100%; bottom: 0%; ">
			  <p style="margin: 0 auto; text-align: center;">
				<ons-button style="width: 100%;" onclick="hideDialog()">Close</ons-button>
			  </p>
			</div>
		  </ons-dialog>`;
    }

    showDialog() {
        this.firstChild.show();
    }

}


customElements.define('place-comment-widget', PlaceCommentWidget);


//------------------------------------


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
        this.scoreNumber = score;
        this.comment = comment;

        this.render();
    }

    /**
     * Generates the on list item component. Please refer to
     * https://onsen.io/v2/api/js/ons-list.html for more information.
     *
     */
    render() {
        this.innerHTML = `<ons-list-item lock-on-drag="true" modifier="tappable" 
                            onclick="let dialog = new PlaceCommentWidget('${this.name}', '${this.address}', ${this.scoreNumber}, '${this.comment}'); document.body.appendChild(dialog); dialog.showDialog();">
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

			
			