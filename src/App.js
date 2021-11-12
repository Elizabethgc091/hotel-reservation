import "./App.css";
import HotelCard from "./components/HotelCard/HotelCard.js";
import { hotelsData } from "./data.js";
import "./components/HotelCard/hotelCard.css";
import PriceRange from "./components/PriceRange/PriceRange";
import Header from "./components/Header/Header.js";

function App() {
  return (
    <div>
      <div className="App">
        <Header />
        <div className="hotels-contaniner">
          {hotelsData.map((hotel, index) => {
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
