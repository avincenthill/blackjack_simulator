// based on https://www.vegas-aces.com/site/articles/how-to-deal-blackjack-07-the-game.html

const Deck = require('./Deck');
const Player = require('./Player');
const Dealer = require('./Dealer');

class Game {
    constructor(numPlayers) {
        this.numPlayers = numPlayers;
        this.currentHand = 0;
        this.discardPile = [];
        this.delay = process.env.npm_config_delay || 2000;

        this.initPlayers();
        this.initDealer();

        this.initDeck();

        // based on https://wizardofodds.com/games/blackjack/strategy/1-deck/
        this.book = require('../../data/book.json');
        this.readablePlays = require('../../data/readablePlays.json');
    }

    initDeck() {
        this.deck = new Deck();

        this.deck.shuffle();

        // discard top card
        this.discardPile.push(this.deck.dealCard());

        this.dealStartingCards();

        this.endHand();
    }

    initDealer() {
        const newDealer = new Dealer();
        this.dealer = newDealer;
    }

    initPlayers() {
        this.players = [];
        for (let i = 0; i < this.numPlayers; i++) {
            const newPlayer = new Player(i);
            this.players.push(newPlayer);
        }

        this.numHandsPerNumPlayers = {
            1: 5,
            2: 4,
            3: 3,
            4: 2,
            5: 2,
            6: 2,
        }

        this.numHands = this.numHandsPerNumPlayers[this.numPlayers];
    }

    dealTo(player) {
        player.getCard(this.deck.dealCard());
    }

    dealToAll() {
        this.players.forEach(player => {
            this.dealTo(player);
        })
        this.dealTo(this.dealer);
    }

    dealStartingCards() {
        this.dealToAll();
        this.dealToAll();
    }

    calculateOptimalPlay(player, dealer) {
        return this.readablePlays[this.book[player.getBookIndex()][dealer.hand[1].value]];
    }

    endHand() {
        this.currentHand++;
    }
}

module.exports = Game;