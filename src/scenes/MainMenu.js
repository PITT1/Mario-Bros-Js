import { Scene } from 'phaser';

export class MainMenu extends Scene
{
    constructor ()
    {
        super('MainMenu');
    }

    create ()
    {
        this.add.image(0, 0, 'background')

        this.add.image(40, 30, 'logo').setOrigin(0, 0)

        this.add.text(60, 150, 'Super Mario', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setScale(0.5)

        this.input.once('pointerdown', () => {

            this.scene.start('Game');

        });
    }
}
