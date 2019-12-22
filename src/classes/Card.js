class Card {
    constructor(rank, suit) {
        this.rank = rank;
        this.suit = suit;

        this.readableRank = this.getReadableRank();
        this.name = `${this.readableRank}${this.suit}`;

        // face cards value = 10 and aces value = 1
        this.value = this.rank >= 10 ? 10 : this.rank === 0 ? 1 : this.rank;

        this.count = (this.rank >= 10 || this.rank === 0) ? -1 : this.rank <= 6 ? 1 : 0;
    }

    getReadableRank() {
        const courtCardReadableRanks = {
            0: 'A',
            11: 'J',
            12: 'Q',
            13: 'K',
        };

        if (courtCardReadableRanks.hasOwnProperty(this.rank)) {
            return courtCardReadableRanks[this.rank];
        } else {
            return this.rank;
        };
    }
}

module.exports = Card;