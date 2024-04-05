import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import vector from "../../../image/Vector (1).svg";
import "./Mainheaderendnavbar.css";

const Mainheaderendnavbar: React.FC = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div id="mainheader">
      <div className="container">
        <div className="mainheader">
          <Slider {...settings}>
            <div className="block">
              <div className="mainheaderacvi-block">
                <div className="mainheaderakvi">
                  <h1>Скидка на все велосипеды -20%</h1>
                  <p>
                    Детские велосипеды для летнего сезона. Скидки -20% при
                    заказе от 15 000 руб. В подарок гарантия на 2 года без
                    переплаты.
                  </p>
                  <button>Подробнее</button>
                </div>
                <div className="headermainimage">
                  <img src={vector} alt="" />
                </div>
              </div>
            </div>
            <div className="block">
              <div className="mainheaderacvi-block">
                <div className="mainheaderakvi">
                  <h1>Скидка на все велосипеды -20%</h1>
                  <p>
                    Детские велосипеды для летнего сезона. Скидки -20% при
                    заказе от 15 000 руб. В подарок гарантия на 2 года без
                    переплаты.
                  </p>
                  <button>Подробнее</button>
                </div>
                <div className="headermainimage">
                  <img src={vector} alt="" />
                </div>
              </div>
            </div>
            <div className="block">
              <div className="mainheaderacvi-block">
                <div className="mainheaderakvi">
                  <h1>Скидка на все велосипеды -20%</h1>
                  <p>
                    Детские велосипеды для летнего сезона. Скидки -20% при
                    заказе от 15 000 руб. В подарок гарантия на 2 года без
                    переплаты.
                  </p>
                  <button>Подробнее</button>
                </div>
                <div className="headermainimage">
                  <img src={vector} alt="" />
                </div>
              </div>
            </div>
            <div className="block">
              <div className="mainheaderacvi-block">
                <div className="mainheaderakvi">
                  <h1>Скидка на все велосипеды -20%</h1>
                  <p>
                    Детские велосипеды для летнего сезона. Скидки -20% при
                    заказе от 15 000 руб. В подарок гарантия на 2 года без
                    переплаты.
                  </p>
                  <button>Подробнее</button>
                </div>
                <div className="headermainimage">
                  <img src={vector} alt="" />
                </div>
              </div>
            </div>
            <div className="block">
              <div className="mainheaderacvi-block">
                <div className="mainheaderakvi">
                  <h1>Скидка на все велосипеды -20%</h1>
                  <p>
                    Детские велосипеды для летнего сезона. Скидки -20% при
                    заказе от 15 000 руб. В подарок гарантия на 2 года без
                    переплаты.
                  </p>
                  <button>Подробнее</button>
                </div>
                <div className="headermainimage">
                  <img src={vector} alt="" />
                </div>
              </div>
            </div>
            <div className="block">
              <div className="mainheaderacvi-block">
                <div className="mainheaderakvi">
                  <h1>Скидка на все велосипеды -20%</h1>
                  <p>
                    Детские велосипеды для летнего сезона. Скидки -20% при
                    заказе от 15 000 руб. В подарок гарантия на 2 года без
                    переплаты.
                  </p>
                  <button>Подробнее</button>
                </div>
                <div className="headermainimage">
                  <img src={vector} alt="" />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Mainheaderendnavbar;
