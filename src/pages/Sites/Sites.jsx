import { useNavigate } from "react-router-dom";
import "./Sites.scss";
import { LanguageContext } from "../../context/contextCreation";
import { useContext } from "react";
const Sites = () => {
  const {langIndex}=useContext(LanguageContext);
  const navigate  = useNavigate();
  const langData = [
    {
      title: "Website development services and prices",
      descr:
        "You can choose both individual work to create a site, and complex packages, where we perform all the necessary work on a turnkey basis. If you do not know where to start - ask our specialist, it's free!",
    },
    {
      title: "Услуги по разработке веб-сайтов и цены",
      descr:
        "Вы можете выбрать как индивидуальную работу по созданию сайта, так и комплексные пакеты, где мы выполняем все необходимые работы под ключ. Если вы не знаете, с чего начать - спросите нашего специалиста, это бесплатно!",
    },
    {
      title: "网站开发服务和价格",
      descr:
        "您可以选择个性化的网站开发服务，或者选择我们提供的全套服务。如果您不知道从何入手，请咨询我们的专家，咨询是免费的！",
    },
  ];
  return (
    <div className="sites">
      <div className="container">
        <h1>{langData[langIndex]?.title}</h1>
        <p>{langData[langIndex]?.descr}</p>
        <div className="content">
          <div
            className="card"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="400"
          >
            <div className="card_title">// project manager</div>
            <div className="card_descr">SPECILAZITION:Project management</div>
            <button className="card_button" onClick={()=>navigate("/sitemore")}>Detail</button>
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

export default Sites;
