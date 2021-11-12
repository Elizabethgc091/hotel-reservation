import React from "react";

function PriceRange(props) {
  let indicators = [];
  for (let index = 0; index < props.price; index++) {
    indicators.push(<div key={index}>💲</div>);
  }
  return <div className="price-indicator">{indicators}</div>;
}

export default PriceRange;
