import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const UploadPDF = () => {
  const [pdfData, setPdfData] = useState("");
  const [select, setSelect] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(pdfData);
    axios
      .post("http://192.168.1.111:3008/erp/businessapi/pdfFile", {})
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const change = (e) => {
    // console.log(e.target.options);
    // select.push(e.target.value)
    setSelect({multiValue: [...e.target.selectedOptions].map(o => o.value)})
  }

  console.log(select);

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        {/* <label htmlFor="">upload PDF</label>
        <input
          type="file"
          value={pdfData}
          onChange={(e) => setPdfData(e.target.files[0])}
        />
        <button type="submit">upload</button> */}
        {/* <label htmlFor="">select multiple</label>
        <select
          name=""
          id=""
          value={select}
          onChange={change}
          multiple
        >
          <option value="name">Name</option>
          <option value="age">Age</option>
          <option value="id">Id</option>
          <option value="call">Call</option>
        </select> */}
        <label htmlFor="">Type multiple</label>
        <input type="text" >
          
        </input>
      </form>
    </div>
  );
};

export default UploadPDF;
