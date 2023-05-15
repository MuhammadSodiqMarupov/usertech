import { useContext } from "react";
import { LanguageContext } from "../../context/contextCreation";
import "./Promotion.scss";

const Promotion = () => {
  const {langIndex}=useContext(LanguageContext);
  const langData = [
    {
      title: "Promotion services and prices",
      descr:
        "You can choose both individual site promotion works and complex packages, where we perform all the necessary work on a turnkey basis. If you do not know where to start - ask our specialist, it's free!",
      title2: "WEBSITE PROMOTION, SEO",
    },
    {
      title: "Услуги и цены на продвижение сайтов",
      descr:
        "Вы можете выбрать как индивидуальную работу по продвижению сайта, так и комплексные пакеты, где мы выполняем все необходимые работы под ключ. Если вы не знаете, с чего начать - спросите нашего специалиста, это бесплатно!",
      title2: "ПРОДВИЖЕНИЕ САЙТОВ, SEO",
    },
    {
      title: "网站推广服务和价格",
      descr:
        "您可以选择个性化的网站推广服务，或者选择我们提供的全套服务。如果您不知道从何入手，请咨询我们的专家，咨询是免费的！",
      title2: "网站推广 SEO",
    },
  ];
  return (
    <div className="promotion">
      <div className="container">
        <h1>{langData[langIndex].title}</h1>
        <p>{langData[langIndex].descr}</p>
        <h1>{langData[langIndex].title2}</h1>
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

export default Promotion;
