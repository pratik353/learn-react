import React from 'react'

const ClickCounterTwo = (props) => {
  const {count, increamentCounter} = props
  return (
    <div>
      <button onClick={increamentCounter}>button clicked {count} times</button>
    </div>
  )
}

export default ClickCounterTwo
