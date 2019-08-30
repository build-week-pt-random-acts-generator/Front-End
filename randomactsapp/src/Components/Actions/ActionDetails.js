import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { axiosWithAuth } from "../AxiosAuth.js";

const ActionDetails = props => {
  const [action, setAction] = useState([]);

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
            <ActionButtons props={props} item={item} />
            <p>{item.action}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const ActionButtons = props => {
  const deleteAct = () => {
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

  return (
    <div>
      <button onClick={deleteAct} className="actionButtons">
        Delete Act
      </button>

      <button className="actionButtons">Delete Act</button>
    </div>
  );
};

export default ActionDetails;
