import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { withFormik, Form, Field } from "formik";
import axios from "axios";

const Login = ({ errors, touched, values, status }) => {
  // const [token, setToken, removeToken] = useCustomHook("token");

  const [user, setUser] = useState([]);

  useEffect(() => {
    if (status) {
      setUser([...user, status]);
    }
  }, [status]);

  return (
    // <div>
    //   {token ? <LoggedIn /> : <NewUserForm />}
    //   <button onClick={() => setToken("myToken")}>Log In</button>
    //   <button onClick={() => removeToken()}>Log Out</button>
    // </div>
    <div>
      <h1>Login Below</h1>
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

        <div className="fieldFull">
          <button type="submit">Login</button>
        </div>
      </Form>
    </div>
  );
};

const FormikLogin = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Please add your username"),
    password: Yup.string()
      .min(6, "Password must be 6 characters long")
      .required("Invalid input")
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post("https://random-acts0519.herokuapp.com/api/login", values)
      .then(result => {
        console.log("handleSubmit: ", result);
        setStatus(result.data);
        localStorage.setItem(result.data.userId, result.data.token);
        resetForm();
      })
      .catch(err => {
        console.log("handleSubmit: ", err);
      });
  }
})(Login);

export default FormikLogin;
