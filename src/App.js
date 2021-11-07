import "./App.css";
import HotelCard from "./components/HotelCard/HotelCard.js";
import { hotelsData } from "./data.js";
import "./components/HotelCard/hotelCard.css";

function App() {
  return (
    <div>
      <div className="App">
        <div className="hotels-contaniner">
          {hotelsData.map((hotel, index) => {
            return (
              <HotelCard
                photo={hotel.photo}
                name={hotel.name}
                description={hotel.description}
                city={hotel.city}
                rooms={hotel.rooms}
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
