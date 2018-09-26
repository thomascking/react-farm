function __friendStep ( animal ) {

  if ( !this.__hasReached( animal.x, animal.y ) ) {
    this.classList.delete( `heart` );
    return this.mode === `auto` ? this.go() : this;
  }

  if ( this.mannerismStore.friend > 1 ) {
    this.mannerismStore.friend = 1;
    this.classList.delete( `heart` );
    return this.mode === `auto` ? this.go() : this;
  }

  this.mannerismStore.friend += 0.01;

  setTimeout( () => this.__friendStep( animal ), 30 );

}

function friend ( animal ) {

  this.classList.add( `heart` );
  this.activityClass = `heart`;
  this.activity = `friend`;

  return this.__friendStep( animal );
}

module.exports = { __friendStep, friend }
