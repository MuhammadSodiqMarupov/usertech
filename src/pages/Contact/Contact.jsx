import { useState } from "react";
import "./Contact.scss";
import leftBG from "../../images/bg-left.svg";
import rightBG from "../../images/bg-right.svg";
function Contact() {
  const [inputRangeValue, setInputRangeValue] = useState(1000);
  const resetCheckedInputs = (param) => {
    const inputs = document.querySelectorAll(".checkbox-container input");
    for (let i = 0; i < inputs.length; i++) {
      if (param != i) {
        inputs[i].checked = false;
      } else {
        inputs[i].checked = true;
      }
    }
  };
  return (
    <div className="contact">
      <svg className="fusion-clouds-candy" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none" style={{padding:"0"}} fill="rgba(2,86,255,1)"><path d="M-5 100 Q 0 20 5 100 Z"></path>
                <path d="M0 100 Q 5 0 10 100"></path>
                <path d="M5 100 Q 10 30 15 100"></path>
                <path d="M10 100 Q 15 10 20 100"></path>
                <path d="M15 100 Q 20 30 25 100"></path>
                <path d="M20 100 Q 25 -10 30 100"></path>
                <path d="M25 100 Q 30 10 35 100"></path>
                <path d="M30 100 Q 35 30 40 100"></path>
                <path d="M35 100 Q 40 10 45 100"></path>
                <path d="M40 100 Q 45 50 50 100"></path>
                <path d="M45 100 Q 50 20 55 100"></path>
                <path d="M50 100 Q 55 40 60 100"></path>
                <path d="M55 100 Q 60 60 65 100"></path>
                <path d="M60 100 Q 65 50 70 100"></path>
                <path d="M65 100 Q 70 20 75 100"></path>
                <path d="M70 100 Q 75 45 80 100"></path>
                <path d="M75 100 Q 80 30 85 100"></path>
                <path d="M80 100 Q 85 20 90 100"></path>
                <path d="M85 100 Q 90 50 95 100"></path>
                <path d="M90 100 Q 95 25 100 100"></path>
                <path d="M95 100 Q 100 15 105 100 Z"></path></svg>
      <div className="container">
        <h1> Цифры говорят сами за себя</h1>
        <h3> Есть идеи проекта ?</h3>
        <div className="secondSection">
          <h1> Свяжитесь с нами</h1>
          <div className="cardDiv">
            <div className="card1">
              <button>
                <i className="ri-team-fill"></i>{" "}
              </button>
              <p> Только самые талантливые</p>
              <p> работают в нашей команде</p>
            </div>
            <div className="card1">
              <button>
                <i className="ri-money-dollar-circle-fill"></i>{" "}
              </button>
              <p> Мы не завышаем цены,</p>
              <p> ведем учет по часам</p>
            </div>
            <div className="card1">
              <button>
                <i className="ri-checkbox-circle-fill"></i>{" "}
              </button>
              <p> Мы всегда делаем</p>
              <p> как для себя</p>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="bg_layer">
            <img src={leftBG} alt="" />
            <img src={rightBG} alt="" />
          </div>
          <div className="form_card">
            <div className="part">
              <label>
                <p>Ваше имя *</p>
                <input type="text" placeholder="Ваше имя*" />
              </label>
              <input type="text" placeholder="Ваша фамилия*" />
            </div>
            <div className="part">
              <div className="input_box">
                <i className="ri-phone-fill"></i>
                <input type="text" placeholder="Ваше номер телефона*" />
              </div>
              <div className="input_box">
                <i className="ri-mail-fill"></i>
                <input type="text" placeholder="Email" />
              </div>
            </div>
            <div className="part">
              <label>
                <p>Бюджет проекта *</p>
                <div className="box">
                  <input
                    type="number"
                    value={inputRangeValue}
                    onChange={(e) => {
                      setInputRangeValue(e.target.value);
                    }}
                  />
                  <input
                    className="range"
                    type="range"
                    value={inputRangeValue}
                    onChange={(e) => {
                      setInputRangeValue(e.target.value);
                    }}
                  />
                </div>
              </label>
              <label>
                <p>Название компании</p>
                <input
                  type="text"
                  placeholder="Название компании
"
                />
              </label>
            </div>
            <div className="part">
              <p>Откуда вы о нас узнали ?</p>
              <div className="checkbox">
                <label className="checkbox-container">
                  {" "}
                  <p>Друзья или коллеги</p>
                  <input
                    onChange={(e) => {
                      resetCheckedInputs(0);
                    }}
                    type="checkbox"
                  />
                  <span className="checkmark"></span>
                </label>
                <label className="checkbox-container">
                  <input
                    onChange={(e) => {
                      resetCheckedInputs(1);
                    }}
                    type="checkbox"
                  />
                  <p>Радио/ ТВ</p>
                  <span className="checkmark"></span>
                </label>
                <label className="checkbox-container">
                  <input
                    onChange={(e) => {
                      resetCheckedInputs(2);
                    }}
                    type="checkbox"
                  />
                  <p>Социальные сети</p>
                  <span className="checkmark"></span>
                </label>
                <label className="checkbox-container">
                  <input
                    onChange={(e) => {
                      resetCheckedInputs(3);
                    }}
                    type="checkbox"
                  />
                  <p>Другое</p>
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>
            <div className="part">
              <label className="w-100">
                <p>Напишите</p>
                <input type="text" placeholder="Другое" />
              </label>
            </div>
            <button>Отправить запрос</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
