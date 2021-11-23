import "./App.css";
import React, { useState, useEffect } from "react";
import HotelCard from "./components/HotelCard/HotelCard.js";
import { hotelsData } from "./data.js";
import "./components/HotelCard/hotelCard.css";
import Header from "./components/Header/Header.js";
import Select from "./components/Select/Select.js";
import InputDate from "./components/InputDate/InputDate.js";

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
    console.log("TimeStamp" + new Date(selectedDate).getTime() + 100000);
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
    if (size == 0) {
      return "Todos";
    } else if (size > 0 && size <= 10) {
      return "pequeño";
    } else if (size >= 11 && size <= 25) {
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
        return dateFrom === ""
          ? hotel
          : new Date(dateFrom).getTime() + 100000 >= hotel.availabilityFrom;
      })
      .filter((hotel) => {
        return dateTo === ""
          ? hotel
          : new Date(dateTo).getTime() <= hotel.availabilityTo;
      })
      .filter((hotel) => {
        return country === "Todos" ? hotel : hotel.country === country;
      })
      .filter((hotel) => {
        return price == 0 ? hotel : hotel.price == price;
      })
      .filter((hotel) => {
        return roomSize == "Todos"
          ? hotel
          : calulateRoomSize(hotel.rooms) === roomSize;
      });
    console.log(result);
    return result;
  }

  function reset() {
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
        <div className="filter-container">
          <InputDate date={dateFrom} setDate={selectDateFrom} />
          <InputDate date={dateTo} setDate={selectedDateTo} />
          <Select
            options={countryOptions}
            value={country}
            selectFilter={selectFilteredCountry}
          />
          <Select
            options={priceOptions}
            value={price}
            selectFilter={selectFilteredPrice}
          />
          {/** Filtered */}

          <Select
            options={roomSizeOptions}
            value={roomSize}
            selectFilter={selectFilteredSizeRoom}
          />
          <button onClick={reset}>Reset</button>
        </div>

        <div className="hotels-contaniner">
          {filteredHotelsList.map((hotel, index) => {
            return (
              <HotelCard
                photo={hotel.photo}
                name={hotel.name}
                description={hotel.description}
                availabilityTo={hotel.availabilityTo}
                city={hotel.city}
                rooms={hotel.rooms}
                price={hotel.price}
                key={index}
              />
            );
          })}
        </div>
      </div>
      <footer>Hola</footer>
    </div>
  );
}

export default App;
