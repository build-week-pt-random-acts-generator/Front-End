import React from "react";
import { NavLink } from "react-router-dom";

const Nav = props => {
  const handleClick = () => {
    localStorage.clear();
  };

  const id = localStorage.getItem("userId");

  return (
    <div className="navBar">
      <NavLink to={`/contacts/${id}`}>Contacts</NavLink>
      <NavLink to={`/actions`}>Actions</NavLink>
      <NavLink to={`/randomacts/${id}`}>Random Act</NavLink>
      <NavLink onClick={handleClick} to="/logout">
        Log Out
      </NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/signup">Sign Up</NavLink>
    </div>
  );
};

export default Nav;
