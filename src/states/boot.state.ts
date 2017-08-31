import { LoadState } from "./load.state";

export class BootState extends Phaser.State {

    static KEY: string = "boot_state";

    create(): void {
        this.game.stage.backgroundColor = "d6f3f6";

        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;

        this.game.renderer.renderSession.roundPixels = true;

        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        this.game.state.start(LoadState.KEY);
    }

}
