import React from "react";
import "./InputControl.css";
function InputControl(props) {
  return (
    <div className='InputContainer'>
      {props.label && <label>{props.label}</label>}
      <input type='text' {...props} />
    </div>
  );
}

export default InputControl;
