import React from "react";
import "./style.css";

function Header() {
  return (
    <div className="header-container">
      <div className="name-header">Reserva de Hoteles</div>
      <div className="info-reserva">
        <div>Desde: </div>
        <div>Hasta: </div>
        <div>Destino:</div>
        <div>Precio:</div>
        <div>Tamaño:</div>
      </div>
    </div>
  );
}

export default Header;
