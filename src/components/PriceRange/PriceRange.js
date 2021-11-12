import React from "react";
import price from "./price.svg";

function PriceRange(props) {
  let indicators = [];
  for (let index = 0; index < props.price; index++) {
    indicators.push(
      <div key={index}>
        <img className="icon-price" src={price} />
      </div>
    );
  }
  return <div className="price-indicator">{indicators}</div>;
}

export default PriceRange;
