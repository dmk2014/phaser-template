import { MenuState } from './menu.state'


export class BootState extends Phaser.State {

    static KEY: string = 'boot_state'

    create(): void {
        this.game.scale.pageAlignHorizontally = true
        this.game.scale.pageAlignVertically = true

        this.game.state.start(MenuState.KEY)
    }

}