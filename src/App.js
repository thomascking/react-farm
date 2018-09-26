import React, { Component } from 'react';
import './App.css';

// import components to render the farm
import AnimalComp from './comps/AnimalComp';
import BarnComp from './comps/BarnComp';
import TurfComp from './comps/TurfComp';

// import the models to control the farm
import { Barn } from './models/barn/barn';
import { Emu, emuList } from './models/animal/library/emu';
import { Pig, pigList } from './models/animal/library/pig';
import { Alpaca, alpacaList } from './models/animal/library/alpaca';
import { animalList } from './models/animal/animal';
import { Turf, turfList } from './models/turf/turf';

class App extends Component {
  constructor(props) {
    super(props);

    this.barn = new Barn();

    new Turf()
  .setGrowth( 0.1 )
  .setPosition( 75, 85 )
  .go();

new Turf()
  .setGrowth( 0.1 )
  .setPosition( 15, 15 )
  .go();

new Turf()
  .setGrowth( 0.1 )
  .setPosition( 25, 65 )
  .go();

new Alpaca()
  .setPosition( 50, 70 )
  .setFace( 225 )
  .setColor()
  .setName( `Alfred` )
  .setBarn( this.barn )
  .go();

new Alpaca()
  .setPosition( 55, 75 )
  .setFace( 225 )
  .setColor()
  .setName( `Alto` )
  .setBarn( this.barn )
  .go();

new Pig()
  .setPosition( 45, 75 )
  .setFace( 225 )
  .setColor()
  .setName( `Oswald` )
  .setBarn( this.barn )
  .go();

new Pig()
  .setPosition( 45, 75 )
  .setFace( 225 )
  .setColor()
  .setName( `Ferdinand` )
  .setBarn( this.barn )
  .go();

new Emu()
  .setPosition( 45, 75 )
  .setFace( 225 )
  .setColor()
  .setName( `Droma` )
  .setBarn( this.barn )
  .go();

new Emu()
  .setPosition( 45, 75 )
  .setFace( 225 )
  .setColor()
  .setName( `Strider` )
  .setBarn( this.barn )
  .go();

this.barn
  .setPosition( 50, 50 )
  .registerList( `turf`, turfList )
  .registerList( `alpaca`, alpacaList )
  .registerList( `pig`, pigList )
  .registerList( `emu`, emuList )
  .registerList( `animal`, animalList );

    console.log(animalList);

    var frames = 0;
    this.state = {frames: frames};
    window.setInterval(() => this.setState({frames: ++frames}), 30)
  }

  render() {
    const animalComp = animalList.map((animal, index) => { return (<AnimalComp key={index} animal={animal} />) });
    const turfComp = turfList.map((turf, index) => { return (<TurfComp key={index} turf={turf} />) })
    return (
      <div data-frames={this.state.frames}>
        { animalComp }
        <BarnComp barn={this.barn}/>
        { turfComp }
      </div>);
  }
}

export default App;
