import "./Section1.scss";
import robo from "../../images/animationRobo.gif";
function Section1({ langIndex }) {
  const langData = [
    {
      title: "Website for your turnkey business",
      descr:
        "WE ARE A FULL CYCLE AGENCY for IT products. We create simple solutions for complex tasks of your project. We will develop an IT product, set up advertising and build a stable system for attracting customers from this",
      button: " Learn more ",
      card1: {
        title: "1k+",
        descr: "Successful projects completed over all time",
      },
      card2: {
        title: "Over 13 years",
        descr: "Experience in developing services of any complexity",
      },
      card3: {
        title: "Over 200",
        descr: "Regular clients",
      },
      card4: {
        title: "100+",
        descr: "Successful cases of website promotion",
      },
    },
    {
      title: "Сайт для вашего бизнеса под ключ",
      descr:
        "МЫ АГЕНСТВО ПОЛНОГО ЦИКЛА для IT продуктов. Создаем простые решения для сложных задач вашего проекта. Разработаем IT продукт, настроим рекламу и построем из этого стабильную систему по привлечению клиентов",
      button: " Узнать подробнее ",
      card1: {
        title: "1к+",
        descr: "Успешных проектов успели реализовать за все время        ",
      },
      card2: {
        title: "более 13 лет",
        descr: "опыта разработки сервисов любой сложности",
      },
      card3: {
        title: "более 200",
        descr: "постоянных клиентов",
      },
      card4: {
        title: "100+",
        descr: "Успешных кейсов продвижений сайтов",
      },
    },
    {
      title: "交钥匙业务的网站",
      descr:
        "我们是 IT 产品的全周期代理。 我们为您项目的复杂任务创建简单的解决方案。 我们将开发一个IT产品，设置广告并建立一个稳定的系统来吸引客户。",
      button: "了解更多 ",
      card1: {
        title: "1k+",
        descr: "所有时间内成功完成的项目",
      },
      card2: {
        title: "超过13年",
        descr: "开发任何复杂服务的经验",
      },
      card3: {
        title: "超过200",
        descr: "常规客户",
      },
      card4: {
        title: "100+",
        descr: "成功推广网站的案例",
      },
    },
  ];
  return (
  <div className="section1">
   <div className="container">
     <div className="top">
       <div className="left">
         <h1> {langData[langIndex]?.title}</h1>
         <p> {langData[langIndex]?.descr}</p>
         <button> {langData[langIndex]?.button} </button>
       </div>
       <div className="right">
         <img src={robo} alt="" />
       </div>
     </div>
     <div className="bottom">
       <div className="card1">
         <h1>{langData[langIndex].card1?.title}</h1>
         <p> {langData[langIndex].card1?.descr}</p>
       </div>
       <div className="card1">
         <h1> {langData[langIndex].card2?.title} </h1>
         <p> {langData[langIndex].card2?.descr} </p>
       </div>

       <div className="card1">
       <h1> {langData[langIndex].card3.title} </h1>
         <p> {langData[langIndex].card3.descr} </p>
       </div>

       <div className="card4">
       <h1> {langData[langIndex].card4.title} </h1>
         <p> {langData[langIndex].card4.descr} </p>
       </div>
     </div>
   </div>
 </div>
  );
}

export default Section1;
