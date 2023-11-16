import React, { useEffect, useState } from 'react'

const CleanerFunction = () => {
    const [data, setData] = useState('')
    useEffect(()=>{
        console.log('in useEffect');
        let isCancelled = false;

        if (!isCancelled) {
            console.log('in if');
        }

        return () => {
            console.log('cancelled');
            isCancelled = true;
        }
    }, [])
  return (
    <div>CleanerFunction</div>
  )
}

export default CleanerFunction