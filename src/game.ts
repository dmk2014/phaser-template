import { TitleState } from './states/title.state'


export class Game extends Phaser.Game {

    constructor(config: Phaser.IGameConfig) {
        super(config)
        this.state.add(TitleState.KEY, new TitleState())
        this.state.start(TitleState.KEY)
    }

}