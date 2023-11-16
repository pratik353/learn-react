import React, { Component } from 'react'

export default class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
          count: 0
        }
      }
    
      increamentCounter = () => {
        this.setState((prevState) => {
          return (
            {
              count: prevState.count + 2
            }
          )
        })
      }

  render() {
      return (
      <div>
        {this.props.render(this.state.count, this.increamentCounter)}
      </div>
    )
  }
}
