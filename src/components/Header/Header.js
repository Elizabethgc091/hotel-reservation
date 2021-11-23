import React from "react";
import "./style.css";

function Header({ dateFrom, dateTo, country, price, rooms }) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <div className="header-container">
      <div className="name-header margin-name">Reserva de Hoteles</div>
      <div className="info-reserva">
        <div>
          Desde:{" "}
          {dateFrom === ""
            ? " "
            : new Date(dateFrom).toLocaleDateString("es-MX", options)}
        </div>
        <div>
          Hasta:{" "}
          {dateTo === ""
            ? ""
            : new Date(dateTo).toLocaleDateString("es-MX", options)}
        </div>
        <div>Destino: {country === "Todos" ? "" : country}</div>
        <div>Precio: {price == 0 ? "" : "$".repeat(price)}</div>
        <div>Tamaño: {rooms === "Todos" ? "" : rooms.toUpperCase()}</div>
      </div>
    </div>
  );
}

export default Header;
