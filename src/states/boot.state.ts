import { LoadState } from './load.state'


export class BootState extends Phaser.State {

    static KEY: string = 'boot_state'

    create(): void {
        this.game.scale.pageAlignHorizontally = true
        this.game.scale.pageAlignVertically = true

        this.game.state.start(LoadState.KEY)
    }

}