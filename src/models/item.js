let config = require( `./../config.js` );

class Item {

  constructor () {

    this.x = 0;
    this.y = 0;

    this.size = 0;

    this.face = ``;
    this.name = ``;
    this.logText = ``;

    this.instanceTime = Date.now();

  }

  log ( str ) {
    this.logText += `
    ${ str }`;
    if ( this.logText.length > config.logLength ) {
      this.logText = this.logText.slice( -config.logLength, this.logText.length );
    }
    return this;
  }

  __isBeyondBoundary ( num ) {
    return this.__withinBounds( num, 50 )[ 0 ] !== num;
  }

  __withinBounds ( x, y ) {

    let xMax = 100 - ( this.size * 0.5 ),
      xMin = 0 + ( this.size * 0.5 ),
      yMax = 100,
      yMin = 0 + this.size;

    x = x > xMax ? xMax : x;
    x = x < xMin ? xMin : x;

    y = y > yMax ? yMax : y;
    y = y < yMin ? yMin : y;

    return [ x, y ];
  }

  __hasReached ( x, y ) {

    let tolerance = this.attributeStore.speed * config.stepDistance,
      halfSize = this.size ? this.size * 0.5 : 0,
      qrtrSize = this.size * 0.25;
      tolerance = 1;

    return this.x - qrtrSize < x + tolerance // left side touches right side
      && this.x + qrtrSize > x - tolerance // right side touches left side
      && this.y - halfSize < y + tolerance // bottom touches top
      && this.y > y - tolerance // top touches bottom

  }

  __loopCyclelistWithNum ( num, cycleList ) {

    let result = false;

    while ( result === false ) {

      cycleList.some( ( [ min, max ] ) => {

        let diff = max - min;

        if ( num < diff ) {
          result = min + num;
          return true;
        }

        num -= diff;

      } );

    }

    return result;

  }

  setName ( name ) {
    this.name = name;
    return this;
  }

  setPosition ( x = this.x, y = this.y ) {

    [ x, y ] = this.__withinBounds( x, y );

    this.x = x;
    this.y = y;
    this.zIndex = Math.floor( y );

    return this;
  }

  setColor ( hue, sat, lum ) {

    this.hue = typeof hue === `number` ? hue
      : this.colorStore ? this.__loopCyclelistWithNum( Math.round( Math.random() * 360 ), this.colorStore.hueList )
      : this.hue;

    this.sat = typeof sat === `number` ? sat
      : this.colorStore ? this.__loopCyclelistWithNum( Math.round( Math.random() * 360 ), this.colorStore.satList )
      : this.sat;

    this.lum = typeof lum === `number` ? lum
      : this.colorStore ? this.__loopCyclelistWithNum( Math.round( Math.random() * 360 ), this.colorStore.lumList )
      : this.lum || 0;

    return this;
  }

  setSize ( size = 20 ) {
    this.size = size;
    return this;
  }

  setFace ( face = `180` ) {
    this.face = face;
    return this;
  }

}

module.exports = { Item };
