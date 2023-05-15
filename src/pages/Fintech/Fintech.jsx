import { useContext } from "react";
import { LanguageContext } from "../../context/contextCreation";
import "./Fintech.scss";
const Fintech = () => {
  const {langIndex}=useContext(LanguageContext);
  const langData = [
    {
      title: "Fintech services and prices",
      descr:
        "You can choose both individual site promotion works and complex packages, where we perform all the necessary work on a turnkey basis. If you do not know where to start - ask our specialist, it's free!",
    },
    {
      title: "Услуги и цены на финтех",
      descr:
        "Вы можете выбрать как индивидуальную работу по продвижению сайта, так и комплексные пакеты, где мы выполняем все необходимые работы под ключ. Если вы не знаете, с чего начать - спросите нашего специалиста, это бесплатно!",
    },
    {
      title: "金融科技服务和价格",
      descr:
        "您可以选择个性化的网站推广服务，或者选择我们提供的全套服务。如果您不知道从何入手，请咨询我们的专家，咨询是免费的！",
    },
  ];
  return (
    <div className="fintech">
      <div className="container">
        <h1>{langData[langIndex].title}</h1>
        <p>{langData[langIndex].descr}</p>
        <div className="content">
          <div
            className="card"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="400"
          >
            <div className="card_title">// project manager</div>
            <div className="card_descr">SPECILAZITION:Project management</div>
            <button className="card_button">Detail</button>
          </div>
          <div
            className="card"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="400"
          >
            <div className="card_title">// project manager</div>
            <div className="card_descr">SPECILAZITION:Project management</div>
            <button className="card_button">Detail</button>
          </div>
          <div
            className="card"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="400"
          >
            <div className="card_title">// project manager</div>
            <div className="card_descr">SPECILAZITION:Project management</div>
            <button className="card_button">Detail</button>
          </div>
          <div
            className="card"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="400"
          >
            <div className="card_title">// project manager</div>
            <div className="card_descr">SPECILAZITION:Project management</div>
            <button className="card_button">Detail</button>
          </div>
          <div
            className="card"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="400"
          >
            <div className="card_title">// project manager</div>
            <div className="card_descr">SPECILAZITION:Project management</div>
            <button className="card_button">Detail</button>
          </div>
          <div
            className="card"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="400"
          >
            <div className="card_title">// project manager</div>
            <div className="card_descr">SPECILAZITION:Project management</div>
            <button className="card_button">Detail</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fintech;
