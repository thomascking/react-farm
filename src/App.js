import React, { Component } from 'react';
import './App.css';
import AnimalComp from './comps/AnimalComp';
import BarnComp from './comps/BarnComp';
import TurfComp from './comps/TurfComp';


class App extends Component {
  render() {
    const animals = [
      {
        animalClass: 'pig',
        face: '135',
        stance: 'stand',
        posX: 15,
        posY: 10
      },
      {
        animalClass: 'emu',
        face: '225',
        stance: 'munch',
        posX: 25,
        posY: 10
      },
      {
        animalClass: 'alpaca',
        face: '180',
        stance: 'sleep',
        posX: 35,
        posY: 10
      }
    ];

    const turf = [
      {
        posX: 45,
        posY: 10
      },
      {
        posX: 55,
        posY: 20
      },
      {
        posX: 45,
        posY: 30
      }
    ]
    const animalComp = animals.map((animal, index) => { return (<AnimalComp key={index} animal={animal} />) });
    const turfComp = turf.map((turf, index) => { return (<TurfComp key={index} turf={turf} />) })
    return (
      <div>
        { animalComp }
        <BarnComp />
        { turfComp }
      </div>);
  }
}

export default App;
