import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./CheckIn.css";
import { useRoomsContext } from "@contexts/index";

const CheckIn = () => {
  const { roomFilters, setRoomFilters } = useRoomsContext();

  // Funções para lidar com mudanças nos selects
  const handleQuartosChange = (event: { target: { value: string; }; }) => {
    setRoomFilters("rooms", parseInt(event.target.value));
  };

  const handleAdultosChange = (event: { target: { value: string; }; }) => {
    setRoomFilters("people", parseInt(event.target.value));
  };

  return (
    <div className="filters">
      <div className="filter">
        <div>
          <p className="title">CHECK-IN</p>
        </div>
        <div className="divider">
          <DatePicker
            selected={roomFilters.startDate}
            onChange={(date: Date) => setRoomFilters("startDate", date)}
          />
          {/* <p className="info">Sex, 27 de Ago</p>
          <p className="arrow">▼</p> */}
        </div>
      </div>
      <div className="filter">
        <div>
          <p className="title">CHECK-OUT</p>
        </div>
        <div className="divider">
          <DatePicker
            selected={roomFilters.endDate}
            onChange={(date: Date) => setRoomFilters("endDate", date)}
          />
          {/* <p className="info">Dom, 29 de Ago</p>
          <p className="arrow">▼</p> */}
        </div>
      </div>
      <div>
      {/* Seletor de quartos */}
      <div className="filter">
        <div>
          <p className="title">QUARTOS</p>
        </div>
        <div className="divider">
          <select id="quartos" value={roomFilters.rooms} onChange={handleQuartosChange}>
            <option value="1">1 Quarto</option>
            <option value="2">2 Quartos</option>
            <option value="3">3 Quartos</option>
          </select>
        </div>
      </div>
      
      {/* Seletor de adultos */}
      <div className="filter">
        <div>
          <p className="title">HÓSPEDES</p>
        </div>
        <div className="divider">
          <select id="adultos" value={roomFilters.people} onChange={handleAdultosChange}>
            <option value="1">1 Adulto</option>
            <option value="2">2 Adultos</option>
            <option value="3">3 Adultos</option>
          </select>
        </div>
      </div>
    </div>

      <div className="book">
        <p>Book Now</p>
      </div>
    </div>
  );
};

export default CheckIn;
