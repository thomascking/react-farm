import React, { Component } from 'react';


class AnimalComp extends Component {
  render() {
    const style = {
      '--size': this.props.animal.size,
      '--posX': this.props.animal.x,
      '--posY': this.props.animal.y,
      '--hue': this.props.animal.hue,
      '--sat': this.props.animal.sat,
      '--lum': this.props.animal.lum,
      'zIndex': this.props.animal.zIndex
    }
    return (
      <animal-item style={style} class={[this.props.animal.animalType, this.props.animal.activityClass].join(' ')} data-face={this.props.animal.face}>
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
