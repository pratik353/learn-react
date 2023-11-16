import React, { useEffect, useState } from 'react';
import axios from "axios";

import './read.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Read = () => {
    const [apiData, setApidata] =useState([])

    useEffect(()=>{
        axios.get('https://62de308679b9f8c30ab481a9.mockapi.io/crud')
        .then(
            (response) => {
                setApidata(response.data)
            }
        )
    })

  return (
    <div className='read-data'>
        <TableContainer component={Paper} className='table-container'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>SR NO.</TableCell>
            <TableCell >FIRST NAME</TableCell>
            <TableCell >LAST NAME</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {apiData.map((user) => (
            <TableRow
              key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.id}
              </TableCell>
              <TableCell>{user.firstName}</TableCell>
              <TableCell >{user.lastName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Read