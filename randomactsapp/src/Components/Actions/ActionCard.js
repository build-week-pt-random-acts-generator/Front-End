import React from "react";
import { NavLink } from "react-router-dom";

const ActionCard = props => {
  const id = props.action.id;

  console.log(props);

  return (
    <NavLink className="actionText" to={`/actions/${id}`}>
      <div className="actionCard">
        <p>{props.action.action}</p>
      </div>
    </NavLink>
  );
};

export default ActionCard;
