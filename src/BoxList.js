import React, { Component } from 'react';
import Box from './Box';
import BoxForm from './BoxForm';
import uuid from 'uuid/v4';

class BoxList extends Component {
  constructor(props){
    super(props);
    this.state = {
      boxes:[{
        id: uuid(),
        width: 100,
        height: 100,
        backgroundColor: 'dodgerblue'
      },],
    }
    this.addBox = this.addBox.bind(this);
  }

  addBox(paramObj) {
    const newBox = {...paramObj, id: uuid()}
    this.setState(state => ({
      boxes: [...state.boxes, newBox]
    }));
  }

  render() {
    const theBoxes = this.state.boxes.map(box => (
      <Box key={box.id}
            height={box.height}
            width={box.width}
            backgroundColor={box.backgroundColor}
            />
            ))
            return (
              <div className="BoxList">
        {theBoxes}
        <BoxForm addBox={this.addBox}  />
      </div>
    );
  }

}

export default BoxList;
