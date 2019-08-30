import React from "react";
import ActionCard from "./ActionCard.js";

const ActionsList = props => {
  console.log("Props in ActionsList: ", props);
  return (
    <div className="actionsContainer">
      <div className="actionList">
        {props.actions.map(action => (
          <ActionCard key={action.id} action={action} />
        ))}
      </div>
    </div>
  );
};

export default ActionsList;
