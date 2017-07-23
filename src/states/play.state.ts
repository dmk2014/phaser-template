import * as Assets from '../assets'


export class PlayState extends Phaser.State {

    static KEY: string = 'play_state'

    private _player: Phaser.Sprite
    private _playerBody: Phaser.Physics.Arcade.Body
    private _wallsLayer: Phaser.TilemapLayer
    private _cursors: Phaser.CursorKeys

    create(): void {
        let map: Phaser.Tilemap = this.game.add.tilemap(Assets.Tilemaps.Level.Key)
        map.addTilesetImage(Assets.Tilemaps.Level.Tilesets.Clouds.Name, Assets.Tilemaps.Level.Tilesets.Clouds.Key)
        map.addTilesetImage(Assets.Tilemaps.Level.Tilesets.Sky.Name, Assets.Tilemaps.Level.Tilesets.Sky.Key)
        map.addTilesetImage(Assets.Tilemaps.Level.Tilesets.Spritesheet.Name, Assets.Tilemaps.Level.Tilesets.Spritesheet.Key)
        map.createLayer(Assets.Tilemaps.Level.Layers.Sky.Name)
        map.createLayer(Assets.Tilemaps.Level.Layers.Clouds.Name)
        map.createLayer(Assets.Tilemaps.Level.Layers.Background.Name)
        this._wallsLayer = map.createLayer(Assets.Tilemaps.Level.Layers.Tiles.Name)
        this._wallsLayer.resizeWorld()

        // TODO: Remove water tiles when Tilemap/Set is cleaned
        map.setCollision([64, 71, 72, 73, 74, 79, 74, 75, 76, 86, 88], true, this._wallsLayer)

        this._player = this.game.add.sprite(40, 90, Assets.Images.Player.Key)
        this._player.anchor.setTo(0.5)
        this.game.physics.arcade.enable(this._player)
        this._playerBody = this._player.body
        this._playerBody.gravity.y = 600

        this._cursors = this.game.input.keyboard.createCursorKeys()
        this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.UP, Phaser.Keyboard.DOWN, Phaser.Keyboard.LEFT, Phaser.Keyboard.RIGHT])
    }

    update(): void {
        // TODO: Player Animations
        this.game.physics.arcade.collide(this._player, this._wallsLayer)

        if (this._cursors.left.isDown) {
            this._playerBody.velocity.x = -230
        } else if (this._cursors.right.isDown) {
            this._playerBody.velocity.x = 230
        } else {
            this._playerBody.velocity.x = 0
        }

        if (this._cursors.up.isDown && this._playerBody.onFloor()) {
            this._playerBody.velocity.y = -370
        }
    }

}