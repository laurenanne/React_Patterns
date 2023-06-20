import React from "react";
import { useParams, Link } from "react-router-dom";

function Colors({ colors }) {
  const { color } = useParams();

  const colorArray = colors.filter((item) => {
    return item.colorName === color;
  });

  let colorHex = colorArray[0].colorHex;

  return (
    <div style={{ backgroundColor: `${colorHex}` }}>
      <p>This is {color}</p>
      <p>Isn't it beautiful?</p>
      <Link to="/colors">Go Back</Link>
    </div>
  );
}

export default Colors;
