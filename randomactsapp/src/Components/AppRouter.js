import React from "react";
import { Route, Redirect } from "react-router-dom";
import SignUp from "./SignUp.js";
import Login from "./Login.js";
import Logout from "./LoggedOut.js";
import Contacts from "./Contacts.js";
import Actions from "./Actions.js";
import RandomActs from "./RandomActs.js";
//
const AppRouter = () => {
  console.log(localStorage);
  console.log(localStorage.key.name);

  const PrivateRouter = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        localStorage.length > 0 ? (
          <Component {...props} />
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
      <PrivateRouter path="/contacts/id" component={Contacts} />
      <PrivateRouter path="/actions" component={Actions} />
      <PrivateRouter path="/randomacts/id" component={RandomActs} />
    </div>
  );
};

export default AppRouter;
