import React from 'react'

const FRIinput = React.forwardRef((props, ref)=>{
    console.log(ref)
    return(
        <div>
            <input ref={ref}/>
        </div>
    )
})

export default FRIinput