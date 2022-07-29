import { MyGame } from './mygame'

describe('My Game', () => {
  const config = {
    type: Phaser.HEADLESS,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: MyGame
  }

  test('should be defined', () => {
    expect(MyGame).toBeDefined()
  })

  test('can test creating a game', () => {
    const game = new Phaser.Game(config)

    expect(game).not.toBe(null)
  })
})
