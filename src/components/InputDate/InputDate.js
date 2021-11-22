import React from "react";

function InputDate({ date, setDate }) {
  const inputDateOnChange = (event) => {
    console.log(event.target.value);
    setDate(event.target.value);
  };
  return (
    <div>
      <input value={date} type="date" onChange={inputDateOnChange}></input>
    </div>
  );
}
export default InputDate;
