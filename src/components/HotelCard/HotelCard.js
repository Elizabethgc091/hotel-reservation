import React from "react";
import bed from "./bed.svg";
import ubication from "./ubication.svg";
import "./hotelCard.css";
import PriceRange from "./../PriceRange/PriceRange.js";

function HotelCard(props) {
  const options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let dateFrom = new Date(props.availabilityFrom).toLocaleDateString(
    "es-MX",
    options
  );
  let dateTo = new Date(props.availabilityTo).toLocaleDateString(
    "es-MX",
    options
  );

  return (
    <div className="card-container">
      <div className="main-margin">
        <img className="photo-hotel" src={props.photo} alt={props.slug} />
        <div className="info-hotel">
          <div className="location-container">
            <img src={ubication} alt="location" />
            <p>{props.city}</p>
          </div>
          <div className="name-hotel">{props.name}</div>
          <div className="description">{props.description}</div>
          <div className="date-style">Desde: {dateFrom}</div>
          <div className="date-style">Hasta: {dateTo}</div>
          <div className="room-info">
            <div className="is-room-available">
              <img src={bed} alt="icono" />
              <p>{props.rooms} habitaciones</p>
            </div>
            <PriceRange price={props.price} />
          </div>
        </div>
        <button
          className="btn-booking"
          onClick={() => {
            alert(("Hotel " + props.name + " Reservado 👍🏼").toUpperCase());
          }}
        >
          Reservar
        </button>
      </div>
    </div>
  );
}

export default HotelCard;
