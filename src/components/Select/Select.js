import React from "react";

function Select({ options, value, selectFilter }) {
  let optionsHtml = [];
  for (let index = 0; index < options.length; index++) {
    optionsHtml.push(
      <option value={options[index].value}>{options[index].name}</option>
    );
  }
  console.log(optionsHtml);
  return (
    <div className="select-container">
      <select
        onChange={(event) => {
          selectFilter(event.target.value);
        }}
        value={value}
      >
        {optionsHtml}
      </select>
    </div>
  );
}

export default Select;
