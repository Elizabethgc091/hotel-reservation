import React from "react";

function Select({ options, value, selectFilter }) {
  let optionsHtml = [];
  for (let index = 0; index < options.length; index++) {
    optionsHtml.push(
      <option key={index} value={options[index].value}>
        {options[index].name}
      </option>
    );
  }

  return (
    <div>
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
