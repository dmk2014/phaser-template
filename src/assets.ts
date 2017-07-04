interface IImageAsset {
    Key: string
    GetPath: () => string
}

interface ISoundAsset {
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