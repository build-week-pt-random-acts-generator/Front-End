import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { withFormik, Form, Field } from "formik";
import axios from "axios";
import { axiosWithAuth } from "./AxiosAuth.js";

const ActionsList = props => {
  const [actions, setActions] = useState([]);

  useEffect(() => {
    const getActions = () => {
      axiosWithAuth()
        .get("https://random-acts0519.herokuapp.com/api/actions")
        .then(result => {
          console.log("Contacts Data:", result);
          setActions(result.data);
        })
        .catch(err => {
          console.log("Server Error", err);
        });
    };
    getActions();
  }, []);

  return (
    <div className="actionsContainer">
      <div className="actionList">
        {actions.map(action => (
          <ActionList key={action.id} action={action} />
        ))}
      </div>

      <div>action form</div>
    </div>
  );
};

function ActionList({ action }) {
  return (
    <div className="actionCard">
      <h3>{`#${action.id}`}</h3>
      <p>{action.action}</p>
    </div>
  );
}

export default ActionsList;
