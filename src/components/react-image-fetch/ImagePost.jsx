import React, { useState } from "react";
import axios from "axios";

// const URL = `http://192.168.1.68:3004/admin/v1/uploadfile/upload/`;
// const URL = `http://192.168.30.161:5050/process_resize/?height=23&width=323&dpi=96&aspect_ratio=false`;
const URL = `http://192.168.30.117:8000/generate_audio?text_prompt=${"hello"}&character=${"John"}`;
// const URL = `http://127.0.0.1:8000/upload/`;

const ImagePost = () => {
  const [selectedImg, setSelectedImg] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const fileSelectedHandler = (e) => {
    console.log(e.target.files[0]);
    setSelectedImg(e.target.files[0]);
    console.log(selectedImg);
  };

  const imgUploadHandle = () => {
    console.log(selectedImg);
    const formData = new FormData();
    formData.append("imageFile", selectedImg);
    // formData.append("file", selectedImg, selectedImg.name);

    axios
      .post(URL, formData, {
        onUploadProgress: (progressEvent) => {
          console.log(
            "upload progress " +
              Math.ceil(progressEvent.loaded / progressEvent.total) * 100 +
              "%"
          );
        },
      })
      .then((response) => {
        console.log(response.data.url);
        const URL = response.data.url.slice(17)
        console.log(URL);
        setImgUrl(URL)
      }).catch(err => {console.log(err)})
  };

  

  return (
    <>
    <div>
      <input type="file" onChange={fileSelectedHandler} />
      <button type="submit" onClick={imgUploadHandle}>
        Upload
      </button>
    </div>
    {imgUrl ? <img src={`http://192.168.1.68:`+ imgUrl} alt="" width='250px' height='250px'/> : 'Img not found'}
    
    </>
  );
};

export default ImagePost;

