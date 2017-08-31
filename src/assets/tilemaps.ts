export class Tilemaps {

    static Level = {
        Key: "level",
        GetPath: () => require("assets/level.json"),
        Layers: {
            Sky: {
                Name: "Sky",
            },
            Clouds: {
                Name: "Clouds",
            },
            Background: {
                Name: "Background",
            },
            Tiles: {
                Name: "Tiles",
            },
            Water: {
                Name: "Water",
            },
        },
        Tilesets: {
            Spritesheet: {
                Key: "level_spritesheet",
                Name: "spritesheet",
                GetPath: () => require("assets/spritesheet.png"),
            },
            Clouds: {
                Key: "level_clouds",
                Name: "clouds",
                GetPath: () => require("assets/clouds.png"),
            },
            Sky: {
                Key: "level_sky",
                Name: "sky",
                GetPath: () => require("assets/sky.png"),
            },
        },
    };

}
