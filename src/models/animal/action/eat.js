function eat ( turf ) {

  if ( turf.growth < 0 ) {
    turf.remove();
    this.classList.delete( `munch` );
    return this.mode === `auto` ? this.go() : this;
  }

  if ( this.mannerismStore.hunger > 1 ) {
    this.classList.delete( `munch` );
    return this.mode === `auto` ? this.go() : this;
  }

  this.classList.add( `munch` );
  this.activityClass = `munch`;
  this.activity = `eat`;

  turf.setGrowth( turf.growth - 0.025 );
  this.mannerismStore.hunger += 0.01;

  setTimeout( () => this.eat( turf ), 30 );
  return this;
}
module.exports = { eat }
