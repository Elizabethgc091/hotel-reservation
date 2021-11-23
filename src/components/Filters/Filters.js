import React from "react";
import Select from "./../Select/Select.js";
import InputDate from "./../InputDate/InputDate.js";

function Filters({
  dateFrom,
  selectDateFrom,
  dateTo,
  selectedDateTo,
  countryOptions,
  country,
  selectFilteredCountry,
  priceOptions,
  price,
  selectFilteredPrice,
  roomSizeOptions,
  roomSize,
  selectFilteredSizeRoom,
  reset,
}) {
  return (
    <div className="filter-container">
      <InputDate date={dateFrom} setDate={selectDateFrom} />
      <InputDate date={dateTo} setDate={selectedDateTo} />
      <Select
        options={countryOptions}
        value={country}
        selectFilter={selectFilteredCountry}
      />
      <Select
        options={priceOptions}
        value={price}
        selectFilter={selectFilteredPrice}
      />
      {/** Filtered */}

      <Select
        options={roomSizeOptions}
        value={roomSize}
        selectFilter={selectFilteredSizeRoom}
      />
      <button onClick={reset}>Reset</button>
    </div>
  );
}
export default Filters;
