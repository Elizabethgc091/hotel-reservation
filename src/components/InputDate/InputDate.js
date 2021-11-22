import React from "react";

function InputDate({ dateFrom, setDateFrom }) {
  const InputDateFrom = (event) => {
    setDateFrom(event.target.value);
  };
  return (
    <div>
      <input value={dateFrom} type="date" onChange={InputDateFrom}></input>
    </div>
  );
}
export default InputDate;
