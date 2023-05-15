import { useContext } from "react";
import "./Swiper.scss";
import Carousel from "nuka-carousel";
import { LanguageContext } from "../../context/contextCreation";
const Swiper = ({  card1, card2 ,card3,card4}) => {
  const {langIndex} = useContext(LanguageContext);
  return (
    <div className="swiper_container">
      <Carousel
        renderBottomCenterControls={false}
        renderCenterLeftControls={({ previousSlide }) => (
          <button onClick={previousSlide} className="btn-swiper btn-1">
            <i className="ri-arrow-left-line"></i>
          </button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button onClick={nextSlide} className="btn-swiper btn-2">
            <i className="ri-arrow-right-line"></i>
          </button>
        )}
      >
        <div className="swiper_item i-1">
          <div className="title">
            {card1[langIndex].title}
            <br />
            <strong> {card1[langIndex].br}</strong>
          </div>
          <div className="price">{card1[langIndex].price}</div>
          <ul className="links">
            {card1[langIndex].links.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="swiper_item i-2">
          <div className="title">
            {card2[langIndex].title}
            <br />
            <strong> {card2[langIndex].br}</strong>
          </div>
          <div className="price">{card2[langIndex].price}</div>
          <ul className="links">
            {card2[langIndex].links.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="swiper_item i-3">
          <div className="title">
            {card3[langIndex].title}
            <br />
            <strong> {card3[langIndex].br}</strong>
          </div>
          <div className="price">{card3[langIndex].price}</div>
          <ul className="links">
            {card3[langIndex].links.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="swiper_item i-4">
          <div className="title">
            {card4[langIndex].title}
            <br />
            <strong> {card4[langIndex].br}</strong>
          </div>
          <div className="price">{card4[langIndex].price}</div>
          <ul className="links">
            {card4[langIndex].links.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="swiper_item i-5">
          <div className="title">
            {card4[langIndex].title}
            <br />
            <strong> {card4[langIndex].br}</strong>
          </div>
          <div className="price">{card4[langIndex].price}</div>
          <ul className="links">
            {card4[langIndex].links.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </Carousel>
    </div>
  );
};

export default Swiper;
