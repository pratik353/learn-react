import React, {useEffect, useRef} from 'react'

const UseRef = () => {

  const inputRef = useRef(null);

  useEffect(()=>{
    inputRef.current.focus();
  })

  function handleClick(e){
    console.log(inputRef.current.value);
  }

  return (
    <div>
      <input type='text' ref={inputRef}/>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default UseRef