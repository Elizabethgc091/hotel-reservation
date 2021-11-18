import "./App.css";
import React, { useState, useEffect } from "react";
import HotelCard from "./components/HotelCard/HotelCard.js";
import { hotelsData } from "./data.js";
import "./components/HotelCard/hotelCard.css";
import PriceRange from "./components/PriceRange/PriceRange";
import Header from "./components/Header/Header.js";
import Select from "./components/Select/Select.js";

function App() {
  const [price, setPrice] = useState(0);
  const [country, setCountry] = useState("Chile");
  const [roomSize, setRoomSize] = useState(0);
  const [filteredHotelsList, setFilteredHotelsList] = useState(hotelsData);

  useEffect(() => {
    setFilteredHotelsList(filterByAllFilters());
  }, [price, country, roomSize]);

  function selectFiltered(selectedValue) {
    setPrice(selectedValue);
  }

  function selectFilteredCountry(selectedValue) {
    setCountry(selectedValue);
  }

  function filterByAllFilters() {
    console.log("Filtered by price " + price);
    console.log("Filtered by country " + country);
    let result = hotelsData
      .filter((hotel) => {
        return country === "Todos" ? hotel : hotel.country === country;
      })
      .filter((hotel) => {
        return price == 0 ? hotel : hotel.price == price;
      })
      .filter((hotel) => {
        // TODO: Filtrar por numero de habitaciones
        return roomSize == 0 ? hotel : hotel.rooms == roomSize;
      });

    console.log(result);
    return result;
  }

  return (
    <div>
      <div className="App">
        <Header price={price} />
        <Select price={price} selectFilter={selectFiltered} />
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
    </div>
  );
}

export default App;
