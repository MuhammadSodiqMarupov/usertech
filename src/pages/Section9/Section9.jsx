import "./Section9.scss"
import call from "../../images/phone.gif"
function Section9(props) {
    return (
        <div className="section9">
            <div className="container">
                <div className="bigCard">
                    <div className="left">
                        <h1> Оставьте заявку на проект </h1>
                        <div className="inputs">
                            <input placeholder="ФИО" type="text"/>
                            <input placeholder="Телефон" type="text"/>
                        </div>
                        <button> Отправить заявку на проект </button>
                        <small> *отправляя формы на данном сайте, вы даете согласие на обработку персональных данных </small>
                    </div>
                    <div className="right">
                        <img src={call} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section9;