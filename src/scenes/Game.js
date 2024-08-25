import { Scene } from 'phaser';
var marioIsDeath = false;

export class Game extends Scene {
  constructor() {
    super("Game");
  }


  preload() {
    this.load.setPath("assets");
    this.load.image("cloud1", "/scenery/overworld/cloud1.png");
    this.load.image("cloud2", "scenery/overworld/cloud2.png");
    this.load.image("block", "blocks/overworld/block.png");
    this.load.image("floorbricks", "scenery/overworld/floorbricks.png");
    this.load.image("bush1", "scenery/overworld/bush1.png");
    this.load.image("mountain2", "scenery/overworld/mountain2.png");
    this.load.image("pipe2", "/scenery/pipe2.png");
    this.load.spritesheet("goomba", "/entities/overworld/goomba.png", {
      frameWidth: 16,
      frameHeight: 16,
      startFrame: 0,
      endFrame: 2,
    });
    this.load.image("immovableblock", "/blocks/overworld/immovableBlock.png");
    this.load.spritesheet("mario", "/entities/mario.png", {
      frameWidth: 18,
      frameHeight: 16,
      startFrame: 0,
      endFrame: 5,
    });
    this.load.spritesheet(
      "misteryblock",
      "/blocks/overworld/misteryBlock.png",
      { frameWidth: 16,
        frameHeight: 16,
        startFrame: 0,
        endFrame: 2 }
    );
    this.load.image('emptyBlock', '/blocks/overworld/emptyBlock.png');
  }

  create() {
    this.cameras.main.setBackgroundColor("049cd8");

    this.physics.world.gravity.y = 2000;
    this.physics.world.setBounds(0, 0, 1850, 240, true, true,  false, true);

    this.add.image(0, 0, "cloud1").setOrigin(0, 0).setScale(0.3);
    this.add.image(200, 30, "cloud2").setOrigin(0, 0).setScale(0.3);
    this.add.image(100, 200, "bush1").setScale(0.5);
    this.add.image(-50, 200, "mountain2").setScale(0.5);
    this.add.image(396, 6, 'cloud2').setOrigin(0, 0).setScale(0.3);
    this.add.image(449, 200, "bush1").setScale(0.5);
    this.add.image(666, 200, "bush1").setScale(0.5);
    this.add.image(793, 200, "mountain2").setScale(0.5);
    this.add.image(831, 10, "cloud1").setOrigin(0, 0).setScale(0.3);

    this.blocks = this.physics.add.staticGroup();
    this.misteryblock = this.physics.add.staticGroup();
    this.pipe = this.physics.add.staticGroup();

    this.blocks.create(175, 150, "block");
    this.misteryblock.create(191, 150, "misteryblock");
    this.blocks.create(207, 150, "block");
    this.misteryblock.create(223, 150, "misteryblock");
    this.blocks.create(239, 150, "block");
    this.misteryblock.create(207, 86, "misteryblock");
    this.pipe.create(320, 193, "pipe2");
    this.blocks.create(400, 150, "block");
    this.blocks.create(416, 150, "block");
    this.blocks.create(432, 150, "block");
    this.blocks.create(464, 86, "block");
    this.blocks.create(480, 86, "block");
    this.blocks.create(496, 86, "block");
    this.blocks.create(448, 86, "block");
    this.blocks.create(512, 86, "block");
    this.blocks.create(592, 86, "block");
    this.blocks.create(608, 86, "block");
    this.blocks.create(624, 86, "block");
    this.blocks.create(640, 86, "block");
    this.blocks.create(656, 86, "block");
    this.misteryblock.create(672, 86, "misteryblock");
    this.blocks.create(672, 150, "block");
    this.blocks.create(768, 150, "block");
    this.blocks.create(784, 150, "block");
    this.misteryblock.create(848, 150, "misteryblock");
    this.misteryblock.create(896, 150, "misteryblock");
    this.misteryblock.create(896, 86, "misteryblock");
    this.misteryblock.create(944, 150, "misteryblock");
    this.blocks.create(1024, 150, "block");
    this.blocks.create(1088, 86, "block");
    this.blocks.create(1104, 86, "block");
    this.blocks.create(1120, 86, "block");
    this.blocks.create(1216, 86, "block");
    this.misteryblock.create(1232, 86, "misteryblock");
    this.blocks.create(1232, 150, "block");
    this.misteryblock.create(1248, 86, "misteryblock");
    this.blocks.create(1248, 150, "block");
    this.blocks.create(1264, 86, "block");

    this.blocks.create(1312, 201, "immovableblock");
    this.blocks.create(1328, 201, "immovableblock");
    this.blocks.create(1328, 185, "immovableblock");
    this.blocks.create(1344, 201, "immovableblock");
    this.blocks.create(1344, 185, "immovableblock");
    this.blocks.create(1344, 169, "immovableblock");
    this.blocks.create(1360, 201, "immovableblock");
    this.blocks.create(1360, 185, "immovableblock");
    this.blocks.create(1360, 169, "immovableblock");
    this.blocks.create(1360, 153, "immovableblock");
    this.blocks.create(1408, 153, "immovableblock");
    this.blocks.create(1408, 169, "immovableblock");
    this.blocks.create(1408, 185, "immovableblock");
    this.blocks.create(1408, 201, "immovableblock");
    this.blocks.create(1424, 169, "immovableblock");
    this.blocks.create(1424, 185, "immovableblock");
    this.blocks.create(1424, 201, "immovableblock");
    this.blocks.create(1440, 185, "immovableblock");
    this.blocks.create(1440, 201, "immovableblock");
    this.blocks.create(1456, 201, "immovableblock");

    this.blocks.create(1552, 201, "immovableblock");

    this.blocks.create(1568, 201, "immovableblock");
    this.blocks.create(1568, 185, "immovableblock");

    this.blocks.create(1584, 201, "immovableblock");
    this.blocks.create(1584, 185, "immovableblock");
    this.blocks.create(1584, 169, "immovableblock");

    this.blocks.create(1600, 201, "immovableblock");
    this.blocks.create(1600, 185, "immovableblock");
    this.blocks.create(1600, 169, "immovableblock");
    this.blocks.create(1600, 153, "immovableblock");

    this.blocks.create(1616, 201, "immovableblock");
    this.blocks.create(1616, 185, "immovableblock");
    this.blocks.create(1616, 169, "immovableblock");
    this.blocks.create(1616, 153, "immovableblock");
    this.blocks.create(1616, 137, "immovableblock");

    this.blocks.create(1632, 201, "immovableblock");
    this.blocks.create(1632, 185, "immovableblock");
    this.blocks.create(1632, 169, "immovableblock");
    this.blocks.create(1632, 153, "immovableblock");
    this.blocks.create(1632, 137, "immovableblock");
    this.blocks.create(1632, 121, "immovableblock");

    this.blocks.create(1648, 201, "immovableblock");
    this.blocks.create(1648, 185, "immovableblock");
    this.blocks.create(1648, 169, "immovableblock");
    this.blocks.create(1648, 153, "immovableblock");
    this.blocks.create(1648, 137, "immovableblock");
    this.blocks.create(1648, 121, "immovableblock");
    this.blocks.create(1648, 105, "immovableblock");

    this.blocks.create(1664, 201, "immovableblock");
    this.blocks.create(1664, 185, "immovableblock");
    this.blocks.create(1664, 169, "immovableblock");
    this.blocks.create(1664, 153, "immovableblock");
    this.blocks.create(1664, 137, "immovableblock");
    this.blocks.create(1664, 121, "immovableblock");
    this.blocks.create(1664, 105, "immovableblock");
    this.blocks.create(1664, 89, "immovableblock");

    this.blocks.create(1680, 201, "immovableblock");
    this.blocks.create(1680, 185, "immovableblock");
    this.blocks.create(1680, 169, "immovableblock");
    this.blocks.create(1680, 153, "immovableblock");
    this.blocks.create(1680, 137, "immovableblock");
    this.blocks.create(1680, 121, "immovableblock");
    this.blocks.create(1680, 105, "immovableblock");
    this.blocks.create(1680, 89, "immovableblock");

    this.blocks.create(1840, 201, "immovableblock");

    this.blocks.create(-78, 225, "floorbricks");
    this.blocks.create(50, 225, "floorbricks");
    this.blocks.create(178, 225, "floorbricks");
    this.blocks.create(306, 225, "floorbricks");
    this.blocks.create(434, 225, "floorbricks");
    //this.blocks.create(562, 225, 'floorbricks');
    this.blocks.create(690, 225, "floorbricks");
    this.blocks.create(818, 225, "floorbricks");
    this.blocks.create(946, 225, "floorbricks");
    this.blocks.create(1074, 225, "floorbricks");
    this.blocks.create(1202, 225, "floorbricks");
    this.blocks.create(1330, 225, "floorbricks");
    this.blocks.create(1458, 225, "floorbricks");
    this.blocks.create(1586, 225, "floorbricks");
    this.blocks.create(1714, 225, "floorbricks");
    this.blocks.create(1842, 225, "floorbricks");

    this.misteryblock.create(100, 150, "misteryblock");


    //configurando a mario
    
    this.mario = this.physics.add
      .sprite(0, 100, "mario")
      .setOrigin(0, 1);
    this.anims.create({
      key: "mario-walk",
      frames: this.anims.generateFrameNumbers("mario", { start: 0, end: 3 }),
      repeat: -1,
      frameRate: 12,
    });
    this.mario.setCollideWorldBounds(true);



    //---------------------creando a los goombas-------------------------------------------------
    
      this.goomba = this.physics.add.group({
        key: 'goomba',
        repeat: 3
      }).setOrigin(0 ,1);
      this.goombaCoordinates = [
        { x: 100, y: 100, direction: 40, init: false, alive: true },
        { x: 150, y: 50, direction: 40, init: false, alive: true },
        { x: 250, y: 50, direction: 40, init: false, alive: true },
        { x: 300, y: 50, direction: -40, init: false, alive: true },
        { x: 350, y: 0, diection: -40, init: false, alive: true }
    ];
    this.anims.create({
      key: 'goomba-walk',
      frames: this.anims.generateFrameNumbers('goomba', {start:0, end: 1}),
      repeat: -1,
      frameRate: 6
    })
    this.goomba.children.iterate((child, index) => {
      child.setPosition(this.goombaCoordinates[index].x, this.goombaCoordinates[index].y);
      if(this.goombaCoordinates[index].init == false) {
        this.goombaCoordinates[index].init = true;
        child.setVelocityX(this.goombaCoordinates[index].direction);
      }
      child.anims.play('goomba-walk', true);
    });

//------------------------------------------------------------
    

//--------------------------------------------------------------------------
    this.anims.create({
      key: "misteryblock-anim",
      frames: this.anims.generateFrameNumbers("misteryblock", {
        start: 0,
        end: 2,
      }),
      repeat: -1,
      frameRate: 5,
    });

    this.misteryblock.children.iterate((child) => {
      child.anims.play("misteryblock-anim", true);
    });

    //------------colisiones----------------------------------------------------

    function handleGoombaCollision(mario, goomba) {
      let goombaindex = this.goomba.getChildren().indexOf(goomba);
      if (mario.body.touching.down && goomba.body.touching.up) {
        mario.setVelocityY(-250);
        this.goombaCoordinates[goombaindex].alive = false;
      } else {
        console.log("mario muere");
        marioIsDeath = true;
      }
    }

    function handleBlockCollision(mario, block) {
      if (mario.body.touching.up && block.body.touching.down) {
        this.tweens.add({
          targets: block,
          y: block.y -= 3,
          duration: 100,
          ease: 'Sine',
          onComplete: () => {
            this.tweens.add({
              targets: block,
              y: block.y += 3,
              duration: 100,
              ease: 'Sine'
            });
          }
        })
      }
    }

    function handleMisteryBlockCollision(mario, misteryblock) {
      if (mario.body.touching.up && misteryblock.body.touching.down) {
        this.tweens.add({
          targets: misteryblock,
          y: misteryblock.y -= 3,
          duration: 100,
          ease: 'Sine.inOut',
          onComplete: () => {
            misteryblock.anims.remove('misteryblock-anim');
            misteryblock.setTexture('emptyBlock');
            this.tweens.add({
              targets: misteryblock,
              y: misteryblock.y += 3,
              duration: 100,
              ease: 'Sine.inOut'
            });
          }
        })
      }
    }


    this.physics.add.collider(this.mario, this.blocks, handleBlockCollision.bind(this));
    this.physics.add.collider(this.mario, this.misteryblock, handleMisteryBlockCollision.bind(this));
    this.physics.add.collider(this.mario, this.pipe);
    this.physics.add.collider(this.mario, this.goomba, handleGoombaCollision.bind(this));

    this.physics.add.collider(this.goomba, this.blocks);
    this.physics.add.collider(this.goomba, this.pipe);
    this.physics.add.collider(this.goomba, this.misteryblock);
    this.physics.add.collider(this.goomba, this.goomba);


    this.keys = this.input.keyboard.createCursorKeys();
    this.keyX = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);


    //      this.input.once('pointerdown', () => {
    //
    //          this.scene.start('GameOver');
    //
    //  });
  }

  update() {

    //moviendo a mario
    if (marioIsDeath == false) {
      if (this.keys.up.isDown && this.mario.body.touching.down) {
        this.mario.setVelocityY(-570);
      }
  
      if (this.keys.left.isDown) {
        this.mario.setAccelerationX(-300);
        this.mario.setMaxVelocity(100, 1120);
        this.mario.anims.play("mario-walk", true);
        this.mario.setFlipX(true);
      } else if (this.keys.right.isDown) {
        this.mario.setAccelerationX(300);
        this.mario.setMaxVelocity(100, 1120);
        this.mario.anims.play("mario-walk", true);
        this.mario.setFlipX(false);
      } else {
        this.mario.setAccelerationX(0);
        if (this.mario.body.velocity.x > 0) {
          this.mario.setAccelerationX(-300);
        } else if(this.mario.body.velocity.x < 0) {
          this.mario.setAccelerationX(300);
        }
        this.mario.anims.play("mario-walk", false);
      }
  
      if (!this.mario.body.touching.down && this.mario.body.velocity.y != 0) {
        this.mario.setFrame(5);
      }
    } else {
      this.mario.setFrame(4);
      this.mario.setVelocityX(0);
      this.mario.body.setAccelerationX(0);
      setTimeout(() => {
        if (this.mario.body.touching.down) {
          this.mario.setVelocityY(-500);
          this.physics.world.colliders.destroy(); 
          this.physics.world.setBounds(0, 0, 1850, 240, true, true,  false, false);
        }
      },500);
    }

    if(this.keyX.isDown && this.keys.right.isDown) {
        this.mario.setAccelerationX(300);
        this.mario.setMaxVelocity(170, 1120);
        this.mario.anims.play("mario-walk", true);
        this.mario.setFlipX(false);
    }

    if(this.keyX.isDown && this.keys.left.isDown) {
        this.mario.setAccelerationX(-300);
        this.mario.setMaxVelocity(170, 1120);
        this.mario.anims.play("mario-walk", true);
        this.mario.setFlipX(true);
    }

    if (this.mario.y > 223) {
      marioIsDeath = true;
      this.mario.body.setAccelerationX(0);
    }
    



    //moviendo a los goombas
    this.goomba.children.iterate((child, index) => {
      if (this.goombaCoordinates[index].alive) {
        if (child.body.touching.right) {
          child.setVelocityX(-40);
        } else if (child.body.touching.left) {
          child.setVelocityX(40);
        } 
      } else {
        child.setFrame(2);
        child.setVelocityX(0);
        child.body.enable = false;
        setTimeout(() => {
          child.visible = false;
        },500);
      }
  });

    this.cameras.main.scrollX = this.mario.x - 60;
  }
}
