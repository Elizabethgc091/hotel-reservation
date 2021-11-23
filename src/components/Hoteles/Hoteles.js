import React from "react";
import HotelCard from "../HotelCard/HotelCard";
import "./style.css";
import sad from "./sad.png";

function Hoteles({ hotelsList }) {
  if (hotelsList.length == 0) {
    return (
      <div className="not-available">
        <img src={sad}></img>
        <p>NO HAY HOTELES PARA RESERVAR</p>
      </div>
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
