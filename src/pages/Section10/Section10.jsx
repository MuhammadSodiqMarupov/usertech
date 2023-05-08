import "./Section10.scss";
import table from "../../images/table 1.svg";
function Section10({ langIndex }) {
  const langData = [
    {
      title: "Our Studio's Working Principles",
      descr: "We provide a customized",
      span: "solution",
      full_descr: "for each client.",
      info: "We will talk with you and suggest a solution that will provide the maximum result in the near future. Not every business needs SEO or a multipage website or a web application.",
    },
    {
      title: "Принципы работы нашей студии ",
      descr: "  Подбираем",
      span: "решение",
      input:"ФИО",
      inpu2:"Телефон",
      full_descr: "под клиента.",
      info: "   Мы пообщаемся с вами и предложим решение, которое даст максимальный результат  в ближайшее время. Не каждому бизнесу подходит SEO или нужен многостраничный сайт или web приложение.",
    },
    {
      title: "我们工作室的工作原则",
      descr: "我们为每位客户提供定制化的",
      span: "解决方案",
      full_descr: "。",
      info: "我们将与您交流，并提供能够在近期内提供最大成果的解决方案。并不是每个企业都需要SEO或多页网站或Web应用程序。",
    },
  ];
  return (
    <div className="section10">
      <div className="container">
        <div className="main">
          <h1>{langData[langIndex].title}</h1>
          <div className="d">
            <h3>
            {langData[langIndex].descr}
              {" "}
              <span>{langData[langIndex].span}</span>{" "}
              {langData[langIndex].full_descr}
            </h3>
            <p>{langData[langIndex].info}</p>
          </div>
          <img src={table} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Section10;
