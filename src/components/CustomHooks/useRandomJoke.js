import { useEffect, useState } from "react";
import axios from "axios";

const useRandomJoke = (category) => {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    const fetchJoke = async () =>
      await axios
        .get(
          `https://v2.jokeapi.dev/joke/Any?blacklistFlags=${category}&type=single`
          /* nsfw,religious,political,racist,sexist,explicit */
        )
        .then((res) => setJoke(res.data.joke))
        .catch((err) => console.log(err));
    fetchJoke();
  }, [category]);
  return joke;
};

export default useRandomJoke;
