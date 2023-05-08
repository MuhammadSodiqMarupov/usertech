import "./Section12.scss";
import direktor from "../../images/div.ytp-cued-thumbnail-overlay-image.webp";
function Section12({ langIndex }) {
    const langData = [
        {
            title:"Получить консультацию",
            descr:"Оставьте заявку и в ближайшее время мы свяжемся с Вами",
            input1:"Ваше имя",
            input2:"Ваше номер телефона",
            input3:"Ва",
            button:"",
            link:""
        },
        {},
        {},
    ]
  return (
    <div className="section12">
      <div className="container">
        <div className="left">
          <div className="innerLeft">
            <h1> Получить консультацию </h1>
            <h4> Оставьте заявку и в ближайшее время мы свяжемся с Вами </h4>
            <input placeholder="Ваше имя" className="inp1" type="text" />
            <input
              placeholder="Ваш номер телефона"
              className="inp2"
              type="text"
            />
            <textarea
              placeholder="Ваш вопрос"
              className={"inp3"}
              cols="30"
              rows="10"
            ></textarea>
            <button> Получить консультацию </button>
            <small>
              {" "}
              Нажимая кнопку, вы даете согласие на{" "}
              <span> обработку персональных данных </span>{" "}
            </small>
          </div>
        </div>
        <div className="right">
          <div className="forImg">
            <img src={direktor} alt="Director " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section12;
