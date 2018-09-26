import React, { Component } from 'react';


class BarnComp extends Component {
  render() {
    const style = {
      '--size': this.props.barn.size,
      '--posX': this.props.barn.x,
      '--posY': this.props.barn.y,
      '--hue': this.props.barn.hue,
      '--sat': this.props.barn.sat,
      '--lum': this.props.barn.lum,
      'zIndex': this.props.barn.zIndex
    }
    return (
      <barn-item style={style}>
        <face-item>
        <door-item></door-item>
        <loft-item></loft-item>
      </face-item>
      <wall-item></wall-item>
      <roof-item></roof-item>
      <roof-item></roof-item>
    </barn-item>
    )
  }
}

export default BarnComp;
