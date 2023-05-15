import { useContext } from "react";
import { LanguageContext } from "../../context/contextCreation";
import "./Applications.scss";
const Applications = () => {
  const {langIndex}=useContext(LanguageContext);
  const langData = [
    {
      title: "Services and prices by application",
      descr:
        "You can choose both individual application development work and complex packages, where we perform all the necessary work on a turnkey basis. If you do not know where to start - ask our specialist, it's free!",
      title2: "WEBSITE PROMOTION, SEO",
    },
    {
      title: "Услуги и цены на разработку приложений",
      descr:
        "Вы можете выбрать как индивидуальную работу по разработке приложения, так и комплексные пакеты, где мы выполняем все необходимые работы под ключ. Если вы не знаете, с чего начать - спросите нашего специалиста, это бесплатно!",
      title2: "ПРОДВИЖЕНИЕ САЙТОВ, SEO",
    },
    {
      title: "应用开发服务和价格",
      descr:
        "您可以选择个性化的应用开发服务，或者选择我们提供的全套服务。如果您不知道从何入手，请咨询我们的专家，咨询是免费的！",
      title2: "网站推广SEO",
    },
  ];
  return (
    <div className="Applications">
      <div className="container">
        <h1>{langData[langIndex]?.title}</h1>
        <p>{langData[langIndex]?.descr}</p>
        <h1>{langData[langIndex]?.title2}</h1>
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

export default Applications;
