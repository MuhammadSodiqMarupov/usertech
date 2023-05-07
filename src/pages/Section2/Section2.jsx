import React from 'react';
import "./Section2.scss"
function Section2(props) {
    return (
        <div className="section2">
            <div className="container">
                <div className="top">
                    <div className="left">
                        <h2> Чем мы можем быть Вам полезны? </h2>
                        <div className="other">
                            <h1> 95%  </h1>
                            <h3>наших клиентов окупают услуги уже в первый месяц работы</h3>
                        </div>
                    </div>
                    <div className="right">
                        <p> Разрабатываем веб и мобильные приложения, проводим эффективные маркетинговые кампании.  Как разобраться во всем многообразии услуг  и понять какой именно набор нужен именно Вам? Давайте начнем с разработки концепции! </p>
                        <h1> 5% </h1>
                        <h3> клиенты, которые заказывали услуги  и не внедряли наши рекомендации </h3>
                    </div>
                </div>
                <div className="bottom">
                    <ul>
                        <div className="ulOther">
                            <li> Разработка приложений </li>
                            <li> Influence-маркетинг </li>
                        </div>
                        <div className="ulOther">
                            <li> Криптовалюты и блокчейн </li>
                            <li> PR и медиа </li>
                        </div>
                      <div className={"ulOther1"}>
                          <li> Web3 и DeFi платформы </li>
                          <li> Управление сообществами </li>
                      </div>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Section2;