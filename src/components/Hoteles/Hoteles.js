import React from "react";
import HotelCard from "../HotelCard/HotelCard";

function Hoteles({ hotelsList }) {
  if (hotelsList.length == 0) {
    return (
      <div className="hotels-contaniner">NO HAY HOTELES PARA RESERVAR</div>
    );
  }
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
