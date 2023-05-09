import { useNavigate } from "react-router-dom";
import "./More.scss";
const More = () => {
    const navigate = useNavigate();
  return (
    <div className="more">
      <div className="container">
        <h1 className="title">Чем мы можем помочь вам?</h1>
        <p className="descr">
          Разрабатываем веб и мобильные приложения, проводим <br /> эффективные
          маркетинговые кампании. Как разобраться во всем <br /> многообразии
          услуг и понять какой именно набор нужен именно Вам? <br />
          Давайте начнем с разработки концепции!
        </p>
        <div className="content">
          <div className="top">
            <div className="card">
              <img src={require("../../images/card1_more.jpg")} alt="" />
              <div className="card_title">
                Web разработка <br /> (Сайты)
              </div>
              <div className="card_descr">
                Заказав сайт под ключ у нас, вы получите мощный имиджевый и
                маркетинговый инструмент. Он повысит ваши продажи и легко
                продвинется в ТОП.
              </div>
              <button onClick={()=>navigate("/sites")}>Узнать подробнее</button>
            </div>
            <div className="card">
              <img src={require("../../images/card2_more.jpg")} alt="" />
              <div className="card_title">Продвижение</div>
              <div className="card_descr">
                Продвижение сайтов — комплекс работ по привлечению целевого
                трафика из органической (естественной) выдачи поисковых систем.
              </div>
              <button onClick={()=>navigate("/sites")}>Узнать подробнее</button>
            </div>
          </div>
          <div className="bottom">
            <div className="card">
              <img src={require("../../images/card3_more.jpg")} alt="" />
              <div className="card_title">Мобильные приложения</div>
              <div className="card_descr">
                Разрабатываем гибридные и нативные мобильные приложения для
                платформ iOS, Android, Android Wear, watchOS, ipadOS, tvOS,
                macOS.
              </div>
              <button onClick={()=>navigate("/sites")}>Узнать подробнее</button>
            </div>
            <div className="card">
              <img src={require("../../images/card4_more.jpg")} alt="" />
              <div className="card_title">Искусственный интеллект</div>
              <div className="card_descr">
                Разрабатываем и настраиваем машинное обучение для автоматизации
                и оптимизации бизнес процессов
              </div>
              <button onClick={()=>navigate("/sites")}>Узнать подробнее</button>
            </div>
            <div className="card">
              <img src={require("../../images/card5_more.jpg")} alt="" />
              <div className="card_title">Финтеч</div>
              <div className="card_descr">
                Разрабатываем финансовые WEB-сервисы для бизнеса или стартап
                проекты .
              </div>
              <button onClick={()=>navigate("/sites")}>Узнать подробнее</button>
            </div>
          </div>
        </div>
        <div className="content-2">
            <div className="top">
                
            </div>
            <div className="bottom"></div>
        </div>
      </div>
    </div>
  );
};

export default More;
