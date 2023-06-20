import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ColorList from "./ColorList";
import Color from "./Color";
import ColorForm from "./ColorForm";
import { v4 as uuid } from "uuid";
import { useHistory } from "react-router-dom";

function Routes() {
  let history = useHistory();

  const [colors, setColors] = useState([
    { colorName: "red", colorHex: "#FF0000" },
    { colorName: "blue", colorHex: "#0000FF" },
    { colorName: "green", colorHex: "#00FF00" },
  ]);

  const addColor = (c) => {
    let newColor = { ...c, id: uuid() };
    setColors((colors) => [newColor, ...colors]);
  };

  function render(props) {
    const foundColor = colors.some(
      (item) => item.colorName === props.match.params.color
    );
    console.log(foundColor);
    if (!foundColor) {
      return <Redirect to="/colors" />;
    } else {
      return <Color colors={colors} />;
    }
  }

  return (
    <Switch>
      <Route exact path="/colors">
        <ColorList colors={colors} />
      </Route>
      <Route path="/colors/new">
        <ColorForm addColor={addColor} history={history} />
      </Route>
      <Route exact path="/colors/:color" render={render}></Route>
      <Redirect to="/colors" />
    </Switch>
  );
}

export default Routes;
