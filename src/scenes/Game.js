import { Scene } from 'phaser';

export class Game extends Scene
{
    constructor ()
    {
        super('Game');
    }

    preload (){
        this.load.setPath('assets');
        this.load.image('cloud1', '/scenery/overworld/cloud1.png');
        this.load.image('cloud2', 'scenery/overworld/cloud2.png');
        this.load.image('block', 'blocks/overworld/block.png');
        this.load.image('floorbricks', 'scenery/overworld/floorbricks.png');
        this.load.image('bush1', 'scenery/overworld/bush1.png');
        this.load.image('mountain2', 'scenery/overworld/mountain2.png');
        this.load.image('pipe2', '/scenery/pipe2.png');
        this.load.image('immovableblock', '/blocks/overworld/immovableBlock.png');
        this.load.spritesheet('mario', '/entities/mario.png', {frameWidth: 18, frameHeight: 16, startFrame: 0, endFrame: 5});
        this.load.spritesheet('misteryblock', '/blocks/overworld/misteryBlock.png', {frameWidth: 16, frameHeight: 16, startFrame: 0, endFrame: 2});
    }

    create() {
        this.cameras.main.setBackgroundColor('049cd8');

        this.physics.world.gravity.y = 2000;

        this.add.image(0, 0, 'cloud1').setOrigin(0, 0).setScale(0.3);
        this.add.image(200, 30, 'cloud2').setOrigin(0, 0).setScale(0.3);
        this.add.image(100, 200, 'bush1').setScale(0.5);
        this.add.image(-50, 200, 'mountain2').setScale(0.5);

        this.blocks = this.physics.add.staticGroup();
        this.misteryblock = this.physics.add.staticGroup();
        this.pipe = this.physics.add.staticGroup();

        this.blocks.create(175, 150, 'block');
        this.misteryblock.create(191, 150, 'misteryblock');
        this.blocks.create(207, 150, 'block');
        this.misteryblock.create(223, 150, 'misteryblock');
        this.blocks.create(239, 150, 'block');
        this.misteryblock.create(207, 86, 'misteryblock');
        this.pipe.create(320, 193, 'pipe2');
        this.blocks.create(400, 150, 'block');
        this.blocks.create(416, 150, 'block');
        this.blocks.create(432, 150, 'block');
        this.blocks.create(448, 86, 'block');
        this.blocks.create(464, 86, 'block');
        this.blocks.create(480, 86, 'block');
        this.blocks.create(496, 86, 'block');
        this.blocks.create(448, 86, 'block');
        this.blocks.create(512, 86, 'block');
        this.blocks.create(592, 86, 'block');
        this.blocks.create(608, 86, 'block');
        this.blocks.create(624, 86, 'block');
        this.blocks.create(640, 86, 'block');
        this.blocks.create(656, 86, 'block');
        this.misteryblock.create(672, 86, 'misteryblock');
        this.blocks.create(672, 150, 'block');
        this.blocks.create(768, 150, 'block');
        this.blocks.create(784, 150, 'block');
        this.misteryblock.create(848, 150, 'misteryblock');
        this.misteryblock.create(896, 150, 'misteryblock');
        this.misteryblock.create(896, 86, 'misteryblock');
        this.misteryblock.create(944, 150, 'misteryblock');
        this.blocks.create(1024, 150, 'block');
        this.blocks.create(1088, 86, 'block');
        this.blocks.create(1104, 86, 'block');
        this.blocks.create(1120, 86, 'block');
        this.blocks.create(1216, 86, 'block');
        this.misteryblock.create(1232, 86, 'misteryblock');
        this.blocks.create(1232, 150, 'block');
        this.misteryblock.create(1248, 86, 'misteryblock');
        this.blocks.create(1248, 150, 'block');
        this.blocks.create(1264, 86, 'block');

        this.blocks.create(1312, 201, 'immovableblock');
        this.blocks.create(1328, 201, 'immovableblock');
        this.blocks.create(1328, 185, 'immovableblock');
        this.blocks.create(1344, 201, 'immovableblock');
        this.blocks.create(1344, 185, 'immovableblock');
        this.blocks.create(1344, 169, 'immovableblock');
        this.blocks.create(1360, 201, 'immovableblock');
        this.blocks.create(1360, 185, 'immovableblock');
        this.blocks.create(1360, 169, 'immovableblock');
        this.blocks.create(1360, 153, 'immovableblock');
        this.blocks.create(1408, 153, 'immovableblock');
        this.blocks.create(1408, 169, 'immovableblock');
        this.blocks.create(1408, 185, 'immovableblock');
        this.blocks.create(1408, 201, 'immovableblock');
        this.blocks.create(1424, 169, 'immovableblock');
        this.blocks.create(1424, 185, 'immovableblock');
        this.blocks.create(1424, 201, 'immovableblock');
        this.blocks.create(1440, 185, 'immovableblock');
        this.blocks.create(1440, 201, 'immovableblock');
        this.blocks.create(1456, 201, 'immovableblock');

        this.blocks.create(1552, 201, 'immovableblock');

        this.blocks.create(1568, 201, 'immovableblock');
        this.blocks.create(1568, 185, 'immovableblock');

        this.blocks.create(1584, 201, 'immovableblock');
        this.blocks.create(1584, 185, 'immovableblock');
        this.blocks.create(1584, 169, 'immovableblock');

        this.blocks.create(1600, 201, 'immovableblock');
        this.blocks.create(1600, 185, 'immovableblock');
        this.blocks.create(1600, 169, 'immovableblock');
        this.blocks.create(1600, 153, 'immovableblock');

        this.blocks.create(1616, 201, 'immovableblock');
        this.blocks.create(1616, 185, 'immovableblock');
        this.blocks.create(1616, 169, 'immovableblock');
        this.blocks.create(1616, 153, 'immovableblock');
        this.blocks.create(1616, 137, 'immovableblock');

        this.blocks.create(1632, 201, 'immovableblock');
        this.blocks.create(1632, 185, 'immovableblock');
        this.blocks.create(1632, 169, 'immovableblock');
        this.blocks.create(1632, 153, 'immovableblock');
        this.blocks.create(1632, 137, 'immovableblock');
        this.blocks.create(1632, 121, 'immovableblock');

        this.blocks.create(1648, 201, 'immovableblock');
        this.blocks.create(1648, 185, 'immovableblock');
        this.blocks.create(1648, 169, 'immovableblock');
        this.blocks.create(1648, 153, 'immovableblock');
        this.blocks.create(1648, 137, 'immovableblock');
        this.blocks.create(1648, 121, 'immovableblock');
        this.blocks.create(1648, 105, 'immovableblock');

        this.blocks.create(1664, 201, 'immovableblock');
        this.blocks.create(1664, 185, 'immovableblock');
        this.blocks.create(1664, 169, 'immovableblock');
        this.blocks.create(1664, 153, 'immovableblock');
        this.blocks.create(1664, 137, 'immovableblock');
        this.blocks.create(1664, 121, 'immovableblock');
        this.blocks.create(1664, 105, 'immovableblock');
        this.blocks.create(1664, 89, 'immovableblock');

        this.blocks.create(1680, 201, 'immovableblock');
        this.blocks.create(1680, 185, 'immovableblock');
        this.blocks.create(1680, 169, 'immovableblock');
        this.blocks.create(1680, 153, 'immovableblock');
        this.blocks.create(1680, 137, 'immovableblock');
        this.blocks.create(1680, 121, 'immovableblock');
        this.blocks.create(1680, 105, 'immovableblock');
        this.blocks.create(1680, 89, 'immovableblock');

        this.blocks.create(1840, 201, 'immovableblock');

        this.blocks.create(-78 , 225, 'floorbricks');
        this.blocks.create(50 , 225, 'floorbricks');
        this.blocks.create(178, 225, 'floorbricks');
        this.blocks.create(306, 225, 'floorbricks');
        this.blocks.create(434, 225, 'floorbricks');
        //this.blocks.create(562, 225, 'floorbricks');
        this.blocks.create(690, 225, 'floorbricks');
        this.blocks.create(818, 225, 'floorbricks');
        this.blocks.create(946, 225, 'floorbricks');
        this.blocks.create(1074, 225, 'floorbricks');
        this.blocks.create(1202, 225, 'floorbricks');
        this.blocks.create(1330, 225, 'floorbricks');
        this.blocks.create(1458, 225, 'floorbricks');
        this.blocks.create(1586, 225, 'floorbricks');
        this.blocks.create(1714, 225, 'floorbricks');
        this.blocks.create(1842, 225, 'floorbricks');

        this.misteryblock.create(100, 150, 'misteryblock');

        this.mario = this.physics.add.sprite(0 , 0, 'mario').setScale(1).setOrigin(0, 1);
        this.anims.create({
            key: 'mario-walk',
            frames: this.anims.generateFrameNumbers('mario', { start: 0, end: 3 }),
            repeat: -1,
            frameRate: 12
        });

        this.anims.create({
            key: 'misteryblock-anim',
            frames: this.anims.generateFrameNumbers('misteryblock', { start: 0, end: 2 }),
            repeat: -1,
            frameRate: 5
        });

        this.misteryblock.children.iterate((child) => {
            child.anims.play('misteryblock-anim', true);
        });

        

        this.physics.add.collider(this.mario, this.blocks);
        this.physics.add.collider(this.mario, this.misteryblock);
        this.physics.add.collider(this.mario, this.pipe);
        

        this.keys = this.input.keyboard.createCursorKeys();

  //      this.input.once('pointerdown', () => {
//
  //          this.scene.start('GameOver');
//
      //  });
    }

    update () {
        if (this.keys.up.isDown && this.mario.body.touching.down) {
            this.mario.setVelocityY(-600);
        }


        if (this.keys.left.isDown) {
            this.mario.setVelocityX(-120); 
            this.mario.anims.play('mario-walk', true);
            this.mario.setFlipX(true);
        } else if (this.keys.right.isDown) {
            this.mario.setVelocityX(120);
            this.mario.anims.play('mario-walk', true);
            this.mario.setFlipX(false);
        } else {
            this.mario.setVelocityX(0);
            this.mario.anims.play('mario-walk', false);
        }

        if(!this.mario.body.touching.down && this.mario.body.velocity.y != 0) {
            this.mario.setFrame(5);
        } 

        this.cameras.main.scrollX = this.mario.x - (this.cameras.main.width / 5);
    }
}
