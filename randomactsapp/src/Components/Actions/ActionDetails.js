import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../AxiosAuth.js";

const ActionDetails = props => {
  const [action, setAction] = useState([]);

  const replaceAction = newAction => {
    setAction([newAction]);
  };

  console.log(props);

  useEffect(() => {
    const id = props.match.params.id;

    axiosWithAuth()
      .get(`https://random-acts0519.herokuapp.com/api/actions/${id}`)
      .then(result => {
        setAction(result.data);
      })
      .catch(err => {
        console.log("Server Error", err);
      });
  }, []);

  return (
    <div>
      <div className="actionCard">
        <div>buttons here</div>
        {action.map(item => (
          <div key={item.id}>
            <ActionButtons
              key={item.id}
              replaceAction={replaceAction}
              props={props}
              item={item}
            />
            <p>{item.action}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const ActionButtons = props => {
  console.log(props);

  const deleteAction = () => {
    axiosWithAuth()
      .delete(
        `https://random-acts0519.herokuapp.com/api/actions/${props.item.id}`
      )
      .then(result => {
        console.log(result.data);
        props.props.history.push("/actions");
      })
      .catch(err => {
        console.log("Server Error", err);
      });
  };

  const [updatedAction, setUpdatedAction] = useState({
    action: ""
  });

  const changeHandler = event => {
    setUpdatedAction({
      ...updatedAction,
      [event.target.name]: event.target.value
    });
  };

  const editAction = event => {
    event.preventDefault();
    axiosWithAuth()
      .put(
        `https://random-acts0519.herokuapp.com/api/actions/${props.item.id}`,
        updatedAction
      )
      .then(result => {
        console.log(result.data);
        props.replaceAction(updatedAction);
      })
      .catch(err => {
        console.log("Server Error", err);
      });
  };

  return (
    <div>
      <button onClick={deleteAction} className="actionButtons">
        Delete Act
      </button>

      <form onSubmit={editAction}>
        <input
          type="textarea"
          name="action"
          placeholder="Type Adjusted Action Here"
          value={updatedAction.action}
          onChange={changeHandler}
        />

        <button className="actionButtons">Edit Act</button>
      </form>
    </div>
  );
};

export default ActionDetails;
