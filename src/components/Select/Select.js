import React from "react";
import { hotelsData } from "../../data.js";

function Select({ price, selectFilter }) {
  function filterPrice(event) {
    let listUpdated = hotelsData.filter((hotel) => {
      return event.target.value === "0"
        ? hotel
        : hotel.price == event.target.value;
    });

    selectFilter(event.target.value, listUpdated);
  }
  return (
    <div>
      {/* filtro precio */}
      <select
        onChange={(event) => {
          filterPrice(event);
        }}
        value={price}
      >
        <option value="0">Todos</option>
        <option value="1">$</option>
        <option value="2">$$</option>
        <option value="3">$$$</option>
        <option value="4">$$$$</option>
      </select>
    </div>
  );
}
export default Select;
