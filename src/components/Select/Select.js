import React from "react";
import { hotelsData } from "../../data.js";

function Select({ price, selectFilter }) {
  return (
    <div>
      {/* filtro precio */}
      <select
        onChange={(event) => {
          selectFilter(event.target.value);
        }}
        value={price}
      >
        <option value={0}>Todos</option>
        <option value={1}>$</option>
        <option value={2}>$$</option>
        <option value={3}>$$$</option>
        <option value={4}>$$$$</option>
      </select>
    </div>
  );
}

export default Select;
