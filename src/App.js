import "./App.css";
import React from "react";
import Login from "./Endpoints/Login"
import Certifcate from "./Endpoints/Cerificate"
import Error from "./Endpoints/Error"
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom"

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path='/' component={Login} />
      <Route
        exact
        path='/login'
        component={Login}
      />
      <Route
        exact
        path='/certificate'
        render={(props) => <Certifcate {...props}/>}
      />
      <Route exact path='/404' component={Error} />
      <Redirect to='/404' />
    </Switch>
  </Router>
  );
}

export default App;
