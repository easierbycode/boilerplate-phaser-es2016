/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    BOOTSTRAP_COMPLETED: 'state:bootstrap-completed',
    LOADING_COMPLETED: 'state:loading-completed',
    EXAMPLE_COMPLETED: 'state:example-completed'
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {

    WIDTH: '100%', // 800,
    HEIGHT: '100%', // 480,

    GRAVITY: 0
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Game = undefined;

var _superEventEmitter = __webpack_require__(13);

var _superEventEmitter2 = _interopRequireDefault(_superEventEmitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Game = exports.Game = function (_Phaser$Game) {
    _inherits(Game, _Phaser$Game);

    function Game() {
        var _ref;

        _classCallCheck(this, Game);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = Game.__proto__ || Object.getPrototypeOf(Game)).call.apply(_ref, [this].concat(args)));

        _this.player = null;

        _superEventEmitter2.default.mixin(_this);
        return _this;
    }

    return Game;
}(Phaser.Game);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StateManager = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _stateEvents = __webpack_require__(0);

var _stateEvents2 = _interopRequireDefault(_stateEvents);

var _bootstrapState = __webpack_require__(10);

var _loadingState = __webpack_require__(12);

var _gameState = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StateManager = exports.StateManager = function () {
    function StateManager(game) {
        _classCallCheck(this, StateManager);

        this.game = null;

        this.game = game;
        this.setupStates();
        this.setupNativeListeners();
        this.setupListeners();
    }

    _createClass(StateManager, [{
        key: 'setupStates',
        value: function setupStates() {
            this.game.state.add('Bootstrap', _bootstrapState.BootstrapState);
            this.game.state.add('Loading', _loadingState.LoadingState);
            this.game.state.add('Game', _gameState.GameState);
        }
    }, {
        key: 'setupNativeListeners',
        value: function setupNativeListeners() {
            this.game.state.onStateChange.add(function (newState, oldState) {
                console.debug('Enter to new state: %s', newState);
            });
        }
    }, {
        key: 'setupListeners',
        value: function setupListeners() {
            var _this = this;

            this.game.on(_stateEvents2.default.BOOTSTRAP_COMPLETED, function () {
                _this.game.state.start('Loading');
            });

            this.game.on(_stateEvents2.default.LOADING_COMPLETED, function () {
                _this.game.state.start('Game');
            });
        }
    }, {
        key: 'start',
        value: function start() {
            this.game.state.start('Bootstrap');
        }
    }]);

    return StateManager;
}();

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Bowser = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _game = __webpack_require__(1);

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bowser = exports.Bowser = function (_Phaser$Sprite) {
    _inherits(Bowser, _Phaser$Sprite);

    function Bowser(game, x, y, key, health, weapon) {
        _classCallCheck(this, Bowser);

        // set variables
        var _this = _possibleConstructorReturn(this, (Bowser.__proto__ || Object.getPrototypeOf(Bowser)).call(this, game, x, y, key));

        _this.weapon = weapon;
        _this.health = health;

        // create and initiate timer
        _this.enemyTimer = _this.game.time.create(false); // keeps timer alive after it's done
        _this.enemyTimer.start();

        // positioning
        _this.anchor.setTo(0.5, 1);

        // physics properties
        game.physics.arcade.enable(_this);

        // initialize animations
        _this.animations.add('getHit', [0, 1, 2, 3, 4, 3, 4, 0], 6, false);

        _this.scheduleShooting();

        return _this;
    }

    _createClass(Bowser, [{
        key: 'update',
        value: function update() {

            //bounce on the borders
            if (this.position.x < this.body.halfWidth) {
                this.position.x = this.body.halfWidth + 2;
                this.body.velocity.x *= -1;
            } else if (this.position.x > this.game.world.width - this.body.halfWidth) {
                this.position.x = this.game.world.width - this.body.halfWidth - 2;
                this.body.velocity.x *= -1;
            }

            // kill object at bottom
            if (this.top > this.game.world.height) {
                this.kill();
            }
        }
    }, {
        key: 'scheduleShooting',
        value: function scheduleShooting() {

            var bullet = this.weapon.fire(this, this.game.player.x, this.game.player.y);

            if (bullet) bullet.scale.setTo(this.scale.x);

            this.enemyTimer.add(Phaser.Timer.SECOND * 2, this.scheduleShooting, this);
        }
    }, {
        key: 'damage',
        value: function damage(amount) {

            // sprite damage functionality
            _get(Bowser.prototype.__proto__ || Object.getPrototypeOf(Bowser.prototype), 'damage', this).call(this, amount);

            // play animation
            this.animateGetHit();

            // when dead
            if (this.health <= 0) {
                this.emitDeath();
                this.enemyTimer.pause();
            }
        }
    }, {
        key: 'reset',
        value: function reset(x, y, health, key, scale, speedX, speedY) {

            _get(Bowser.prototype.__proto__ || Object.getPrototypeOf(Bowser.prototype), 'reset', this).call(this, x, y, health);

            this.body.velocity.x = speedX;
            this.body.velocity.y = speedY;

            this.scale.setTo(scale);

            // resume timer
            this.enemyTimer.resume();
        }
    }, {
        key: 'animateGetHit',
        value: function animateGetHit() {

            this.play('getHit');
        }
    }, {
        key: 'emitDeath',
        value: function emitDeath() {

            var emitter = this.game.add.emitter(this.x, this.y, 100);

            emitter.blendMode = Phaser.blendModes.ADD;
            emitter.gravity.y = 600;
            emitter.setAlpha(1, 0, 500, 'Cubic.easeIn');
            emitter.setAngle(-180, 180, 0, 2400);
            emitter.setRotation(0, 0);
            emitter.minParticleScale = 2;
            emitter.maxParticleScale = this.scale.x * 2;
            emitter.minParticleSpeed.setTo(-200, -200);
            emitter.maxParticleSpeed.setTo(200, 200);

            emitter.makeParticles('bowserParticles', [0, 1, 2]);
            emitter.start(true, 500, null, 100);
        }
    }]);

    return Bowser;
}(Phaser.Sprite);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Bowsers = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bowser = __webpack_require__(6);

var _fireballs = __webpack_require__(8);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bowsers = exports.Bowsers = function (_Phaser$Group) {
    _inherits(Bowsers, _Phaser$Group);

    function Bowsers(game) {
        _classCallCheck(this, Bowsers);

        var _this = _possibleConstructorReturn(this, (Bowsers.__proto__ || Object.getPrototypeOf(Bowsers)).call(this, game));

        _this.weapon = new _fireballs.Fireballs(_this.game);

        return _this;
    }

    _createClass(Bowsers, [{
        key: 'createEnemy',
        value: function createEnemy(x, y, health, key, scale, speedX, speedY) {

            var enemy = this.getFirstExists(false);

            if (!enemy) {
                enemy = new _bowser.Bowser(this.game, x, y, key, health, this.weapon);

                this.add(enemy);
            }

            enemy.reset(x, y, health, key, scale, speedX, speedY);
        }
    }, {
        key: 'damageEnemy',
        value: function damageEnemy(bullet, enemy) {

            enemy.damage(1);
            bullet.kill();
        }
    }]);

    return Bowsers;
}(Phaser.Group);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Fireball = function (_Phaser$Bullet) {
    _inherits(Fireball, _Phaser$Bullet);

    function Fireball(game, x, y, key, frame) {
        _classCallCheck(this, Fireball);

        var _this = _possibleConstructorReturn(this, (Fireball.__proto__ || Object.getPrototypeOf(Fireball)).call(this, game, x, y, key, frame));

        _this.animations.add('rotate', [0, 1, 2, 3], 6, true);

        _this.play('rotate');
        return _this;
    }

    return Fireball;
}(Phaser.Bullet);

var Fireballs = exports.Fireballs = function (_Phaser$Weapon) {
    _inherits(Fireballs, _Phaser$Weapon);

    function Fireballs(game) {
        var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : game.world;
        var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Fireballs';
        var addToStage = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        var enableBody = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
        var physicsBodyType = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : Phaser.Physics.ARCADE;

        _classCallCheck(this, Fireballs);

        var _this2 = _possibleConstructorReturn(this, (Fireballs.__proto__ || Object.getPrototypeOf(Fireballs)).call(this, game, parent, name, addToStage, enableBody, physicsBodyType));

        _this2.bulletClass = Fireball;

        _this2.createBullets(32, 'fireball', 0);

        return _this2;
    }

    return Fireballs;
}(Phaser.Weapon);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Player = exports.Player = function (_Phaser$Sprite) {
    _inherits(Player, _Phaser$Sprite);

    function Player(game) {
        var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var key = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'player';

        _classCallCheck(this, Player);

        var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, game, x, y, key));

        game.add.existing(_this);
        game.physics.arcade.enable(_this);

        _this.anchor.setTo(0.5);

        return _this;
    }

    return Player;
}(Phaser.Sprite);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BootstrapState = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _stateEvents = __webpack_require__(0);

var _stateEvents2 = _interopRequireDefault(_stateEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BootstrapState = exports.BootstrapState = function (_Phaser$State) {
    _inherits(BootstrapState, _Phaser$State);

    function BootstrapState() {
        _classCallCheck(this, BootstrapState);

        return _possibleConstructorReturn(this, (BootstrapState.__proto__ || Object.getPrototypeOf(BootstrapState)).apply(this, arguments));
    }

    _createClass(BootstrapState, [{
        key: 'preload',
        value: function preload() {
            this.load.image('loader', 'assets/images/loader.png');
        }
    }, {
        key: 'create',
        value: function create() {
            this.game.stage.backgroundColor = '#000000';

            this.game.trigger(_stateEvents2.default.BOOTSTRAP_COMPLETED);
        }
    }, {
        key: 'update',
        value: function update() {}
    }, {
        key: 'render',
        value: function render() {}
    }]);

    return BootstrapState;
}(Phaser.State);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GameState = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _game = __webpack_require__(1);

var _game2 = _interopRequireDefault(_game);

var _stateEvents = __webpack_require__(0);

var _stateEvents2 = _interopRequireDefault(_stateEvents);

var _bowsers = __webpack_require__(7);

var _player = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameState = exports.GameState = function (_Phaser$State) {
    _inherits(GameState, _Phaser$State);

    function GameState() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, GameState);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GameState.__proto__ || Object.getPrototypeOf(GameState)).call.apply(_ref, [this].concat(args))), _this), _this.numLevels = 1, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(GameState, [{
        key: 'init',
        value: function init(currentLevel) {

            this.game.physics.startSystem(Phaser.Physics.ARCADE);

            // level data
            this.currentLevel = currentLevel ? currentLevel : 1;
        }
    }, {
        key: 'create',
        value: function create() {

            // stars
            var emitter = this.game.add.emitter(this.game.width / 2, 0, 100);
            emitter.width = this.game.width;
            emitter.makeParticles('star');
            emitter.setYSpeed(150, 250);
            emitter.setXSpeed(0, 0);
            emitter.setRotation(0, 0);
            emitter.start(false, 4000, 50, 0);
            emitter.forEach(function (particle) {
                particle.tint = Phaser.ArrayUtils.getRandomItem([0x72747D, 0x3C3E45, 0xe5e7f0, 0xafb1b8, 0xff0099, 0xf3f315, 0x83f52c, 0x630dd0]);
            });

            this.bowsers = new _bowsers.Bowsers(this.game);

            this.loadLevel();

            this.game.player = new _player.Player(this.game, this.game.world.centerX, this.game.height - 100);

            this.game.trigger(_stateEvents2.default.EXAMPLE_COMPLETED);
        }
    }, {
        key: 'update',
        value: function update() {
            this.physics.arcade.collide(this.game.player, this.layer);
        }
    }, {
        key: 'loadLevel',
        value: function loadLevel() {
            var _this2 = this;

            this.currentEnemyIndex = 0;
            this.levelData = JSON.parse(this.game.cache.getText('level' + this.currentLevel));

            // end of the level timer
            this.endOfLevelTimer = this.game.time.events.add(this.levelData.duration * Phaser.Timer.SECOND, function () {
                // this.bgMusic.stop();

                if (_this2.currentLevel < _this2.numLevels) {
                    _this2.currentLevel++;
                } else {
                    _this2.currentLevel = 1;
                }

                _this2.game.state.start('Game', true, false, _this2.currentLevel);
            });
            this.scheduleNextEnemy();
        }
    }, {
        key: 'scheduleNextEnemy',
        value: function scheduleNextEnemy() {
            var _this3 = this;

            var nextEnemy = this.levelData.enemies[this.currentEnemyIndex];
            var previousEnemy = this.levelData.enemies[this.currentEnemyIndex - 1];

            if (nextEnemy) {
                var nextTime = Phaser.Timer.SECOND * (nextEnemy.time - (this.currentEnemyIndex == 0 ? 0 : previousEnemy.time));

                this.nextEnemyTimer = this.game.time.events.add(nextTime, function () {
                    _this3.bowsers.createEnemy(nextEnemy.x * _this3.game.world.width, -100, nextEnemy.health, nextEnemy.key, nextEnemy.scale, nextEnemy.speedX, nextEnemy.speedY);
                    _this3.currentEnemyIndex++;
                    _this3.scheduleNextEnemy();
                });
            }
        }
    }]);

    return GameState;
}(Phaser.State);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LoadingState = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _stateEvents = __webpack_require__(0);

var _stateEvents2 = _interopRequireDefault(_stateEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoadingState = exports.LoadingState = function (_Phaser$State) {
    _inherits(LoadingState, _Phaser$State);

    function LoadingState() {
        _classCallCheck(this, LoadingState);

        return _possibleConstructorReturn(this, (LoadingState.__proto__ || Object.getPrototypeOf(LoadingState)).apply(this, arguments));
    }

    _createClass(LoadingState, [{
        key: 'preload',
        value: function preload() {

            var loader = this.add.image(this.world.centerX, this.world.centerY, 'loader');
            loader.anchor.set(0.5, 0.5);
            this.load.setPreloadSprite(loader);

            this.load.image('player', 'assets/images/player.png');
            this.load.image('star', 'assets/images/star.png');

            this.load.spritesheet('bowser', 'assets/images/bowser.png', 99, 72, 5, 1);
            this.load.spritesheet('bowserParticles', 'assets/images/bowser-particles.png', 1, 1);
            this.load.spritesheet('fireball', 'assets/images/fireball.png', 8, 8);

            //load level data
            this.load.text('level1', 'assets/maps/level1.json');
        }
    }, {
        key: 'create',
        value: function create() {
            var _this2 = this;

            this.time.events.add(500, function () {
                _this2.game.trigger(_stateEvents2.default.LOADING_COMPLETED);
            });
        }
    }, {
        key: 'update',
        value: function update() {}
    }, {
        key: 'render',
        value: function render() {}
    }]);

    return LoadingState;
}(Phaser.State);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.EventEmitter=t():e.EventEmitter=t()}(this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";e.exports=n(1)},function(e,t,n){/**
	 * @author Piotr Kowalski <piecioshka@gmail.com> (https://piecioshka.pl/)
	 * @name super-event-emitter
	 * @description Super small (2KB) and simple interpretation of popular event management.
	 * @version 4.1.4
	 * @license MIT
	 * @example
	 * var bar = {}; // Or any other object.
	 * EventEmitter.mixin(bar);
	 * bar.on('foo', function () {
	 *     console.log('foo event emitted');
	 * });
	 * bar.emit('foo');
	 */
"use strict";function i(e,t){var n="forEach"in Array.prototype;if(n)e.forEach(t);else for(var i=0;i<e.length;i+=1)t(e[i])}function r(e,t){var n="filter"in Array.prototype;if(n)return e.filter(t);for(var i=[],r=0;r<e.length;r+=1){var o=e[r];t(o)&&i.push(o)}return i}function o(e,t){if(!e)throw new Error(t)}function s(e){return"string"==typeof e}function a(e){return"function"==typeof e}function c(){return this instanceof c?void(this._listeners=[]):new c}var f=n(2),u={on:function(e,t,n){return o(s(e),"EventEmitter#on: name is not a string"),o(a(t),"EventEmitter#on: fn is not a function"),n=n||this,this._listeners.push({name:e,fn:t,ctx:n}),this},once:function(e,t,n){function i(){t.apply(n,arguments),r.off(e,i)}n=n||this;var r=this;return this.on(e,i,n),this},off:function(e,t){return this._listeners=e?r(this._listeners,function(n){return n.name!==e||!!a(t)&&n.fn!==t}):[],this},emit:function(e,t){return o(s(e),"EventEmitter#emit: name is not a string"),i(this._listeners,function(n){n.name===e&&n.fn.call(n.ctx,t);var i=/^all|\*$/.test(n.name);i&&n.fn.call(n.ctx,e,t)}),this}};u.addEventListener=u.addListener=u.bind=u.on,u.removeEventListener=u.removeListener=u.unbind=u.off,u.dispatchEventListener=u.dispatchListener=u.trigger=u.emit,c.prototype=u,c.mixin=function(e){var t=new c;for(var n in t)e[n]=t[n];return e},c.prototype.mixin=c.mixin,c.VERSION=f.version,e.exports=c},function(e,t){e.exports={name:"super-event-emitter",description:"Super small (2KB) and simple interpretation of popular event management.",version:"4.1.4",license:"MIT",author:{name:"Piotr Kowalski",email:"piecioshka@gmail.com",url:"https://piecioshka.pl/"},scripts:{build:"webpack --profile",watch:"webpack -w",test:"jasmine JASMINE_CONFIG_PATH=test/unit/jasmine.json",coverage:"istanbul cover jasmine JASMINE_CONFIG_PATH=test/unit/jasmine.json",coveralls:"npm run coverage && cat ./coverage/lcov.info | coveralls -v"},repository:{type:"git",url:"http://github.com/piecioshka/super-event-emitter.git"},devDependencies:{coveralls:"^2.11.12",istanbul:"^0.4.4",jasmine:"^2.4.1","json-loader":"^0.5.4","string-replace-loader":"^1.0.3",webpack:"^1.12.14"},files:["dist","lib","index.js","package.json","README.md"],keywords:["super","event","emitter","mixin","on","off","emit","trigger","simple"],main:"./dist/super-event-emitter.min.js"}}])});
//# sourceMappingURL=super-event-emitter.min.js.map

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(2);

var _stateManager = __webpack_require__(3);

var _game2 = __webpack_require__(1);

var _game3 = _interopRequireDefault(_game2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var game = new _game.Game(_game3.default.WIDTH, _game3.default.HEIGHT, 'app', Phaser.CANVAS);
var manager = new _stateManager.StateManager(game);

function start() {
  manager.start();
}

if (window.cordova) {
  document.addEventListener('deviceready', start, false);
} else {
  document.addEventListener('DOMContentLoaded', start, false);
}

/***/ })
/******/ ]);