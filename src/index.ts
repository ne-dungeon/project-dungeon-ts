import { MyGame } from './mygame'

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  scene: MyGame
}

/* eslint-disable @typescript-eslint/no-unused-vars */
const game = new Phaser.Game(config)
