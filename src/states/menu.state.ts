import * as Assets from '../assets'


export class MenuState extends Phaser.State {

    static KEY: string = 'menu_state'

    private logo: Phaser.Sprite
    private playText: Phaser.Text

    create(): void {
        this.logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY - 50, Assets.Images.Logo.Key)
        this.logo.anchor.setTo(0.5, 0.5)
        this.logo.scale.setTo(0)
        this.game.add.tween(this.logo.scale).to({ x: 1, y: 1 }, 1500).start()

        let textStyle: Phaser.PhaserTextStyle = {
            font: 'VT323',
            fontSize: 35,
            fill: '#FFFFFF'
        }
        this.playText = this.game.add.text(this.game.world.centerX, this.game.height - 60, 'Press space to play!', textStyle)
        this.playText.anchor.setTo(0.5)

        let audio: Phaser.Sound = this.game.add.audio(Assets.Audio.Menu.Key)
        audio.fadeIn(Phaser.Timer.SECOND)
        audio.loopFull()
        audio.play()

        this.game.input.keyboard.addKeyCapture(Phaser.KeyCode.SPACEBAR)
        this.game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR).onDown.addOnce(this.onSpacebarPress, this)
    }

    update(): void {
        this.logo.angle += 1
    }

    onSpacebarPress(): void {
        // TODO
        console.log('Starting the game...')
        this.playText.text = 'Gameplay example coming soon!'
    }

}