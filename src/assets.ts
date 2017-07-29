interface IImageAsset {
    Key: string
    GetPath: () => string
}

interface IAudioAsset {
    Key: string
    Format: {
        MP3?: () => string
        OGG?: () => string
        WAV?: () => string
    }
}

export namespace Images {

    export const MenuBackground: IImageAsset = {
        Key: "menu_bg",
        GetPath: (): string => { return require('assets/menu_bg.png') }
    }

    export const Logo: IImageAsset = {
        Key: "logo",
        GetPath: (): string => { return require('assets/logo.png') }
    }

    export const Player: IImageAsset = {
        Key: "player",
        GetPath: (): string => { return require('assets/player.png') }
    }

}

export namespace Audio {

    export const Menu: IAudioAsset = {
        Key: 'menuBackgroundAudio',
        Format: {
            MP3: () => { return require('assets/menu.mp3') },
            OGG: () => { return require('assets/menu.ogg') }
        }
    }

}

export namespace Tilemaps {

    export const Level = {
        Key: 'level',
        GetPath: () => { return require('assets/level.json') },
        Layers: {
            Sky: {
                Name: 'Sky'
            },
            Clouds: {
                Name: 'Clouds'
            },
            Background: {
                Name: 'Background'
            },
            Tiles: {
                Name: 'Tiles'
            },
            Water: {
                Name: 'Water'
            }
        },
        Tilesets: {
            Spritesheet: {
                Key: 'level_spritesheet',
                Name: 'spritesheet',
                GetPath: () => { return require('assets/spritesheet.png') }
            },
            Clouds: {
                Key: 'level_clouds',
                Name: 'clouds',
                GetPath: () => { return require('assets/clouds.png') }
            },
            Sky: {
                Key: 'level_sky',
                Name: 'bg',
                GetPath: () => { return require('assets/bg.png') }
            }
        }
    }

}