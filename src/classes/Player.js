class Player {
    constructor(position) {
        this.position = position;
        this.hand = [];
    }

    getCard(card) {
        this.hand.push(card);
    }

    muckHand() {
        const muckedHand = this.hand;
        this.hand = [];
        return muckedHand;
    }

    getBookIndex() {
        if (this.hand.length < 1) {
            return 'error';
        } else {
            let soft = '';
            let sum = 0;
            this.hand.forEach((card) => {
                if (card.rank === 0) {
                    soft = 'S';
                    sum += 10;
                }
                sum += card.value;
            });
            if (this.hand[0].rank === this.hand[1].rank) {
                return 'D' + this.hand[0].readableRank;
            }
            return soft + sum.toString(10);
        }
    }
}

module.exports = Player;