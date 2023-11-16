import React, { Component } from 'react'

export default class CreateRefs extends Component {
  constructor(props){
    super(props)

    this.inputeRef = React.createRef()
  }

  
  componentDidMount(){
    this.inputeRef.current.focus()
  }

  render() {
    return (
      <div>
        <input type='text' ref={this.inputeRef} />
      </div>
    )
  }
}
