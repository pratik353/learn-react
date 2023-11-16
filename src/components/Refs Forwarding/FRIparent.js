import React, { Component } from 'react'
import FRIinput from './FRIinput'

export default class FRIparent extends Component {
    constructor(props){
        super(props)

        this.inputRef = React.createRef()
    }

    handleClick(){
        this.inputRef.current.focus()
    }
    
    
    render() {
    //   console.log(this.inputRef);
    return (
      <div>
        <FRIinput ref={this.inputRef}/>
        <button onClick={this.handleClick}>Focus Input</button>
      </div>
    )
  }
}

