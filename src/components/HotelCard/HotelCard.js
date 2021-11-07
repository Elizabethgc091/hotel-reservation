import React from "react";
import bed from "./bed.svg";
import "./hotelCard.css";

function HotelCard(props) {
  return (
    <div className="card-container">
      <div className="main-margin">
        <img className="photo-hotel" src={props.photo} alt={props.slug} />
        <div className="info-hotel">
          <div>{props.city}</div>
          <div className="name-hotel">{props.name}</div>
          <div className="description">{props.description}</div>
          <div className="room-info">
            <div className="is-room-available">
              <img src={bed} alt="icono" />
              <p>{props.rooms} habitaciones</p>
            </div>
            <div className="price-indecator">
              <div>$</div>
              <div>$</div>
              <div>$</div>
              <div>$</div>
              <div>$</div>
            </div>
          </div>
        </div>
        <button className="btn-booking">Reservar</button>
      </div>
    </div>
  );
}

export default HotelCard;
