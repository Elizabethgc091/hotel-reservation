import "./App.css";
import React, { useState, useEffect } from "react";
import { hotelsData } from "./data.js";
import "./components/HotelCard/hotelCard.css";
import Header from "./components/Header/Header.js";
import Filters from "./components/Filters/Filters";
import Hoteles from "./components/Hoteles/Hoteles";

function App() {
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [price, setPrice] = useState(0);
  const [country, setCountry] = useState("Todos");
  const [roomSize, setRoomSize] = useState("Todos");
  const [filteredHotelsList, setFilteredHotelsList] = useState(hotelsData);

  useEffect(() => {
    setFilteredHotelsList(filterByAllFilters());
  }, [dateFrom, dateTo, price, country, roomSize]);

  function selectDateFrom(selectedDate) {
    setDateFrom(selectedDate);
  }
  function selectedDateTo(selectedDate) {
    setDateTo(selectedDate);
  }
  function selectFilteredPrice(selectedValue) {
    setPrice(selectedValue);
  }

  function selectFilteredCountry(selectedValue) {
    setCountry(selectedValue);
  }

  function selectFilteredSizeRoom(selectedValue) {
    setRoomSize(selectedValue);
  }

  function calulateRoomSize(size) {
    if (size === 0) {
      return "Todos";
    } else if (size > 0 && size <= 10) {
      return "pequeño";
    } else if (size >= 11 && size <= 20) {
      return "mediano";
    } else {
      return "grande";
    }
  }

  function filterByAllFilters() {
    console.log("Filtered by price " + price);
    console.log("Filtered by country " + country);
    console.log("Filtered by dateFrom" + dateFrom);
    let result = hotelsData
      .filter((hotel) => {
        if (dateFrom !== "" && dateTo !== "") {
          return (
            hotel.availabilityFrom <= new Date(dateFrom).getTime() + 100000 &&
            new Date(dateTo).getTime() <= hotel.availabilityTo
          );
        } else {
          return hotel;
        }
      })

      .filter((hotel) => {
        return country === "Todos" ? hotel : hotel.country === country;
      })
      .filter((hotel) => {
        return price === 0 ? hotel : hotel.price == price;
      })
      .filter((hotel) => {
        return roomSize === "Todos"
          ? hotel
          : calulateRoomSize(hotel.rooms) === roomSize;
      });

    return result;
  }

  function reset() {
    setDateFrom("");
    setDateTo("");
    setCountry("Todos");
    setPrice(0);
    setRoomSize("Todos");
  }

  let countryOptions = [
    {
      name: "Todos",
      value: "Todos",
    },
    {
      name: "Argentina",
      value: "Argentina",
    },
    {
      name: "Chile",
      value: "Chile",
    },
    {
      name: "Brasil",
      value: "Brasil",
    },
    {
      name: "Uruguay",
      value: "Uruguay",
    },
  ];

  let priceOptions = [
    {
      name: "Todos",
      value: 0,
    },
    { name: "$", value: 1 },
    { name: "$$", value: 2 },
    { name: "$$$", value: 3 },
    { name: "$$$$", value: 4 },
  ];

  let roomSizeOptions = [
    {
      name: "Todos",
      value: "Todos",
    },
    { name: "Pequeño", value: "pequeño" },
    {
      name: "Mediano",
      value: "mediano",
    },
    {
      name: "Grande",
      value: "grande",
    },
  ];

  if (new Date(dateTo).getTime() < new Date(dateFrom).getTime()) {
    alert("El rango de fechas es incorrecto");
    reset();
  }

  return (
    <div>
      <div className="App">
        {/** Header */}
        <Header
          dateFrom={dateFrom}
          dateTo={dateTo}
          price={price}
          rooms={roomSize}
          country={country}
        />
        <Filters
          dateFrom={dateFrom}
          selectDateFrom={selectDateFrom}
          dateTo={dateTo}
          selectedDateTo={selectedDateTo}
          countryOptions={countryOptions}
          country={country}
          selectFilteredCountry={selectFilteredCountry}
          priceOptions={priceOptions}
          price={price}
          selectFilteredPrice={selectFilteredPrice}
          roomSizeOptions={roomSizeOptions}
          roomSize={roomSize}
          selectFilteredSizeRoom={selectFilteredSizeRoom}
          reset={reset}
        />

        <Hoteles hotelsList={filteredHotelsList} />
      </div>
      <footer className="footer-container">
        <h3>© 2021 Elizabeth Gonzalez Cruz | Reserva de Hoteles</h3>
      </footer>
    </div>
  );
}

export default App;
