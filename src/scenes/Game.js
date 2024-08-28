import { Scene } from 'phaser';
import { Level1 } from './Level1';
var marioIsDeath = false;

export class Game extends Scene {
  constructor() {
    super("Game");
  }


  preload() {

    this.load.setPath("assets");

    this.load.audio('jump', '/sound/effects/jump.mp3');
    this.load.audio('block-bump', '/sound/effects/block-bump.wav');
    this.load.audio('goomba-stomp', '/sound/effects/goomba-stomp.wav');
    this.load.audio('coin', '/sound/effects/coin.mp3');
    this.load.audio('theme', '/sound/music/overworld/theme.mp3');
    this.load.audio('gameover', '/sound/music/gameover.mp3');

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

    this.load.spritesheet('koopa', '/entities/koopa.png', {
      frameWidth: 16,
      frameHeight: 24,
      startFrame: 0,
      endFrame: 1
    });
    this.load.spritesheet('shell', '/entities/shell.png', {
      frameWidth: 16,
      frameHeight: 15,
      startFrame: 0,
      endFrame: 1
    });

    this.load.image('emptyBlock', '/blocks/overworld/emptyBlock.png');
  }

  create() {
    this.sound.play('theme', {volume: 0.25});

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


    //mapa del nivel 1
    Level1(this);


    //-----------------------creando a mario a mario------------------------------
    
    this.mario = this.physics.add
      .sprite(0, 100, "mario").setSize(13, 16);
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
        repeat: 0
      });
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

//------------------creando a los koopas-------------------------------

this.koopa = this.physics.add.group({
  key: 'koopa',
  repeat: 1
})
this.koopaCoordinates = [
  {x: 250, y: 0, direction: 40, shell: false, init:false, alive: true},
  {x: 200, y: 0, direction: -40, shell: false, init:false, alive: true}
];
this.anims.create({
  key: 'koopa-walk',
  frames: this.anims.generateFrameNumbers('koopa', {start: 0, end: 1}),
  repeat: -1,
  frameRate: 6
});
this.koopa.children.iterate((koopa, index) => {
  koopa.setPosition(this.koopaCoordinates[index].x, this.koopaCoordinates[index].y)
  if (this.koopaCoordinates[index].init == false) {
    this.koopaCoordinates[index].init = true;
    koopa.setVelocityX(this.koopaCoordinates[index].direction);
  }
  koopa.anims.play('koopa-walk', true);
})


//--------------mistery blocks------------------------------------------------------------
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
        child.body.setSize(10, 16);
    });

    //------------colisiones----------------------------------------------------

    function handleGoombaCollision(mario, goomba) {
      let goombaindex = this.goomba.getChildren().indexOf(goomba);
      if (mario.body.touching.down && goomba.body.touching.up) {
        this.sound.play('goomba-stomp', {volume: 0.55});
        mario.setVelocityY(-250);
        this.goombaCoordinates[goombaindex].alive = false;
      } else {
        console.log("mario muere");
        marioIsDeath = true;
      }
    }

    function handleBlockCollision(mario, block) {
      if (mario.body.touching.up && block.body.touching.down) {
        this.sound.play('block-bump', {volume: 0.55});
        this.tweens.add({
          targets: block,
          y: '-=10',
          duration: 50,
          ease: 'Linear',
          onComplete: () => {
            this.tweens.add({
              targets: block,
              y: '+= 10',
              duration: 50,
              ease: 'Linear'
            });
          }
        })
      }
    }

    function handleMisteryBlockCollision(mario, misteryblock) {
      if (mario.body.touching.up && misteryblock.body.touching.down) {
        if (misteryblock.anims.currentAnim) {
          this.sound.play('coin', {volume: 0.15});
        } else {
          this.sound.play('block-bump', {volume: 0.55});
        }
        this.tweens.add({
          targets: misteryblock,
          y: '-=10',
          duration: 100,
          ease: 'Linear',
          onComplete: () => {
            console.log(this.misteryblock.getChildren().indexOf(misteryblock));
            if (misteryblock.anims.currentAnim) {
              misteryblock.anims.destroy();      
            }
            misteryblock.setTexture('emptyBlock');
            this.tweens.add({
              targets: misteryblock,
              y: '+=10',
              duration: 100,
              ease: 'Linear'
            });
          }
        })
      }
    }

    function handleKoopaColision(mario, koopa) {
      let koopaindex = this.koopa.getChildren().indexOf(koopa);
      if (mario.body.touching.down && koopa.body.touching.up && !this.koopaCoordinates[koopaindex].shell) {
        this.koopaCoordinates[koopaindex].shell = true;
        mario.setVelocityY(-250);
        koopa.setVelocityX(0);
        koopa.setVelocityY(-100);
        console.dir(koopa);
        if (koopa.anims.currentAnim) {
          koopa.anims.destroy();      
        } 
        setTimeout(() => {
          koopa.setVelocityY(-150);
          koopa.setTexture('shell').setFrame(1).setSize(16, 16);
        },100)
      } else if (mario.body.touching.down && koopa.body.touching.up && this.koopaCoordinates[koopaindex].shell) {
        if (mario.body.x > koopa.body.x) {
          koopa.setVelocityX(-200);
          koopa.setVelocityY(-100);
        } else {
          koopa.setVelocityX(200);
          koopa.setVelocityY(-100);
        }
      }
      if (mario.body.touching.left && koopa.body.touching.right && !this.koopaCoordinates[koopaindex].shell) {
        marioIsDeath = true;
      } else if(mario.body.touching.right && koopa.body.touching.left && !this.koopaCoordinates[koopaindex].shell) {
        marioIsDeath = true;
      } else if(mario.body.touching.left && koopa.body.touching.right && this.koopaCoordinates[koopaindex].shell && koopa.body.velocity.x !== 0) {
        marioIsDeath = true;
      } else if (mario.body.touching.right && koopa.body.touching.left && this.koopaCoordinates[koopaindex].shell && koopa.body.velocity.x !== 0) {
        marioIsDeath = true;
      }
    }
    function handleKoopaGoombaCollision(koopa, goomba) {
      let koopaindex = this.koopa.getChildren().indexOf(koopa);
      if (koopa.body.touching.left && goomba.body.touching.right && this.koopaCoordinates[koopaindex].shell) {
        goomba.setVelocityY(-400);
        goomba.setFlipY(true);
        goomba.active = false;
        goomba.anims.destroy();
        goomba.body.removeCollidesWith(1);
      } else if (koopa.body.touching.right && goomba.body.touching.left && this.koopaCoordinates[koopaindex].shell) {
        goomba.setVelocityY(-300);
        goomba.setFlipY(true);
        goomba.active = false;
        goomba.anims.destroy();
        goomba.body.removeCollidesWith(1);
      }
    }


    this.physics.add.collider(this.mario, this.blocks, handleBlockCollision.bind(this));
    this.physics.add.collider(this.mario, this.misteryblock, handleMisteryBlockCollision.bind(this));
    this.physics.add.collider(this.mario, this.pipe);
    this.physics.add.collider(this.mario, this.goomba, handleGoombaCollision.bind(this));
    this.physics.add.collider(this.mario, this.koopa, handleKoopaColision.bind(this));

    this.physics.add.collider(this.goomba, this.blocks);
    this.physics.add.collider(this.goomba, this.pipe);
    this.physics.add.collider(this.goomba, this.misteryblock);
    this.physics.add.collider(this.goomba, this.goomba);

    this.physics.add.collider(this.koopa, this.blocks);
    this.physics.add.collider(this.koopa, this.pipe);
    this.physics.add.collider(this.koopa, this.misteryblock);
    this.physics.add.collider(this.koopa, this.goomba, handleKoopaGoombaCollision.bind(this));
    this.physics.add.collider(this.koopa, this.koopa);
    


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
        this.sound.play('jump', {volume: 0.05});
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
        this.mario.anims.frameRate = 45;
        this.mario.setMaxVelocity(170, 1120);
        this.mario.anims.play("mario-walk", true);
        this.mario.setFlipX(true);
    }

    if (this.mario.y > 223) {
      marioIsDeath = true;
      this.mario.body.setAccelerationX(0);
    }

    //----------------moviendo a los koopas------------------------------
    this.koopa.children.iterate((child, index) => {
      if (this.koopaCoordinates[index].alive) {
        if (child.body.touching.right && !this.koopaCoordinates[index].shell) {
          child.setFlipX(false);
          child.setVelocityX(-40);
        } else if (child.body.touching.left && !this.koopaCoordinates[index].shell) {
          child.setVelocityX(40);
          child.setFlipX(true);
        }
        if (child.body.touching.right && this.koopaCoordinates[index].shell) {
          child.setVelocityX(-200);
          child.setVelocityY(-100);
        } else if (child.body.touching.left && this.koopaCoordinates[index].shell) {
          child.setVelocityX(200);
          child.setVelocityY(-100);
        } 
      } else {
        child.visible = false;
        child.setVelocityX(0);
        child.body.enable = false;
      }
  });


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
