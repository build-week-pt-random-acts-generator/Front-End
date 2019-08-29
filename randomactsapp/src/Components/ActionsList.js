import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./AxiosAuth.js";
import FormikActionsAddForm from "./ActionsAddForm.js";
import ActionCard from "./ActionCard.js";

const ActionsList = props => {
  const [actions, setActions] = useState([]);

  useEffect(() => {
    const getActions = () => {
      axiosWithAuth()
        .get(`https://random-acts0519.herokuapp.com/api/actions `)
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
      <FormikActionsAddForm />
      <div className="actionList">
        {actions.map(action => (
          <ActionCard key={action.id} action={action} />
        ))}
      </div>
    </div>
  );
};

export default ActionsList;
