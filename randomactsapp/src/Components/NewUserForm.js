import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { withFormik, Form, Field } from "formik";
import axios from "axios";

const NewUserForm = ({ errors, touched, values, status }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    if (status) {
      setUser([...user, status]);
      console.log(user);
    }
  }, [status]);

  return (
    <Form>
      <Field name="firstName" type="input" placeholder="First Name" />

      <Field name="lastName" type="input" placeholder="Last Name" />

      <Field name="email" type="email" placeholder="Email" />

      <Field name="password" type="password" placeholder="Password" />

      <button>Create User</button>
    </Form>
  );
};

const FormikNewUserForm = withFormik({
  mapPropsToValues({ firstName, lastName, email, password }) {
    return {
      firstName: firstName || "",
      lastName: lastName || "",
      email: email || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    firstName: Yup.string().required("Please add your first name"),
    lastName: Yup.string().required("Please add your last name"),
    email: Yup.string()
      .email("Email not valid")
      .required("Please add your first name"),
    password: Yup.string()
      .min(6, "Password must be 6 characters long")
      .required("Invalid input")
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post("https://reqres.in/api/users", values)
      .then(result => {
        console.log("handleSubmit: ", result);
        setStatus(result.data);
        resetForm();
      })
      .catch(err => {
        console.log("handleSubmit: ", err);
      });
  }
})(NewUserForm);

export default FormikNewUserForm;
