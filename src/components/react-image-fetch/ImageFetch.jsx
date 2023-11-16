import React, { useEffect, useState } from "react";
import axios from "axios";
const imageUrl =
  "http://192.168.1.74:3004/api/v1/uploadfile/files/1659359596037-image-Flow.jpeg";

const ImageUpload = () => {
  const [img, setImg] = useState("");

    useEffect(()=>{
        imgHandler()
    }, [])

  const imgHandler = async () => {
    console.log("Click");
    console.log(imageUrl);
    const res = await axios.get(imageUrl);
    console.log('=====', res);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };

  return (
    <div>
      <label htmlFor="image">Image Get</label>
      <br />
      <img src={img} alt="" width={'400px'} height={'400px'}/>
    </div>
  );
};

export default ImageUpload;
