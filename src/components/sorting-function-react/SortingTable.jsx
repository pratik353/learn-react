import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const SortingTable = () => {
  const [data, setData] = useState([]);
  const [order, setOrder] = useState('ASC')

  useEffect(() => {
    getData();
  },[]);

  const getData = async () => {
    const response = await axios.get(
      "http://jsonplaceholder.typicode.com/users"
    );
    setData(response.data);
  };

  const sorting = (col) => {
    console.log(data);
    if (order === 'ASC') {
      const sorted = [...data].sort((a, b) => (
        a[col].toLowerCase( ) > b[col].toLowerCase( ) ? 1 : -1
      )
      );
      setData(sorted)
      setOrder("DSC")
    }

    if (order === 'DSC') {
      const sorted = [...data].sort((a, b) => 
        a[col].toLowerCase( ) < b[col].toLowerCase( ) ? 1 : -1
      );
      setData(sorted)
      setOrder("ASC")
    }
  }

  return (
    <div>
      <h2>SortingTable</h2>
      <table>
        <thead>
          <tr>
            <th onClick={() => sorting("name")}>User Name</th>
            <th onClick={() => sorting("email")}>Email</th>
            <th onClick={() => sorting("phone")}>Phone</th>
            <th onClick={() => sorting("company")}>Company</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => {
            return(
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.company.name}</td>
            </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SortingTable;
