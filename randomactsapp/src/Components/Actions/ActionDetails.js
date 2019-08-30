import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../AxiosAuth.js";

const ActionDetails = props => {
  const [action, setAction] = useState([]);
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
    <div className="actionCard">
      {action.map(item => (
        <p key={item.id}>{item.action}</p>
      ))}
    </div>
  );
};

export default ActionDetails;
