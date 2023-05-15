import { useContext } from "react";
import { LanguageContext } from "../../context/contextCreation";
import "./Jobs.scss";
const Jobs = () => {
  const {langIndex}=useContext(LanguageContext);
  const langData = [
    {
      title: "VACANCIES",
      descr:
        "We are constantly looking for the best talents who are ready to improve their skills in the development of advanced technologies and share their experience.",
    },
    {
      title: "ВАКАНСИИ",
      descr:
        "Мы постоянно ищем лучших талантов, готовых совершенствовать свои навыки в разработке передовых технологий и делиться своим опытом.",
    },
    {
      title: "招聘信息",
      descr:
        "我们正在不断寻找最好的人才，他们愿意在开发先进技术方面提高自己的技能，并分享他们的经验。",
    },
  ];
  return (
    <div className="jobs">
      <div className="container">
        <div className="title">{langData[langIndex]?.title}</div>
        <div className="descr">{langData[langIndex]?.descr}</div>
        <div className="content">
          <div className="card" data-aos="fade-right" data-aos-duration="1500">
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
          <div className="card" data-aos="fade-right" data-aos-delay="900">
            <div className="card_title">// project manager</div>
            <div className="card_descr">SPECILAZITION:Project management</div>
            <button className="card_button">Detail</button>
          </div>
          <div
            className="card"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="1300"
          >
            <div className="card_title">// project manager</div>
            <div className="card_descr">SPECILAZITION:Project management</div>
            <button className="card_button">Detail</button>
          </div>
          <div
            className="card"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="1700"
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

export default Jobs;
