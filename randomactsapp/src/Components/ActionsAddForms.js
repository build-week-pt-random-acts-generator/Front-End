import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { withFormik, Form, Field } from "formik";
import axios from "axios";

const ActionsAddForm = ({ errors, touched, values, status }) => {
  const [newAction, setNewAction] = useState([]);

  useEffect(() => {
    if (newAction) {
      setNewAction([...newAction, status]);
    }
  }, [newAction]);

  return (
    //   <div>Action Add Form</div>

    <div>
      <Form className="actionAddForm">
        <h1>Add To The List</h1>
        <Field
          type="input"
          name="action"
          placeholder="Add New Action Here"
          className="fieldFull"
        />
      </Form>
    </div>
  );
};

const FormikActionsAddForm = withFormik({
  mapPropsToValues({ action }) {
    return {
      action: action || ""
    };
  },

  validationSchema: Yup.object().shape({
    action: Yup.string().required("Don't forget to add your kind act above")
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    axios.post();
  }
});
