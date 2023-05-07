import "./Section10.scss"
import table from "../../images/table 1.svg"
function Section10() {
    return (
        <div className="section10">
            <div className="container">
                <div className="main">
                    <h1> Принципы работы нашей студии </h1>
                    <div className="d">
                        <h3> Подбираем <span> решение </span> под клиента. </h3>
                        <p> Мы пообщаемся с вами и предложим решение, которое даст максимальный результат  в ближайшее время. Не каждому бизнесу подходит SEO или нужен многостраничный сайт или web приложение. </p>
                    </div>
                        <img src={table} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Section10;