import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../AxiosAuth.js";

const ActionsAddForm = props => {
  const [newAction, setNewAction] = useState({
    action: ""
  });

  console.log("Props In Form: ", props);

  const changeHandler = event => {
    setNewAction({ ...newAction, [event.target.name]: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault();
    const newNewAction = {
      ...newAction,
      id: props.nextId
    };

    axiosWithAuth()
      .post("https://random-acts0519.herokuapp.com/api/actions", newAction)
      .then(result => {
        console.log("New Act Success | handleSubmit:", result.data);
      })
      .catch(err => {
        console.log("New Act Error | handleSubmit:", err);
      });
    props.addAction(newNewAction);
    setNewAction({
      action: ""
    });
  };

  return (
    <div className="formContainer">
      <form onSubmit={submitForm}>
        <label hidden htmlFor="action">
          Member Name
        </label>
        <input
          type="textarea"
          name="action"
          placeholder="Type New Action Here"
          value={newAction.action}
          onChange={changeHandler}
        />
        <button>Add Action</button>
      </form>
    </div>
  );
};

export default ActionsAddForm;
