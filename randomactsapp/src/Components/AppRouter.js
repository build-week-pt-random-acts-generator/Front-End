import React from "react";
import { Route, Redirect } from "react-router-dom";
import SignUp from "./SignUp.js";
import Login from "./Login.js";
import Logout from "./LoggedOut.js";
import Contacts from "./Contacts.js";
import RandomActs from "./RandomActs.js";
import Actions from "./Actions/Actions.js";

const AppRouter = () => {
  const PrivateRouter = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        localStorage.length > 0 ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );

  return (
    <div>
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
      <PrivateRouter path="/contacts" component={Contacts} />
      <PrivateRouter path="/actions" component={Actions} />
      <PrivateRouter path="/randomacts" component={RandomActs} />
    </div>
  );
};

export default AppRouter;
