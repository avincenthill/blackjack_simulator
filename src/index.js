const Game = require('./classes/Game');
const utils = require('../lib/utils');
const chalk = require('chalk');
const shell = require('shelljs');


for (let i = 0; i < 100; i++) {
    const game = new Game(1);
    shell.exec('clear');

    console.log('\n');
    process.stdout.write(chalk.red('DEALER  '));
    console.log('--', game.dealer.hand[1].name);

    console.log('\n');

    process.stdout.write(chalk.green('PLAYER  '));
    const tempHand = [];
    game.players[0].hand.forEach(card => {
        tempHand.push(card.name);
    });
    console.log(tempHand[0], tempHand[1]);

    console.log('\n');


    process.stdout.write('OPTIMAL PLAY?  ');
    utils.sleep(2000);

    console.log(game.calculateOptimalPlay(game.players[0], game.dealer));
    console.log('\n');

    utils.sleep(2000);
}