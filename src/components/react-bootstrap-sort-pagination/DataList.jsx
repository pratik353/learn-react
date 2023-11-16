import axios from "axios";
import React, { useEffect, useState } from "react";

const DataList = () => {
  const [data, setData] = useState([]);
  const columns = [
    {
        dataField:'identity', text:'email', sort: true
    },
    {
        dataField:'role', text:'Role', sort: true
    }
  ]

  useEffect(() => {
    axios
      .get("http://192.168.1.68:3004/admin/v1/axe/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  });
  return <div>
    {/* <BootstrapTable bootstrap4 keyField='id' data={data} columns={columns}  /> */}
  </div>;
};

export default DataList;
