import Phaser from 'phaser'
import WebFont from 'webfontloader'

export default class extends Phaser.State {
  init () {
    this.stage.backgroundColor = '#EDEEC9'
    this.fontsReady = false
    this.fontsLoaded = this.fontsLoaded.bind(this)
  }

  preload () {
    WebFont.load({
      google: {
        families: ['Oswald', 'Roboto', 'Lato', 'Alegreya Sans SC', 'Text Me One', 'Changa']
      },
      active: this.fontsLoaded
    });

    let text = this.add.text(this.world.centerX, this.world.centerY, 'loading fonts', { font: '16px Arial', fill: '#dddddd', align: 'center' });
    text.anchor.setTo(0.5, 0.5);

    this.load.image('loaderBg', require('../../assets/images/loader-bg.png'));
    this.load.image('loaderBar', require('../../assets/images/loader-bar.png'));
  }

  render () {
    if (this.fontsReady) {
      this.state.start('Splash');
    }
  }

  create() {
    this.game.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;
    this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.NO_SCALE;
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
  }

  fontsLoaded () {
    this.fontsReady = true;
  }

}