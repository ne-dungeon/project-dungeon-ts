import Phaser from 'phaser'
import { spritesheet32, spritesheet64 } from './spriteconfig'

// load.image requires a string as a first argument, but declaring it as a variable allows for autocomplete and easier renaming.
const mineWallsTileset: string = 'MineWallsTileset'
const mineFloorTileset: string = 'MineFloorTileset'

export class Scene extends Phaser.Scene {
  preload (): void {
    this.load.spritesheet(
      mineWallsTileset,
      './assets/mine/MineWallsTileset.png',
      spritesheet64
    )
    this.load.spritesheet(
      mineFloorTileset,
      './assets/mine/MineFloorTileset.png',
      spritesheet32
    )
  }

  create (): void {
    const wall0 = this.add.image(0, 0, mineWallsTileset, 0)
    wall0.scale = 2
    const wall1 = this.add.image(128, 0, mineWallsTileset, 1)
    wall1.scale = 2
    const wall2 = this.add.image(256, 0, mineWallsTileset, 2)
    wall2.scale = 2
    const wall3 = this.add.image(384, 0, mineWallsTileset, 3)
    wall3.scale = 2
    const wall4 = this.add.image(512, 0, mineWallsTileset, 4)
    wall4.scale = 2
    const wall5 = this.add.image(640, 0, mineWallsTileset, 5)
    wall5.scale = 2
    const wall6 = this.add.image(768, 0, mineWallsTileset, 6)
    wall6.scale = 2
    // const logo = this.add.rectangle(200, 400, 148, 148, 0xff6699)

    // this.tweens.add({
    //   targets: logo,
    //   y: 450,
    //   duration: 2000,
    //   ease: 'Power2',
    //   yoyo: true,
    //   loop: -1
    // })
  }
}
