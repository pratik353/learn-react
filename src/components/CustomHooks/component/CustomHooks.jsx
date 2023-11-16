import React, { useEffect, useRef } from "react";
import { useState } from "react";

import useRandomJoke from "../useRandomJoke";

const CustomHooks = () => {
  const categoryRef = useRef(null);
  const [category, setCategory] = useState();

  const options = [
    "nsfw",
    "religious",
    "political",
    "racist",
    "sexist",
    "explicit",
  ];

  //CALLING CUSTOME HOOKE
  const joke = useRandomJoke(category);

  const handleGenerate = (e) => {
    e.preventDefault();
    setCategory(categoryRef.current.value)
  }
  return (
    <div>
      <h2>Joke Generator</h2>
      <h3>{joke}</h3>
      <select
        name=""
        id=""
        ref={categoryRef}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {" "}
            {option.toUpperCase()}
          </option>
        ))}
      </select>
      <button onClick={handleGenerate}>Generate Joke</button>
    </div>
  );
};

export default CustomHooks;
