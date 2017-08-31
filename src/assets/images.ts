interface IImageAsset {
    Key: string;
    GetPath: () => string;
}

export class Images {

    static MenuBackground: IImageAsset = {
        Key: "menu_bg",
        GetPath: (): string => require("assets/menu_bg.png"),
    };

    static Logo: IImageAsset = {
        Key: "logo",
        GetPath: (): string => require("assets/logo.png"),
    };

    static Player: IImageAsset = {
        Key: "player",
        GetPath: (): string => require("assets/player.png"),
    };

}
