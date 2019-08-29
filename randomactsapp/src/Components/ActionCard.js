import React from "react";

const ActionCard = ({ action }) => {
  return (
    <div className="actionCard">
      <h3>{`#${action.id}`}</h3>
      <p>{action.action}</p>
    </div>
  );
};

export default ActionCard;
