import React from "react";
import "./InputBox.css";

const InputBox = ({ name, value, onChange }) => {
  return (
    <div className="input-box">
      <div className="input-box__name">{name}</div>
      <input
        className="input-box__input"
        type={name !== "password" ? "text" : "password"}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputBox;
