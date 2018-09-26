let { Animal } = require( `./../animal.js` ),
  hueList = [ [ 17, 22 ] ],
  satList = [ [ 25, 30 ] ],
  lumList = [ [ 20, 35 ] ],
  colorStore = { hueList, satList, lumList },
  cowList = [];

class Cow extends Animal {

  constructor () {

    super( `cow`, colorStore, cowList );

    this.attributeStore.speed = 0.5 + ( Math.random() * 0.25 );
    this.attributeStore.logic = 0.5 + ( Math.random() * 0.25 );
    this.attributeStore.power = 0.5 + ( Math.random() * 0.25 );

  }

}
module.exports = { Cow, cowList };
