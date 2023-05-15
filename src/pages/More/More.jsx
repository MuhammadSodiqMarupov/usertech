import { useNavigate } from "react-router-dom";
import "./More.scss";
import glasses from "../../images/info-8.png"
import  more from "../../images/ozyumenko-mockup.png"
import { useContext } from "react";
import { LanguageContext } from "../../context/contextCreation";
const More = () => {
  const { langIndex } = useContext(LanguageContext);
  const navigate = useNavigate();
  return (
    <div className="more_section">
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
            <div className="card" data-aos="fade-up">
              <img src={require("../../images/card1_more.jpg")} alt="" />
              <div className="card_title">
                Web разработка <br /> (Сайты)
              </div>
              <div className="card_descr">
                Заказав сайт под ключ у нас, вы получите мощный имиджевый и
                маркетинговый инструмент. Он повысит ваши продажи и легко
                продвинется в ТОП.
              </div>
              <button onClick={() => navigate("/sites")}>
                Узнать подробнее
              </button>
            </div>
            <div className="card" data-aos="fade-up">
              <img src={require("../../images/card2_more.jpg")} alt="" />
              <div className="card_title">Продвижение</div>
              <div className="card_descr">
                Продвижение сайтов — комплекс работ по привлечению целевого
                трафика из органической (естественной) выдачи поисковых систем.
              </div>
              <button onClick={() => navigate("/sites")}>
                Узнать подробнее
              </button>
            </div>
          </div>
          <div className="bottom">
            <div className="card" data-aos="fade-up">
              <img src={require("../../images/card3_more.jpg")} alt="" />
              <div className="card_title">Мобильные приложения</div>
              <div className="card_descr">
                Разрабатываем гибридные и нативные мобильные приложения для
                платформ iOS, Android, Android Wear, watchOS, ipadOS, tvOS,
                macOS.
              </div>
              <button onClick={() => navigate("/sites")}>
                Узнать подробнее
              </button>
            </div>
            <div className="card" data-aos="fade-up">
              <img src={require("../../images/card4_more.jpg")} alt="" />
              <div className="card_title">Искусственный интеллект</div>
              <div className="card_descr">
                Разрабатываем и настраиваем машинное обучение для автоматизации
                и оптимизации бизнес процессов
              </div>
              <button onClick={() => navigate("/sites")}>
                Узнать подробнее
              </button>
            </div>
            <div className="card" data-aos="fade-up">
              <img src={require("../../images/card5_more.jpg")} alt="" />
              <div className="card_title">Финтеч</div>
              <div className="card_descr">
                Разрабатываем финансовые WEB-сервисы для бизнеса или стартап
                проекты .
              </div>
              <button onClick={() => navigate("/sites")}>
                Узнать подробнее
              </button>
            </div>
          </div>
        </div>
        <div className="content-2">
            <div className="top">
              <div className="left">
                <img src={glasses} alt=""/>
              </div>
              <div className="right">
                <h1> Мы являемся IT компанией с полным спектром услуг</h1>
                <p> Вся необходимая информация по разработке и по продвижению проектов есть на сайте. Если вы не нашли ответ на ваш вопрос , то просто свяжитесь с нами .</p>
                <button> Эсть проект? свяжитесь с нами! </button>
              </div>
            </div>
        </div>
        <div className="content-3">
          <div className="bigCard">
            <div className="top">
              <h1> Наши последние проекты</h1>
              <button> Посмотреть все </button>
            </div>
            <div className="bottom">
              <div className="card1">
                <div className="imgDiv">
                  <img src={more} alt=""/>
                </div>
                <p> Юридическая помощь </p>
                <h2> Web </h2>
              </div>
              <div className="card1">
                <div className="imgDiv">
                  <img src={more} alt=""/>
                </div>
                <p> Юридическая помощь </p>
                <h2> Web </h2>
              </div>
              
              <div className="card1">
                <div className="imgDiv">
                  <img src={more} alt=""/>
                </div>
                <p> Юридическая помощь </p>
                <h2> Web </h2>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default More;
