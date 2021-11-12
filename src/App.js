import "./App.css";
import HotelCard from "./components/HotelCard/HotelCard.js";
import { hotelsData } from "./data.js";
import "./components/HotelCard/hotelCard.css";
import PriceRange from "./components/PriceRange/PriceRange";

function App() {
  return (
    <div>
      <div className="App">
        <div className="hotels-contaniner">
          {hotelsData
            .filter((value) => {
              return value.price === 4;
            })
            .filter((value) => {
              return value.country === "Chile";
            })
            .map((hotel, index) => {
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
