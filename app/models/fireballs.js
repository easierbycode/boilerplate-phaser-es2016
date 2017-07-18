
class Fireball extends Phaser.Bullet {
    
    constructor(game, x, y, key, frame) {
        super(game, x, y, key, frame);

        this.animations.add( 'rotate', [0, 1, 2, 3], 6, true );

        this.play( 'rotate' );
    }

}


export class Fireballs extends Phaser.Weapon {

    constructor( game, parent = game.world, name = 'Fireballs', addToStage = false, enableBody = true, physicsBodyType = Phaser.Physics.ARCADE ) {

        super( game, parent, name, addToStage, enableBody, physicsBodyType );

        this.bulletClass    = Fireball;

        this.createBullets( 32, 'fireball', 0 );

    }

}