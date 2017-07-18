
import { Bowser } from './bowser';
import { Fireballs } from './fireballs';


export class Bowsers extends Phaser.Group {

    constructor( game ) {

        super( game );

        this.weapon = new Fireballs( this.game );

    }

    createEnemy( x, y, health, key, scale, speedX, speedY ) {
        
        let enemy = this.getFirstExists( false );

        if ( !enemy ) {
            enemy = new Bowser(
                this.game,
                x,
                y,
                key,
                health,
                this.weapon
            );
            
            this.add( enemy );
        }

        enemy.reset( x, y, health, key, scale, speedX, speedY );

    }

    damageEnemy( bullet, enemy ) {

        enemy.damage( 1 );
        bullet.kill();

    }
}