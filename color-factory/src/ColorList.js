import React from "react";
import { Link } from "react-router-dom";

function ColorList({ colors }) {
  let colorList = colors.map((c) => (
    <div key={c.colorName}>
      <Link to={`colors/${c.colorName}`}>{c.colorName}</Link>
    </div>
  ));
  return (
    <div>
      <h1>Welcome to the color factory</h1>
      <div>
        <Link to={"colors/new"}>Add a color</Link>
      </div>
      <div>{colorList}</div>
    </div>
  );
}

export default ColorList;
