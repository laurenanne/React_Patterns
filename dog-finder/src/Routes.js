import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import DogDetails from "./DogDetails";
import DogList from "./DogList";

function Routes(props) {
  return (
    <Switch>
      <Route exact path="/dogs">
        <DogList dogs={props.dogs} />
      </Route>
      <Route path="/dogs/:name">
        <DogDetails dogs={props.dogs} />
      </Route>
      <Redirect to="/dogs" />
    </Switch>
  );
}

export default Routes;
