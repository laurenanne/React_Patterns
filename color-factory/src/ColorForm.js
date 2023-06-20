import React, { useState } from "react";
// import { useHistory } from "react-router-dom";

const ColorForm = ({ addColor, history }) => {
  // const history = useHistory();

  const initialState = {
    colorName: "",
    colorHex: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addColor(formData);
    setFormData(initialState);
    history.push("/colors");
  };

  const handleChange = (evt) => {
    console.log(evt.target);
    const { name, value } = evt.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="colorName">Color Name</label>
      <input
        id="colorName"
        name="colorName"
        value={formData.colorName}
        onChange={handleChange}
      />

      <label htmlFor="colorHex">Color Value</label>
      <input
        id="colorHex"
        name="colorHex"
        type="color"
        value={formData.colorHex}
        onChange={handleChange}
      />

      <button type="submit">Add Color</button>
    </form>
  );
};

export default ColorForm;
