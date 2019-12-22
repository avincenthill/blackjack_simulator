const _ = require('../../lib/lodash');
const chalk = require('chalk');
const Card = require('./Card');

class Deck {
    constructor() {
        // create deck as normal 52 playing cards
        this.cards = [];
        this.topCardIndex = 0;
        this.ranks = [...Array(14).keys()];
        // remove 1 as rank option
        this.ranks.splice(1, 1);
        this.suits = ['♠', chalk.red('♥'), chalk.red('♦'), '♣'];
        this.ranks.forEach((rank) => {
            this.suits.forEach((suit) => {
                const card = new Card(rank, suit);
                this.cards.push(card);
            });
        });
    }

    shuffle() {
        this.cards = _.shuffle(this.cards);
    }

    dealCard() {
        const dealtCard = this.cards[this.topCardIndex];
        this.topCardIndex++;
        return dealtCard;
    }
}

module.exports = Deck;