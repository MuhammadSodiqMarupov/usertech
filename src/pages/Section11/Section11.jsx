import { useContext } from "react";
import "./Section11.scss";
import { LanguageContext } from "../../context/contextCreation";

function Section11() {
  const {langIndex}=useContext(LanguageContext);
  const langData = [
    {
      title: "We'll be honest with you",
      card1: {
        title: "We won't make a bad website",
        span: "Under the offer: for 7 days for 19900 rubles",
      },
      card2: {
        title: "We won't sell on your behalf",
        span: "We build a system, but calling back on inquiries is on your shoulders",
      },
      card3: {
        title: "We won't make template websites in 1 day",
        span: "We create an original product from scratch for you",
      },
      card4: {
        title: "If price matters more than results to you",
        span: "You'd better look for developers elsewhere",
      },
      card5: {
        title: "We create a product that brings you profit",
        span: "It should appeal not to you, but to visitors, converting them into inquiries and sales",
      },
      card6: {
        title: "We have no reason to increase the bill due to useless ratings",
        span: "We don't chase after yellow press awards, we work for the result",
      },
    },
    {
      title: "Будем честны с Вами",
      card1: {
        title: "Мы не сделаем плохой сайт",
        span: "Под оффером: на 7 дней за 19900 рублей",
      },
      card2: {
        title: "Мы не будем продавать вместо вас по заявкам",
        span: "Мы выстраиваем систему, а перезванивать по заявкам это уже на ваших плечах",
      },
      card3: {
        title: "Мы не д6елаем шаблонные сайты за 1 день",
        span: "Мы создаем с нуля авторский продукт под вас.",
      },
      card4: {
        title: "Если для вас важна цена,а не результат",
        span: "Вам лучше искать разработчиков в другом месте",
      },
      card5: {
        title: "Мы делаем продукт,который приносит Вам прибыль",
        span: "Он должен нравится не вам, а посетителям, конвертируя их в заявки и в продажи ",
      },
      card6: {
        title: "Нам не к чему повышать чек из-за бесполезных рейтингов",
        span: "Мы не гонимся за наградами желтой прессы ,а работаем на результат ",
      },
    },
    {
      title: "我们会诚实待你",
      card1: {
        title: "我们不会制作糟糕的网站",
        span: "优惠期：7天19900卢布",
      },
      card2: {
        title: "我们不会代表您销售",
        span: "我们构建一个系统，但回复询问是你的责任",
      },
      card3: {
        title: "我们不会在1天内制作模板网站",
        span: "我们为您从头开始创建原创产品",
      },
      card4: {
        title: "如果对你来说价格比结果更重要",
        span: "你最好在其他地方寻找开发人员",
      },
      card5: {
        title: "我们创造的产品能给您带来利润",
        span: "它应该吸引访客，而不是您，将他们转化为询问和销售",
      },
      card6: {
        title: "我们没有理由因无用的评级而提高账单",
        span: "我们不追逐黄色新闻奖项，我们为结果而工作",
      },
    },
  ];
  return (
    <div className="section11">
      <div className="container">
        <h1>{langData[langIndex].title} </h1>
        <div className="cardsDiv">
          <div className="card">
            <ul>
              <li>{langData[langIndex].card1.title} </li>
              <p>{langData[langIndex].card1.span}</p>
            </ul>
          </div>

          <div className="card">
            <ul>
              <li>{langData[langIndex].card2.title} </li>
              <p>{langData[langIndex].card2.span}</p>
            </ul>
          </div>
          <div className="card">
            <ul>
              <li>{langData[langIndex].card3.title} </li>
              <p>{langData[langIndex].card3.span}</p>
            </ul>
          </div>
          <div className="card">
            <ul>
              <li>{langData[langIndex].card4.title} </li>
              <p>{langData[langIndex].card4.span}</p>
            </ul>
          </div>

          <div className="card">
            <ul>
              <li>{langData[langIndex].card5.title} </li>
              <p>{langData[langIndex].card5.span}</p>
            </ul>
          </div>
          <div className="card">
            <ul>
              <li>{langData[langIndex].card6.title} </li>
              <p>{langData[langIndex].card6.span}</p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section11;
