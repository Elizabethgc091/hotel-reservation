import React from "react";
import "./style.css";
import Select from "./../Select/Select.js";
import InputDate from "./../InputDate/InputDate.js";
import clean from "./clean.svg";

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
      <div className="date">
        <InputDate date={dateFrom} setDate={selectDateFrom} />
        <InputDate date={dateTo} setDate={selectedDateTo} />
      </div>
      <div className="select">
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
      </div>

      <div>
        <button className="btn-coniatner" onClick={reset}>
          <img className="clean" src={clean} alt="icono" />
          <p>Limpiar</p>
        </button>
      </div>
    </div>
  );
}
export default Filters;
