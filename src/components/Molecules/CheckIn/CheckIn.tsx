import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./CheckIn.css";

const CheckIn = () => {
  const [numQuartos, setNumQuartos] = useState(1);
  const [numAdultos, setNumAdultos] = useState(1);
  const [startDate, setStartDate] = useState(new Date());

  // Funções para lidar com mudanças nos selects
  const handleQuartosChange = (event: { target: { value: string; }; }) => {
    setNumQuartos(parseInt(event.target.value));
  };

  const handleAdultosChange = (event: { target: { value: string; }; }) => {
    setNumAdultos(parseInt(event.target.value));
  };
  return (
    <div className="filters">
      <div className="filter">
        <div>
          <p className="title">CHECK-IN</p>
        </div>
        <div className="divider">
          <DatePicker
            selected={startDate}
            onChange={(date: Date) => setStartDate(date)}
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
            selected={startDate}
            onChange={(date: Date) => setStartDate(date)}
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
          <select id="quartos" value={numQuartos} onChange={handleQuartosChange}>
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
          <select id="adultos" value={numAdultos} onChange={handleAdultosChange}>
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
