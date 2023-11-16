import { useFormik } from "formik";
import React from "react";
import "./youtube-form.css";

const initialValues = {
    name: "",
    email: "",
    channel: ""
}

const onSubmit = values => {
    console.log("Sumitted values", values)
}

const validate = values => {
    const errors = {}

    if (!values.name) {
        errors.name = 'Required'
    }
    if (!values.email) {
        errors.email = 'Required'
    }else if(!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[A-Za-z]+$/i.test(values.email)){
        errors.email = 'Invlid Email'
    }
    if (!values.channel) {
        errors.channel = 'Required'
    }
    return errors
}
const YouTubeForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  });

//   console.log("Errors ", formik.errors);
//   console.log("formik values", formik.values);
  console.log("visited", formik.touched);

  return (
    <div className="youtube-form">
      {/* <form action="" className="form" onSubmit={formik.handleSubmit}> */}
      <form action="" className="form" >
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> : null }

        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null }

        <label htmlFor="Channel">Your Channel Name</label>
        <input
          type="text"
          id="channel"
          name="channel"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.channel}
        />
        {formik.touched.channel && formik.errors.channel ? <div className="error">{formik.errors.channel}</div> : null }
      </form>
        <button type="submit" onClick={formik.handleSubmit}>Submit</button>
    </div>
  );
};

export default YouTubeForm;
