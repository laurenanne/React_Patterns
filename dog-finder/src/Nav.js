import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  let list = props.dogs.map((item) => (
    <li key={item.name}>
      <Link to={`/dogs/${item.name}`}>{item.name}</Link>
    </li>
  ));
  return (
    <div>
      <li>
        <Link to={`/dogs/`}>Home</Link>
      </li>
      {list}
    </div>
  );
}

export default Nav;
