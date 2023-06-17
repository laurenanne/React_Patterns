import React from "react";
import { v4 as uuid } from "uuid";

function DogList(props) {
  let dogList = props.dogs.map((d) => (
    <div key={uuid()}>
      <h2>{d.name}</h2>
      <img src={d.src} alt="dog" />
    </div>
  ));

  return <div>{dogList}</div>;
}

export default DogList;
