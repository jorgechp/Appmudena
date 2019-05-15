class PlaceCommentWidget extends HTMLElement {

    /**Sets the score to be drawn.
     */
    constructor(name, address, score, comment) {
        super();

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
        `<ons-dialog id="place-comment">
			<div style="text-align: center; padding: 10px;">
				<h1>${this.name}</h1>
				<h3>${this.address}</h3>
				<p>` + ${this.score.innerHTML} +`</p>
				<p>${this.comment}</p>

			  <p>
				<ons-button onclick="hideDialog('place-comment')">Close</ons-button>
			  </p>
			</div>
		  </ons-dialog>`
    }
}


customElements.define('place-comment-widget', PlaceCommentWidget);