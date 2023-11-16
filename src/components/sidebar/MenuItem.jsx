import React from 'react'

const MenuItem = (props) => {
    const {name, to, exact} = props;
  return (
    <li>
        {name}
    </li>
  )
}

export default MenuItem