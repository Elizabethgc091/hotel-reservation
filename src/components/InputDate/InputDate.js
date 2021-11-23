import React from "react";
import "./style.css";

function InputDate({ date, setDate }) {
  const inputDateOnChange = (event) => {
    setDate(event.target.value);
  };
  return (
    <div className="input-container">
      <input
        value={date}
        type="datetime-local"
        onChange={inputDateOnChange}
      ></input>
    </div>
  );
}
export default InputDate;
