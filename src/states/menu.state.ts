import * as Assets from '../assets'


export class MenuState extends Phaser.State {

    static KEY: string = 'menu_state'

    private logo: Phaser.Sprite

    preload(): void {
        this.game.load.image(Assets.Images.Logo.Key, Assets.Images.Logo.GetPath())
    }

    create(): void {
        this.game.stage.backgroundColor = '3498db'
        this.logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, Assets.Images.Logo.Key)
        this.logo.anchor.setTo(0.5, 0.5)
    }

    update(): void {
        this.logo.angle += 1
    }

}