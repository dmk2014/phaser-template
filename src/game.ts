import { BootState } from './states/boot.state'
import { MenuState } from './states/menu.state'


export class Game extends Phaser.Game {

    constructor(config: Phaser.IGameConfig) {
        super(config)
        this.state.add(BootState.KEY, new BootState())
        this.state.add(MenuState.KEY, new MenuState())
        this.state.start(BootState.KEY)
    }

}