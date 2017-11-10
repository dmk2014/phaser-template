import { LoadState } from "./load.state";

export class BootState extends Phaser.State {

    static KEY: string = "boot_state";

    create(): void {
        this.stage.backgroundColor = "d6f3f6";

        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;

        this.game.renderer.renderSession.roundPixels = true;

        this.physics.startSystem(Phaser.Physics.ARCADE);

        this.state.start(LoadState.KEY);
    }

}
