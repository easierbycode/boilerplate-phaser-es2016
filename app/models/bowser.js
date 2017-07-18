
import GAME from '../constants/game';


export class Bowser extends Phaser.Sprite {

    constructor(game, x, y, key, health, weapon) {

        super(game, x, y, key);

        // set variables
        this.weapon = weapon;
        this.health = health;
        
        // create and initiate timer
        this.enemyTimer = this.game.time.create( false ); // keeps timer alive after it's done
        this.enemyTimer.start();

        // positioning
        this.anchor.setTo( 0.5, 1 );

        // physics properties
        game.physics.arcade.enable( this );

        // initialize animations
        this.animations.add( 'getHit', [0, 1, 2, 3, 4, 3, 4, 0], 6, false );

        this.scheduleShooting();

    }

    update() {

        //bounce on the borders
        if( this.position.x < this.body.halfWidth ) {
            this.position.x = this.body.halfWidth + 2;
            this.body.velocity.x *= -1;
        }
        else if( this.position.x > (this.game.world.width - this.body.halfWidth) ) {
            this.position.x = (this.game.world.width - this.body.halfWidth) - 2;
            this.body.velocity.x *= -1;
        }

        // kill object at bottom
        if(this.top > this.game.world.height) {
            this.kill();
        }

    }

    scheduleShooting() {

        var bullet = this.weapon.fire(
            this,
            this.game.player.x,
            this.game.player.y
        );

        if ( bullet )  bullet.scale.setTo( this.scale.x );

        this.enemyTimer.add(
            Phaser.Timer.SECOND * 2,
            this.scheduleShooting,
            this
        );

    }

    damage(amount) {

        // sprite damage functionality
        super.damage( amount );

        // play animation
        this.animateGetHit();
        
        // when dead
        if(this.health <= 0) {
            this.emitDeath();
            this.enemyTimer.pause();
        }

    }

    reset( x, y, health, key, scale, speedX, speedY ) {

        super.reset( x, y, health ); 

        this.body.velocity.x = speedX;
        this.body.velocity.y = speedY;

        this.scale.setTo( scale );

        // resume timer
        this.enemyTimer.resume();

    }

    animateGetHit() {

        this.play( 'getHit' );

    }

    emitDeath() {

        let emitter = this.game.add.emitter(
            this.x,
            this.y,
            100
        );

        emitter.blendMode = Phaser.blendModes.ADD;
        emitter.gravity.y = 600;
        emitter.setAlpha( 1, 0, 500, 'Cubic.easeIn' );
        emitter.setAngle( -180, 180, 0, 2400 );
        emitter.setRotation( 0, 0 );
        emitter.minParticleScale = 2;
        emitter.maxParticleScale = this.scale.x * 2;
        emitter.minParticleSpeed.setTo(-200, -200);
        emitter.maxParticleSpeed.setTo(200, 200);

        emitter.makeParticles( 'bowserParticles', [0,1,2] );
        emitter.start(true, 500, null, 100);

    }

}