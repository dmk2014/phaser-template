import * as WebFont from "webfontloader";
import { Audio, Images, Tilemaps } from "../assets";
import { MenuState } from "./menu.state";

export class LoadState extends Phaser.State {

    static KEY: string = "load_state";

    preload(): void {
        const textStyle: Phaser.PhaserTextStyle = {
            font: "Courier New",
            fill: "#FFFFFF",
            fontSize: 40,
            stroke: "#000000",
            strokeThickness: 3.5,
        };
        const text = this.add.text(this.world.centerX, this.world.centerY, "loading...", textStyle);
        text.anchor.setTo(0.5);

        this.load.image(Images.MenuBackground.Key, Images.MenuBackground.GetPath());
        this.load.image(Images.Logo.Key, Images.Logo.GetPath());
        this.load.spritesheet(Images.Player.Key, Images.Player.GetPath(), 31, 42);
        this.load.audio(Audio.Menu.Key, [Audio.Menu.Format.MP3(), Audio.Menu.Format.OGG()]);

        this.load.tilemap(Tilemaps.Level.Key, Tilemaps.Level.GetPath(), null, Phaser.Tilemap.TILED_JSON);
        this.load.image(Tilemaps.Level.Tilesets.Clouds.Key, Tilemaps.Level.Tilesets.Clouds.GetPath());
        this.load.image(Tilemaps.Level.Tilesets.Sky.Key, Tilemaps.Level.Tilesets.Sky.GetPath());
        this.load.image(Tilemaps.Level.Tilesets.Spritesheet.Key, Tilemaps.Level.Tilesets.Spritesheet.GetPath());

        // TODO: Handle situation where font loading fails?
        WebFont.load({
            google: {
                families: ["VT323"],
            },
            active: () => { this.time.events.add(Phaser.Timer.SECOND, this.onLoadComplete, this); },
        });
    }

    onLoadComplete(): void {
        this.state.start(MenuState.KEY);
    }

}
