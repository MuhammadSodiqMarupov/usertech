import React from "react";
import "./Section2.scss";
function Section2({ langIndex }) {
  const langData = [
    {
      title1: "How can we be helpful to you?",
      descr1:
        "Our clients have already paid off our services in the first month of work",
      title2:
        "We develop web and mobile applications, carry out effective marketing campaigns. How to understand all the variety of services and understand which set you need? Let's start with developing a concept!",
      descr2:
        "Clients who ordered our services but did not implement our recommendations",
      link1: "App Development",
      link2: "Cryptocurrencies and Blockchain",
      link3: "Web3 and DeFi platforms",
      link4: "Community Management",
      link5: "Influence Marketing",
      link6: "PR and Media",
    },
    {
        title1: "Чем мы можем быть Вам полезны?",
        descr1: "наших клиентов окупают услуги уже в первый месяц работы",
        title2:
          "Разрабатываем веб и мобильные приложения, проводим эффективные маркетинговые кампании.  Как разобраться во всем многообразии услуг  и понять какой именно набор нужен именно Вам? Давайте начнем с разработки концепции!",
        descr2:
          "клиенты, которые заказывали услуги  и не внедряли наши рекомендации",
        link1: "Разработка приложений",
        link2: "Криптовалюты и блокчейн",
        link3: "Web3 и DeFi платформы",
        link4: "Управление сообществами",
        link5: "Influence-маркетинг",
        link6: "PR и медиа",
      },
    {
      title1: "我们能为您做些什么？",
      descr1: "我们的客户在工作的第一个月就已经收回了我们的服务费用",
      title2:
        "我们开发 Web 和移动应用程序，进行有效的市场营销活动。如何理解所有各种服务，并确定您需要哪个套餐？让我们从开发概念开始！",
      descr2: "订购了我们的服务但未实施我们的建议的客户",
      link1: "应用程序开发",
      link2: "加密货币和区块链",
      link3: "Web3 和 DeFi 平台",
      link4: "社区管理",
      link5: "影响力营销",
      link6: "公关和媒体",
    },
  ];
  return (
    <div className="section2">
      <div className="container">
        <div className="top">
          <div className="left">
            <h2> {langData[langIndex].title1}</h2>
            <div className="other">
              <h1> 95% </h1>
              <h3>{langData[langIndex].descr1}</h3>
            </div>
          </div>
          <div className="right">
            <p>
              {" "}
              {langData[langIndex].title2}
            </p>
            <h1> 5% </h1>
            <h3>
              {" "}
              {langData[langIndex].descr2}
            </h3>
          </div>
        </div>
        <div className="bottom">
          <ul>
            <div className="ulOther">
              <li> {langData[langIndex].link1}</li>
              <li> {langData[langIndex].link2} </li>
            </div>
            <div className="ulOther">
              <li> {langData[langIndex].link3} </li>
              <li>{langData[langIndex].link4}</li>
            </div>
            <div className={"ulOther1"}>
              <li>{langData[langIndex].link5}</li>
              <li>{langData[langIndex].link6}</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Section2;
