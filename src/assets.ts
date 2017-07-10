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

    export const Logo: IImageAsset = {
        Key: "logo",
        GetPath: (): string => { return require('assets/logo.png') }
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