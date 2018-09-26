import React, { Component } from 'react';


class AnimalComp extends Component {
  render() {
    const style = {
      '--size': '10',
      '--posX': this.props.animal.posX,
      '--posY': this.props.animal.posY,
      '--hue': '17',
      '--sat': '82',
      '--lum': '84'
    }
    return (
      <animal-item style={style} class={this.props.animal.animalClass + ' ' + this.props.animal.stance} data-face={this.props.animal.face}>
      <talk-item></talk-item>
      <body-item>

        <limb-item></limb-item>
        <limb-item></limb-item>

        <neck-item>
          <head-item>
            <ears-item></ears-item>
            <ears-item></ears-item>
            <face-item>
              <eyes-item></eyes-item>
              <eyes-item></eyes-item>
              <nose-item></nose-item>
              <lips-item></lips-item>
            </face-item>
          </head-item>
        </neck-item>

        <rump-item>
          <tail-item></tail-item>
          <limb-item></limb-item>
          <limb-item></limb-item>
        </rump-item>

      </body-item>
    </animal-item>
    )
  }
}

export default AnimalComp;
