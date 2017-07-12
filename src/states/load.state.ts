import { MenuState } from './menu.state'
import * as Assets from '../assets'
import * as WebFont from 'webfontloader'


export class LoadState extends Phaser.State {

    static KEY: string = 'load_state'

    preload(): void {
        let textStyle: Phaser.PhaserTextStyle = {
            font: 'Courier New',
            fill: '#FFFFFF',
            fontSize: 35
        }
        let text: Phaser.Text = this.game.add.text(this.game.world.centerX, this.game.world.centerY, 'loading...', textStyle)
        text.anchor.setTo(0.5)

        this.game.load.image(Assets.Images.Logo.Key, Assets.Images.Logo.GetPath())
        this.game.load.audio(Assets.Audio.Menu.Key, [Assets.Audio.Menu.Format.MP3(), Assets.Audio.Menu.Format.OGG()])

        // TODO: Handle situation where font loading fails?
        WebFont.load({
            google: {
                families: ['VT323']
            },
            active: () => { this.game.time.events.add(Phaser.Timer.SECOND, this.onLoadComplete, this) }
        })
    }

    onLoadComplete(): void {
        this.game.state.start(MenuState.KEY)
    }

}