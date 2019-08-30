import React, { useState, useEffect } from "react";
import ActionsList from "./ActionsList.js";
import ActionsAddForm from "./ActionsAddForm.js";
import { axiosWithAuth } from "../AxiosAuth.js";

const Actions = () => {
  const [actions, setActions] = useState([]);

  const addAction = action => {
    setActions([...actions, action]);
  };

  const [nextId, setNextId] = useState("");

  console.log("Inside Master Parent:", actions);
  console.log("Inside Master Parent:", actions);

  useEffect(() => {
    const getActions = () => {
      axiosWithAuth()
        .get(`https://random-acts0519.herokuapp.com/api/actions `)
        .then(result => {
          setActions(result.data);
          setNextId(result.length);
        })
        .catch(err => {
          console.log("Server Error", err);
        });
    };
    getActions();
  }, []);

  return (
    <div>
      <ActionsAddForm addAction={addAction} nextId={nextId} />

      <ActionsList actions={actions} />
    </div>
  );
};

export default Actions;
