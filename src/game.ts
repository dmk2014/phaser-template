import { BootState } from './states/boot.state'
import { LoadState } from './states/load.state'
import { MenuState } from './states/menu.state'
import { PlayState } from './states/play.state'


export class Game extends Phaser.Game {

    constructor(config: Phaser.IGameConfig) {
        super(config)
        this.state.add(BootState.KEY, new BootState())
        this.state.add(LoadState.KEY, new LoadState())
        this.state.add(MenuState.KEY, new MenuState())
        this.state.add(PlayState.KEY, new PlayState())
        this.state.start(BootState.KEY)
    }

}