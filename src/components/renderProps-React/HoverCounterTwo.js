import React, { Component } from 'react'

export default class HoverCounterTwo extends Component {
 

  render() {
    const {count, increamentCounter} = this.props
    return (
      <div>
        <h2 onMouseOver={increamentCounter}> Hover {count} times</h2>
      </div>
    )
  }
}
