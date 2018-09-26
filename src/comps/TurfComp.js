import React, { Component } from 'react';


class TurfComp extends Component {
  render() {
    const style = {
      '--growth': this.props.turf.growth,
      '--size': this.props.turf.size,
      '--posX': this.props.turf.x,
      '--posY': this.props.turf.y,
      '--hue': this.props.turf.hue,
      '--sat': this.props.turf.sat,
      '--lum': this.props.turf.lum,
      'zIndex': this.props.turf.zIndex
    }
    return (
      <turf-item style={style}></turf-item>
    )
  }
}

export default TurfComp;
