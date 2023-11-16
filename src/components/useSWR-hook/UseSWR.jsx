import React from "react";
import useSWR from "swr";

const fetcher = (...args) => {
   fetch(...args)
    .then((res) => res.json())
    .then((data) => (data));
};

const UseSWR = () => {
  const { data, error } = useSWR(
    "http://jsonplaceholder.typicode.com/users",
    fetcher
  );
  console.log(data, error);
  return (
    <div>
      Users
      {data ? (
        data.map((user) => {
          return <p>{user.name}</p>;
        })
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
};

export default UseSWR;
