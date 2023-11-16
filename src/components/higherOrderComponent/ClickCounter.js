import React, { Component } from 'react'
import UpadatedComponent from './higherOrderComponent'

class ClickCounter extends Component {
   
  render() {
    const {count, increamentCounter, name} = this.props
    return (
      <div>
        <button onClick={increamentCounter}>button clicked {count} times {name}</button>
      </div>
    )
  }
}

export default UpadatedComponent(ClickCounter, 5)  // Passing Parameter to component
