import React, { useEffect, useState } from "react";
import { useRef } from "react";
// import { HOST } from "../../config/dev";

import { searchUser } from "../../services/api/searchApi";

const Search = () => {
  const inputRef = useRef(null)
  const [data, setData] = useState([]);
  const [key, setKey] = useState('');

  const searchHandleSearch = async (e) => {
    console.warn(e.target.value);
    setKey(inputRef.current.value);


    // const key = e.target.value;

    // 192.168.1.74:3004/admin/v1/axe/?search=
  //   await fetch(`${HOST}/v1/axe/?search=` + key)
  //     .then((res) => {
  //       console.log(res.json());
  //       return res.json();
  //     })
  //     .then((data) => setData(data.data));


  };

  useEffect(() => {
    setKey(inputRef.current.value)
    console.log(key);
    searchUser(key).then((_data) => {
      setData(_data.data);
    });
  },[key]);

  console.log(data);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        style={{ width: "200px" }}
        // onChange={searchHandleSearch}
        ref={inputRef}
      />
      <button onClick={searchHandleSearch}>Search</button>
      {data.map((user, index) => (
        <div key={index}>
          <p>{user.identity}</p>
        </div>
      ))}
    </div>
  );
};

export default Search;
