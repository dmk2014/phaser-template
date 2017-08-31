// Imports Globals. Required for Webpack to include them in build.
// TSLint rule disabled in this file only - p2 and PIXI must be imported before Phaser.
// tslint:disable:ordered-imports
import "p2";
import "PIXI";
import "Phaser";

import { Game } from "./game";

window.onload = () => {
    const config: Phaser.IGameConfig = {
        width: 875,
        height: 630,
        renderer: Phaser.AUTO,
    };

    const game = new Game(config);
};
