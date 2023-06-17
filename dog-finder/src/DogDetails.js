import React from "react";
import { useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";

function DogDetails(props) {
  const { name } = useParams();
  const dogArray = props.dogs.filter(function(item) {
    return item.name === name;
  });

  const src = dogArray[0].src;
  const age = dogArray[0].age;
  const facts = dogArray[0].facts;

  let img = src ? <img src={src} alt={name} /> : null;
  let factList = facts.map((f) => <li key={uuid()}>{f}</li>);

  return (
    <div>
      <h1>{name}</h1>
      {img}
      <p>Age: {age}</p>
      <ul>Facts: {factList}</ul>
    </div>
  );
}

export default DogDetails;
