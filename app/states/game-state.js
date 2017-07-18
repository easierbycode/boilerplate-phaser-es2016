import GAME from '../constants/game';
import STATE_EVENTS from '../constants/state-events';
import { Bowsers } from '../models/bowsers';
import { Player } from '../models/player';

export class GameState extends Phaser.State {

    numLevels   = 1;

    init( currentLevel ) {
        
        this.game.physics.startSystem( Phaser.Physics.ARCADE );

        // level data
        this.currentLevel   = currentLevel ? currentLevel : 1;
    
    }

  create() {

      // stars
      var emitter = this.game.add.emitter(this.game.width / 2, 0, 100);
      emitter.width = this.game.width;
      emitter.makeParticles('star');
      emitter.setYSpeed(150, 250);
      emitter.setXSpeed(0, 0);
      emitter.setRotation(0, 0);
      emitter.start(false, 4000, 50, 0);
      emitter.forEach(function(particle){
          particle.tint = Phaser.ArrayUtils.getRandomItem([0x72747D, 0x3C3E45, 0xe5e7f0, 0xafb1b8, 0xff0099, 0xf3f315, 0x83f52c, 0x630dd0]);
      });

      this.bowsers = new Bowsers( this.game );

      this.loadLevel();

      this.game.player = new Player(
          this.game,
          this.game.world.centerX,
          this.game.height - 100
      );
      
      this.game.trigger( STATE_EVENTS.EXAMPLE_COMPLETED );

    }

    update() {
        this.physics.arcade.collide(this.game.player, this.layer);
    }

    loadLevel() {
        this.currentEnemyIndex = 0;
        this.levelData = JSON.parse(this.game.cache.getText('level' + this.currentLevel));

        // end of the level timer
        this.endOfLevelTimer = this.game.time.events.add(
            this.levelData.duration * Phaser.Timer.SECOND,
            () => {
                // this.bgMusic.stop();

                if(this.currentLevel < this.numLevels) {
                    this.currentLevel++;
                }
                else {
                    this.currentLevel = 1;
                }

                this.game.state.start('Game', true, false, this.currentLevel);
            }
        )
        this.scheduleNextEnemy();

    }

    scheduleNextEnemy() {
        
        let nextEnemy = this.levelData.enemies[this.currentEnemyIndex];
        let previousEnemy = this.levelData.enemies[this.currentEnemyIndex - 1];

        if(nextEnemy) {
            let nextTime = Phaser.Timer.SECOND * (nextEnemy.time - 
              (this.currentEnemyIndex == 0 ? 0 : previousEnemy.time));

            this.nextEnemyTimer = this.game.time.events.add(
                nextTime,
                () => {
                  this.bowsers.createEnemy(
                      nextEnemy.x * this.game.world.width, 
                      -100, 
                      nextEnemy.health,
                      nextEnemy.key,
                      nextEnemy.scale,
                      nextEnemy.speedX,
                      nextEnemy.speedY
                  );
                  this.currentEnemyIndex++;
                  this.scheduleNextEnemy();
                }
            );
        }
     
    }
  
}