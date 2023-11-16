import React, { Component } from 'react'
import UpadatedComponent from './higherOrderComponent'

class HoverCounter extends Component {
 
  render() {
    const {count, increamentCounter, name} = this.props
    return (
      <div>
        <h2 onMouseOver={increamentCounter}>button clicked {count} times {name}</h2>
      </div>
    )
  }
}

export default UpadatedComponent(HoverCounter, 10) // Passing Parameter to component
