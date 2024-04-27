import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./CheckIn.css";

const CheckIn = () => {
  const [startDate, setStartDate] = useState(new Date());
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
      <div className="filter">
        <div>
          <p className="title">QUARTO & HÓSPEDES</p>
        </div>
        <div className="divider">
          <p className="info">1 Quarto, 2 Adultos</p>
          <p className="arrow">▼</p>
        </div>
      </div>

      <div className="book">
        <p>Book Now</p>
      </div>
    </div>
  );
};

export default CheckIn;
