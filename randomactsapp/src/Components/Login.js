import React, { useState } from "react";
import LoggedIn from "./LoggedIn.js";
// import LoggedOut from "./LoggedOut.js";
import NewUserForm from "./NewUserForm";

const Login = props => {
  const [token, setToken, removeToken] = useCustomHook("token");

  return (
    <div>
      {token ? <LoggedIn /> : <NewUserForm />}

      <button onClick={() => setToken("myToken")}>Log In</button>
      <button onClick={() => removeToken()}>Log Out</button>
    </div>
  );
};

const useCustomHook = name => {
  const [storage, setStorage] = useState(localStorage.getItem(name));

  const placeInStorage = value => {
    localStorage.setItem(name, value);
    setStorage(value);
  };

  const removeFromStorage = () => {
    localStorage.removeItem(name);
    setStorage();
  };

  return [storage, placeInStorage, removeFromStorage];
};

export default Login;
