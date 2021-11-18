import "./App.css";
import React, { useState } from "react";
import HotelCard from "./components/HotelCard/HotelCard.js";
import { hotelsData } from "./data.js";
import "./components/HotelCard/hotelCard.css";
import PriceRange from "./components/PriceRange/PriceRange";
import Header from "./components/Header/Header.js";
import Select from "./components/Select/Select.js";

function App() {
  const [price, setPrice] = useState("0");
  const [filteredHotelsList, setFilteredHotelsList] = useState(hotelsData);
  function selectFiltered(selectedValue, listUpdated) {
    setPrice(selectedValue);
    setFilteredHotelsList(listUpdated);
    console.log(listUpdated);
  }
  return (
    <div>
      <div className="App">
        <Header />
        <Select
          price={price}
          selectFilter={selectFiltered}
          selectFilter={selectFiltered}
        />
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
