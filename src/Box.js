import React, { Component } from 'react';

class Box extends Component {
  static defaultProps = {
    width: 100,
    height: 100,
    backgroundColor: 'dodgerblue'
  }
  
  render() {
    const style = {
      width: `${this.props.width}px`,
      height: `${this.props.height}px`,
      backgroundColor: `${this.props.backgroundColor}`
    }
    return (
      <div style={style} className="Box" />
    );
  }

}

export default Box;
