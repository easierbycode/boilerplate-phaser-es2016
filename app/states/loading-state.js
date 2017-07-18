import STATE_EVENTS from '../constants/state-events';

export class LoadingState extends Phaser.State {
    
    preload() {

        let loader = this.add.image(
            this.world.centerX,
            this.world.centerY,
            'loader'
        );
        loader.anchor.set(0.5, 0.5);
        this.load.setPreloadSprite(loader);

        this.load.image('player', 'assets/images/player.png');
        this.load.image( 'star', 'assets/images/star.png' );

        this.load.spritesheet( 'bowser', 'assets/images/bowser.png', 99, 72, 5, 1 );
        this.load.spritesheet( 'bowserParticles', 'assets/images/bowser-particles.png', 1, 1 );
        this.load.spritesheet( 'fireball', 'assets/images/fireball.png', 8, 8 );

        //load level data
        this.load.text('level1', 'assets/maps/level1.json');
    
    }

    create() {
        this.time.events.add(500, () => {
            this.game.trigger(STATE_EVENTS.LOADING_COMPLETED);
        });
    }

    update() {

    }

    render() {

    }
}
