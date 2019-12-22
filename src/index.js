const Game = require('./classes/Game');
const utils = require('../lib/utils');
const chalk = require('chalk');
const shell = require('shelljs');


for (let i = 0; i < 100; i++) {
    shell.exec('clear');
    const game = new Game(1);

    // only soft hands
    if (process.env.npm_config_mode === 'soft') {
        if (!game.players[0].getBookIndex().includes('S')) {
            continue;
        }
    }

    // only splits
    if (process.env.npm_config_mode === 'split') {
        if (!game.players[0].getBookIndex().includes('D')) {
            continue;
        }
    }

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
    utils.sleep(game.delay);
    console.log(game.calculateOptimalPlay(game.players[0], game.dealer));
    console.log('\n');
    utils.sleep(game.delay);
}