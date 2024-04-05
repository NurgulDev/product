import React from "react";
import "./Maininformationstart.css";
import symbol from "../../../image/Symbol.svg";
import symbol2 from "../../../image/Symbol2.svg";
import symbol3 from "../../../image/Symbol3.svg";
import symbol4 from "../../../image/Symbol4.svg";
const Maininformationstart: React.FC = () => {
  return (
    <div id="mainstart">
      <div className="container">
        <div className="block">
          <div className="mainstart">
            <div className="mainfoto">
              <img src={symbol} alt="" />
            </div>
            <div className="maintext">
              <h3>Мы первые!</h3>
              <p>Первый маркетплейс рынка дордой</p>
            </div>
          </div>
          <div className="mainstart">
            <div className="mainfoto">
              <img src={symbol2} alt="" />
            </div>
            <div className="maintext">
              <h3>Проверенные поставщики</h3>
              <p>Только реальные продавцы</p>
            </div>
          </div>
          <div className="mainstart">
            <div className="mainfoto">
              <img src={symbol3} alt="" />
            </div>
            <div className="maintext">
              <h3>Мы первые!</h3>
              <p>Первый маркетплейс рынка</p>
            </div>
          </div>
          <div className="mainstart">
            <div className="mainfoto">
              <img src={symbol4} alt="" />
            </div>
            <div className="maintext">
              <h3>Мы первые!</h3>
              <p>Первый маркетплейс рынка</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maininformationstart;
