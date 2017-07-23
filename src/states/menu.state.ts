import * as Assets from '../assets'
import { PlayState } from './play.state'


export class MenuState extends Phaser.State {

    static KEY: string = 'menu_state'

    private logo: Phaser.Sprite
    private playText: Phaser.Text
    private backgroundAudio: Phaser.Sound

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

        this.backgroundAudio = this.game.add.audio(Assets.Audio.Menu.Key)
        this.backgroundAudio.fadeIn(Phaser.Timer.SECOND)
        this.backgroundAudio.loopFull()
        this.backgroundAudio.play()

        this.game.input.keyboard.addKeyCapture(Phaser.KeyCode.SPACEBAR)
        this.game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR).onDown.addOnce(this.onSpacebarPress, this)
    }

    update(): void {
        this.logo.angle += 1
    }

    onSpacebarPress(): void {
        this.backgroundAudio.stop()
        this.game.state.start(PlayState.KEY)
    }

}