import React, { useContext } from "react";
import "./Section4.scss";
import robo from "../../images/animationRobo.gif";
import { LanguageContext } from "../../context/contextCreation";
function Section4() {
  const {langIndex} = useContext(LanguageContext);
  const langData = [
    {
      title1: "Created an IT product, and what's next?",
      link1: "Never had a website",
      link2:
        "Didn't know what contextual advertising, SEO promotion, and how it could completely load the sales department",
      link3: "Didn't know that customers could be obtained from the internet",
      link4:
        "Didn't know such terms as CTR, CPC, CPA, ROI, DRR and what is important to know about internet promotion",
      link5:
        "Launched advertising in Yandex and Google, but it didn't work and resulted in a loss",
      link6:
        "Spent 50,000 rubles on a website that took 6 months to make and ultimately didn't pay off",
      link7:
        "Changed 3-5 contractors in a row for contextual advertising and still did not achieve the desired results",
      link8: "Advertised and did not grow in profits",
      link9: "Competitors' website or advertising worked better",
      title2: "Never attracted customers from the internet",
      title3:
        "Had a website and advertising on the internet, but did not get the desired result",
    },
    {
      title1: " Создали IT продукт , а что дальше ? ",
      link1: "Никогда не было сайта            ",
      link2:
        "Не знали, что такое контекстная реклама,SEO-продвижение, и как с этого можно полностью загрузить отдел продаж",
      link3: "Не знали, что из интернета можно получать клиентов",
      link4:
        "Не знали таких терминов как СTR, СРС, СРА, RОМI, ДРР и что важно знать про интернет продвижение",
      link5:
        "Запустили рекламу в Яндексе и Гугле, но она не дала результат и сработала в минус",
      link6:
        "Потратили 50 тыс. руб. на сайт который делался 6 месяцев и в итоге не окупился",
      link7:
        "Сменили 3-5 подрядчиков по контекстной рекламе и так не добились нужных показателей",
      link8: "Рекламировались и не росли в прибыли",
      link9: "У конкурентов сайт или реклама работала лучше",
      title2: "Никогда не привлекали клиентов из интернета",
      title3:
        "Был сайт и реклама в интернете, но не получили нужого результата",
    },
    {
        "title1": "创建了一个IT产品，接下来怎么做？",
        "link1": "从未拥有过网站",
        "link2": "不知道什么是上下文广告、SEO推广，以及如何完全负载销售部门",
        "link3": "不知道客户可以从互联网上获取",
        "link4": "不知道CTR、CPC、CPA、ROI、DRR等术语，以及关于互联网推广需要知道的重要内容",
        "link5": "在Yandex和Google上发布了广告，但它没有奏效，导致亏损",
        "link6": "花费50,000卢布制作了一个需要6个月时间的网站，最终没有回本",
        "link7": "连续更换了3-5个上下文广告承包商，仍未达到预期结果",
        "link8": "广告投放却没有利润增长",
        "link9": "竞争对手的网站或广告效果更好",
        "title2": "从未吸引过来自互联网的客户",
        "title3": "拥有网站和互联网广告，但未获得所需的结果"
     }
  ];
  return (
    <div className="section4">
      <div className="container">
        <div className="left">
          <h1>{langData[langIndex].title1}</h1>
          <h2> {langData[langIndex].link1}</h2>
          <img src={robo} alt="" />
        </div>
        <div className="right">
          <div className="first">
            <h3> {langData[langIndex].title2}</h3>
            <ul>
              <li>{langData[langIndex].link2}</li>
              <li>
                {langData[langIndex].link3}
              </li>
              <li>{langData[langIndex].link4}</li>
              <li>
              {langData[langIndex].link5}
              </li>
            </ul>
          </div>
          <div className="first">
            <h3>
              {" "}
              {langData[langIndex].title3}
            </h3>
            <ul>
              <li>
              {langData[langIndex].link4}
              </li>
              <li>
                {" "}
                {langData[langIndex].link5}
              </li>
              <li>
                {" "}
                {langData[langIndex].link6}
              </li>
              <li>{langData[langIndex].link7}</li>
              <li> {langData[langIndex].link8}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
