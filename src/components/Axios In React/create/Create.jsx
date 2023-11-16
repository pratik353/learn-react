import React from "react";
import { useFormik } from "formik";
import axios from "axios";

const initialValues = {
    firstName: '',
    lastName: ''
}

const onSubmit = (values) =>{
    const firstName = values.firstName
    const lastName = values.lastName

    axios.post('https://62de308679b9f8c30ab481a9.mockapi.io/crud', {
        firstName,
        lastName
    })
    
}

const validate = (values) => {
    const errors = {}
    if(!values.firstName){
        errors.firstName = 'Required'
    }

    if(!values.lastName){
        errors.lastName = 'Required'
    }

    return errors
}

const Create = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
}); 

//   console.log("formik values", formik.values);
//   console.log("formik Errors", formik.errors);

  return (
    <div>
      <form action="" onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="fisrtName" name="firstName" onChange={formik.handleChange} value={formik.values.firstName}/>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" name="lastName" onChange={formik.handleChange} value={formik.values.lastName}/>

        <button type="submit" >Submit</button>
      </form>
    </div>
  );
};

export default Create;
