import React from "react";

const ActionCard = ({ action }) => {
  return (
    <div key={action.id} className="actionCard">
      <p key={action.id}>{action.action}</p>
    </div>
  );
};

export default ActionCard;
