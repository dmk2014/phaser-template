import { LoadState } from './load.state'


export class BootState extends Phaser.State {

    static KEY: string = 'boot_state'

    create(): void {
        this.game.stage.backgroundColor = '3498db'
        this.game.scale.pageAlignHorizontally = true
        this.game.scale.pageAlignVertically = true

        this.game.physics.startSystem(Phaser.Physics.ARCADE)

        this.game.state.start(LoadState.KEY)
    }

}