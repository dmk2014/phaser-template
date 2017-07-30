import { MenuState } from './menu.state'
import * as Assets from '../assets'


export class PlayState extends Phaser.State {

    static KEY: string = 'play_state'

    private player: Phaser.Sprite
    private playerBody: Phaser.Physics.Arcade.Body
    private wallsLayer: Phaser.TilemapLayer
    private waterLayer: Phaser.TilemapLayer
    private cursors: Phaser.CursorKeys

    private animations = {
        WalkLeft: 'walk_left',
        WalkRight: 'walk_right'
    }

    create(): void {
        let map: Phaser.Tilemap = this.game.add.tilemap(Assets.Tilemaps.Level.Key)
        map.addTilesetImage(Assets.Tilemaps.Level.Tilesets.Clouds.Name, Assets.Tilemaps.Level.Tilesets.Clouds.Key)
        map.addTilesetImage(Assets.Tilemaps.Level.Tilesets.Sky.Name, Assets.Tilemaps.Level.Tilesets.Sky.Key)
        map.addTilesetImage(Assets.Tilemaps.Level.Tilesets.Spritesheet.Name, Assets.Tilemaps.Level.Tilesets.Spritesheet.Key)
        map.createLayer(Assets.Tilemaps.Level.Layers.Sky.Name)
        map.createLayer(Assets.Tilemaps.Level.Layers.Clouds.Name)
        map.createLayer(Assets.Tilemaps.Level.Layers.Background.Name)
        this.waterLayer = map.createLayer(Assets.Tilemaps.Level.Layers.Water.Name)
        this.wallsLayer = map.createLayer(Assets.Tilemaps.Level.Layers.Tiles.Name)
        this.wallsLayer.resizeWorld()

        map.setCollision([13], true, this.waterLayer)
        map.setCollision([9, 10, 11, 12], true, this.wallsLayer)

        this.player = this.game.add.sprite(40, 190, Assets.Images.Player.Key, 1)
        this.player.animations.add(this.animations.WalkLeft, [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 25, true)
        this.player.animations.add(this.animations.WalkRight, [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], 25, true)
        this.player.anchor.setTo(0.5)
        this.game.physics.arcade.enable(this.player)
        this.playerBody = this.player.body
        this.playerBody.gravity.y = 600

        this.cursors = this.game.input.keyboard.createCursorKeys()
        this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.UP, Phaser.Keyboard.DOWN, Phaser.Keyboard.LEFT, Phaser.Keyboard.RIGHT])
    }

    update(): void {
        if (!this.player.alive) {
            return
        }
        if (!this.player.inWorld) {
            this.onGameOver()
        }

        this.game.physics.arcade.collide(this.player, this.waterLayer, this.onGameOver, null, this)
        this.game.physics.arcade.collide(this.player, this.wallsLayer)

        this.setPlayerVelocity()
        this.setPlayerAnimation()
    }

    setPlayerVelocity(): void {
        if (this.cursors.up.isDown && this.playerBody.onFloor()) {
            this.playerBody.velocity.y = -370
        } else if (this.cursors.left.isDown) {
            this.playerBody.velocity.x = -220
            this.player.animations.play(this.animations.WalkLeft)
        } else if (this.cursors.right.isDown) {
            this.playerBody.velocity.x = 220
        } else {
            this.playerBody.velocity.x = 0
        }
    }

    setPlayerAnimation(): void {
        const velocity = this.playerBody.velocity.x

        if (velocity === 0) {
            this.player.frame = 0
        } else if (!this.playerBody.onFloor()) {
            this.player.frame = velocity < 0 ? 1 : 2
        } else {
            this.player.animations.play(velocity < 0 ? this.animations.WalkLeft : this.animations.WalkRight)
        }
    }

    onGameOver(): void {
        this.player.kill()

        let textStyle: Phaser.PhaserTextStyle = {
            font: 'VT323',
            fontSize: 40,
            fill: '#FFFFFF',
            align: 'center',
            stroke: '#000000',
            strokeThickness: 4
        }
        let text = this.game.add.text(this.game.world.centerX, this.game.world.centerY, 'Game Over!\nPress space to return to Menu', textStyle)
        text.anchor.setTo(0.5)

        this.game.input.keyboard.
            addKey(Phaser.KeyCode.SPACEBAR).
            onDown.
            addOnce(() => { this.game.state.start(MenuState.KEY) }, this)
    }

}