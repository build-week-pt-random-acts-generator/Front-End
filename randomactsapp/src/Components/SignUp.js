import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { withFormik, Form, Field } from "formik";
import axios from "axios";

const SignUp = ({ errors, touched, values, status }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    if (status) {
      setUser([...user, status]);
      console.log(user);
    }
  }, [status]);

  return (
    <div>
      <h1>Sign Up Below</h1>
      <Form className="formContainer">
        <Field
          name="username"
          type="input"
          placeholder="Username"
          className="fieldFull"
        />
        {touched.username && errors.username && (
          <p className="errors">{errors.username}</p>
        )}

        <Field
          name="password"
          type="password"
          placeholder="Password"
          className="fieldFull"
        />
        {touched.password && errors.password && (
          <p className="errors">{errors.password}</p>
        )}

        <Field
          name="name"
          type="input"
          placeholder="Name"
          className="fieldFull"
        />
        {touched.name && errors.name && <p className="errors">{errors.name}</p>}

        <Field
          name="address"
          type="address"
          placeholder="Address"
          className="fieldFull"
        />
        {touched.address && errors.address && (
          <p className="errors">{errors.address}</p>
        )}

        {touched.email && errors.email && (
          <p className="errors">{errors.email}</p>
        )}

        <Field
          name="email"
          type="email"
          placeholder="Email"
          className="fieldFull"
        />

        <Field
          name="phone"
          type="phone"
          placeholder="Phone Number"
          className="fieldFull"
        />
        {touched.phone && errors.phone && (
          <p className="errors">{errors.phone}</p>
        )}

        <div className="fieldFull">
          <button type="submit">Create User</button>
        </div>
      </Form>
    </div>
  );
};

const FormikSignUp = withFormik({
  mapPropsToValues({ username, password, name, email, phone, address }) {
    return {
      username: username || "",
      password: password || "",
      name: name || "",
      email: email || "",
      phone: phone || "",
      address: address || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Please add your username"),
    password: Yup.string()
      .min(6, "Password must be 6 characters long")
      .required("Invalid input"),
    email: Yup.string()
      .email("Email not valid")
      .required("Please add your email")
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post("https://random-acts0519.herokuapp.com/api/register", values)
      .then(result => {
        console.log("handleSubmit: ", result);
        setStatus(result.data);
        resetForm();
      })
      .catch(err => {
        console.log("handleSubmit: ", err);
      });
  }
})(SignUp);

export default FormikSignUp;
