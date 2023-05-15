import rakete from "../../images/coinspot.png.svg";
import green from "../../images/beincrypto.png.svg";
import desentr from "../../images/decentr.png.svg";
import fork from "../../images/forklog.png.svg";
import vedomosti from "../../images/vedomosti.png.webp";
import green1 from "../../images/rbk.png.webp";
import varlamov from "../../images/varlamov_youtube.png.webp";
import lyudi from "../../images/the_ludi_youtube.png.webp";
import lyudi2 from "../../images/ludi_pro_youtube.png.webp";
import lebadev from "../../images/lebedev_youtube.png.webp";
import "./Section6.scss";
import { useContext } from "react";
import { LanguageContext } from "../../context/contextCreation";
function Section6() {
  const {langIndex}=useContext(LanguageContext);
  const langData = [
    {
      title: "Get Direct Access to the Best PR Resources",
      descr: "Press",
      more: "YouTube Resources",
    },
    {
      title: " Получите прямой доступ к лучшим ресурсам для PR ",
      descr: "Пресса",
      more: "YouTube ресурсы",
    },
    {
      title: "获得访问最佳公关资源的直接通道",
      descr: "新闻媒体",
      more: "YouTube资源",
    },
  ];
  return (
    <div className="section6">
      <div className="container">
        <div className="top">
          <h1>{langData[langIndex].title}</h1>
          <h4>{langData[langIndex].descr}</h4>
        </div>
        <div className="bottom">
          <div className="innerTop">
            <img src={rakete} alt="" />
            <img src={green} alt="" />
            <img src={desentr} alt="" />
            <img src={fork} alt="" />
            <img src={vedomosti} alt="" />
            <img src={green1} alt="" />
          </div>
          <h1>{langData[langIndex].more}</h1>
          <div className="innerBottom">
            <img src={varlamov} alt="" />
            <img src={lyudi} alt="" />
            <img src={lyudi2} alt="" />
            <img src={lebadev} alt="" />
            <img src={green1} alt="" />
            <img src={vedomosti} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section6;
