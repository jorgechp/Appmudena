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
            generatedHTML.appendChild(filledStar);
        }
        for (let i = 0; i < this.maxScore - this.score; ++i) {
            generatedHTML.appendChild(emptyStar);
        }

        this.innerHTML = generatedHTML.innerHTML;
    }
}

customElements.define('stars-score-widget', StarScoreWidget);