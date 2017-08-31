import { Audio, Images } from "../assets";
import { PlayState } from "./play.state";

export class MenuState extends Phaser.State {

    static KEY: string = "menu_state";

    private logo: Phaser.Image;
    private backgroundAudio: Phaser.Sound;

    create(): void {
        this.game.add.image(0, 23, Images.MenuBackground.Key);

        this.logo = this.game.add.image(this.game.world.centerX, this.game.world.centerY - 50, Images.Logo.Key);
        this.logo.anchor.setTo(0.5, 0.5);
        this.logo.scale.setTo(0);
        this.game.add.tween(this.logo.scale).to({ x: 1, y: 1 }, 1500).start();

        const textStyle: Phaser.PhaserTextStyle = {
            font: "VT323",
            fontSize: 40,
            fill: "#FFFFFF",
            align: "center",
            stroke: "#000000",
            strokeThickness: 4,
        };
        const textLocation = new Phaser.Point(this.game.world.centerX, this.game.world.height - 60);
        const text = this.game.add.text(textLocation.x, textLocation.y, "Press space to play!", textStyle);
        text.anchor.setTo(0.5);

        this.backgroundAudio = this.game.add.audio(Audio.Menu.Key);
        this.backgroundAudio.fadeIn(Phaser.Timer.SECOND);
        this.backgroundAudio.loopFull();
        this.backgroundAudio.play();

        this.game.input.keyboard.addKeyCapture(Phaser.KeyCode.SPACEBAR);
        this.game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR).onDown.addOnce(this.onSpacebarPress, this);
    }

    update(): void {
        this.logo.angle += 1;
    }

    onSpacebarPress(): void {
        this.backgroundAudio.stop();
        this.game.state.start(PlayState.KEY);
    }

}
