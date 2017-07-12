import { MenuState } from './menu.state'
import * as Assets from '../assets'


export class LoadState extends Phaser.State {

    static KEY: string = 'load_state'

    preload(): void {
        this.game.load.image(Assets.Images.Logo.Key, Assets.Images.Logo.GetPath())
        this.game.load.audio(Assets.Audio.Menu.Key, [Assets.Audio.Menu.Format.MP3(), Assets.Audio.Menu.Format.OGG()])
    }

    create(): void {
        this.game.state.start(MenuState.KEY)
    }

}