import React, { useEffect, useState } from 'react'
import axios from 'axios'


const ReactSortApi = () => {
    const [sortData, setSortData] = useState([])

    useEffect(()=>{

        //For Descending sorting use '-<SortItemName>'
        //For Ascending sorting use '<SortItemName>'
        axios.get('http://192.168.1.68:3004/admin/v1/axe/?sort=password').then((res)=>{
            console.log(res.data.data);
            setSortData(res.data.data);
        })
    }, [])
  return (
    <div>
        {sortData.map((user, i) => {
            return(
                // console.log(i)
            <p key={i}>{user.identity}</p>
            )
        })}
    </div>
  )
}

export default ReactSortApi