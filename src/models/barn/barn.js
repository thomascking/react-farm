let { Item } = require( `./../item.js` ),
  hueList = [ [ 0, 30 ] ],
  satList = [ [ 40, 60 ] ],
  lumList = [ [ 30, 50 ] ],
  colorStore = { hueList, satList, lumList };

class Barn extends Item {

  constructor () {

    super();

    this.colorStore = colorStore;

    this
      .setColor()
      .setSize( 20 );

    this.registeredListStore = {};

  }

  registerList ( name, list ) {
    this.registeredListStore[ name ] = list;
    return this;
  }

}

module.exports = { Barn };
