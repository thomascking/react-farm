import React, { Component } from 'react';


class TurfComp extends Component {
  render() {
    const style = {
      '--growth': '0.9',
      '--size': '2',
      '--posX': this.props.turf.posX,
      '--posY': this.props.turf.posY,
      '--hue': '0',
      '--sat': '43',
      '--lum': '49'
    }
    return (
      <turf-item style={style}></turf-item>
    )
  }
}

export default TurfComp;
