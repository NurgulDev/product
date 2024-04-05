import React from "react";
import "./Mainheaderstartnavbar.css";
import { IoMenu } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

const Mainheaderstartnavbar: React.FC = () => {
  return (
    <div id="mainheaderstart">
      <div className="container">
        <div className="mainheaderstart">
          <div className="mainheaderend">
            <div className="blockss">
              <IoMenu className="admin" />
              <a href="#">Категория</a>
            </div>
            <div className="mainheadeitem">
              <a href="#">О нас</a>
              <a href="#">Услуги</a>
              <a href="#">Отзывы клиентов</a>
              <a href="#">Контакты</a>
            </div>
          </div>
          <div className="mainheaderinput">
            <IoSearch className="search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainheaderstartnavbar;
