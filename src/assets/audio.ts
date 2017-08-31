interface IAudioAsset {
    Key: string;
    Format: {
        MP3?: () => string
        OGG?: () => string
        WAV?: () => string
    };
}

export class Audio {

    static Menu: IAudioAsset = {
        Key: "menuBackgroundAudio",
        Format: {
            MP3: () => require("assets/menu.mp3"),
            OGG: () => require("assets/menu.ogg"),
        },
    };

}
