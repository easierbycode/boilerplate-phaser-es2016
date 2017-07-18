import { Game } from './game';
import { StateManager } from './state-manager';
import GAME from './constants/game';

let game = new Game(GAME.WIDTH, GAME.HEIGHT, 'app', Phaser.CANVAS);
let manager = new StateManager(game);

function start() {
  manager.start();
}

if (window.cordova) {
  document.addEventListener('deviceready', start, false);
} else {
  document.addEventListener('DOMContentLoaded', start, false);
}