import './Section12.scss'
import direktor from "../../images/div.ytp-cued-thumbnail-overlay-image.svg"
function Section12(props) {
    return (
        <div className="section12">
            <div className="container">
                <div className="left">
                    <div className="innerLeft">
                        <h1> Получить консультацию </h1>
                        <h4> Оставьте заявку и в ближайшее время мы свяжемся с Вами </h4>
                        <input placeholder="Ваше имя" className="inp1" type="text"/>
                        <input placeholder="Ваш номер телефона" className="inp2" type="text"/>
                        <textarea placeholder="Ваш вопрос" className={"inp3"} cols="30" rows="10"></textarea>
                        <button> Получить консультацию </button>
                        <small> Нажимая кнопку, вы даете согласие    на <span> обработку персональных данных </span> </small>
                    </div>
                </div>
                <div className="right">
                    <div className="forImg">
                        <img src={direktor} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section12;