import { Audio, Images } from "../assets";
import { PlayState } from "./play.state";

export class MenuState extends Phaser.State {

    static KEY: string = "menu_state";

    private logo: Phaser.Image;
    private backgroundAudio: Phaser.Sound;

    create(): void {
        this.add.image(0, 23, Images.MenuBackground.Key);

        this.logo = this.add.image(this.world.centerX, this.world.centerY - 50, Images.Logo.Key);
        this.logo.anchor.setTo(0.5, 0.5);
        this.logo.scale.setTo(0);
        this.add.tween(this.logo.scale).to({ x: 1, y: 1 }, 1500).start();

        const textStyle: Phaser.PhaserTextStyle = {
            font: "VT323",
            fontSize: 40,
            fill: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 4,
        };
        const text = this.add.text(this.world.centerX, this.world.height - 60, "Press space to play!", textStyle);
        text.anchor.setTo(0.5);

        this.backgroundAudio = this.add.audio(Audio.Menu.Key);
        this.backgroundAudio.fadeIn(Phaser.Timer.SECOND);
        this.backgroundAudio.loopFull();
        this.backgroundAudio.play();

        this.input.keyboard.addKeyCapture(Phaser.KeyCode.SPACEBAR);
        this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR).onDown.addOnce(this.onSpacebarPress, this);
    }

    update(): void {
        this.logo.angle += 1;
    }

    onSpacebarPress(): void {
        this.backgroundAudio.stop();
        this.state.start(PlayState.KEY);
    }

}
