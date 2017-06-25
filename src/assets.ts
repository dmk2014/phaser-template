interface IAsset {
    Key: string
    GetPath(): string
}

export namespace Images {

    export const Logo: IAsset = {
        Key: "logo",
        GetPath(): string { return require('assets/logo.png') }
    }

}