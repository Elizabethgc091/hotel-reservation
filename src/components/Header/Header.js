import React from "react";
import "./style.css";

function Header({ dateFrom, country, price, rooms }) {
  return (
    <div className="header-container">
      <div className="name-header">Reserva de Hoteles</div>
      <div className="info-reserva">
        <div>Desde: {dateFrom ? { dateFrom } : " "} </div>
        <div>Hasta: </div>
        <div>
          Destino: {country === "Todos" ? "Todos los destinos" : country}
        </div>
        <div>
          Precio: {price == 0 ? "Todos los precios" : "$".repeat(price)}
        </div>
        <div>
          Tamaño:{" "}
          {rooms === "Todos" ? "Todos los tamaños" : rooms.toUpperCase()}
        </div>
      </div>
    </div>
  );
}

export default Header;
