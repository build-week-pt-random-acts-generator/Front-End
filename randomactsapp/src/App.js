import React from "react";
import { Route, NavLink, Redirect } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav.js";
import SignUp from "./Components/SignUp.js";
import Login from "./Components/Login.js";
import Logout from "./Components/LoggedOut.js";
import Contacts from "./Components/Contacts.js";
import Actions from "./Components/Actions.js";
import RandomActs from "./Components/RandomActs.js";

function App() {
  console.log(localStorage);
  console.log(localStorage.key.name);

  const ContactsPrivate = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        localStorage.length > 0 ? (
          <Contacts {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
  const ActionsPrivate = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        localStorage.length > 0 ? (
          <Actions {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
  const RandomActsPrivate = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        localStorage.length > 0 ? (
          <RandomActs {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );

  return (
    <div className="App">
      {/* <FormikLogin />
      <FormikSignUp /> */}
      <Nav />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
      <Route path="/contacts" component={ContactsPrivate} />
      <Route path="/actions" component={ActionsPrivate} />
      <Route path="/randomacts" component={RandomActsPrivate} />
    </div>
  );
}

export default App;
