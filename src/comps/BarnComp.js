import React, { Component } from 'react';


class BarnComp extends Component {
  render() {
    const style = {
      '--size': '20',
      '--posX': '50',
      '--posY': '50',
      '--hue': '0',
      '--sat': '43',
      '--lum': '49'
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
