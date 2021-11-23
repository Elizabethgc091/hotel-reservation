import React from "react";
import HotelCard from "../HotelCard/HotelCard";

function Hoteles({ hotelsList }) {
  return (
    <div className="hotels-contaniner">
      {hotelsList.map((hotel, index) => {
        return (
          <HotelCard
            photo={hotel.photo}
            name={hotel.name}
            description={hotel.description}
            availabilityFrom={hotel.availabilityFrom}
            availabilityTo={hotel.availabilityTo}
            city={hotel.city}
            rooms={hotel.rooms}
            price={hotel.price}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default Hoteles;
