import { Scene } from './scene'

describe('Scene', () => {
  const config = {
    type: Phaser.HEADLESS,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Scene
  }

  test('should be defined', () => {
    expect(Scene).toBeDefined()
  })

  test('can test creating a game', () => {
    const game = new Phaser.Game(config)

    expect(game).not.toBe(null)
  })
})
