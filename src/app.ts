// Imports Globals. Required for Webpack to include them in build.
import "p2";
import "PIXI";
import "Phaser";

import { Game } from './game'

window.onload = () => {
    const config: Phaser.IGameConfig = {
        width: 875,
        height: 630,
        renderer: Phaser.AUTO
    }

    new Game(config)
}