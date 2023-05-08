import "./Section7.scss";
import robo from "../../images/animationRobo.gif";
function Section7({ langIndex }) {
  const titles = [
    "Этапы развития Вашего проекта",
    "Stages of Your Project Development",
    "您的项目发展阶段",
  ];
  const stage1 = [
    {
      title: "Stage 1",
      text: "We study your technical specifications or help you compose them. We analyze the group in the middle segment. We determine the target audience of the site.",
    },
    {
      title: "Этап 1",
      text: "Изучаем ваше ТЗ или помогаем вас его составить. Анализируем группу в среднем сегменте. Определяем целевую аудиторию сайта.",
    },
    {
      title: "阶段 1",
      text: "我们研究您的技术规格或帮助您组成它们。我们分析中间段的群体。我们确定网站的目标受众。",
    },
  ];
  const stage2 = [
    {
      title: "Stage 2",
      text: "Development of the structure and design of the site in online mode. Drawing by designers of adaptive versions of the site. Coordination of the design layout with the customer.",
    },
    {
      title: "Этап 2",
      text: "Разработка структуры и дизайна сайта в онлайн-режиме. Отрисовка дизайнерами адаптивных версий сайта. Согласование дизайн-макета с заказчиком.",
    },
    {
      title: "阶段 2",
      text: "在线模式下开发网站的结构和设计。设计师绘制自适应版本的网站。与客户协调设计布局。",
    },
  ];
  const stage3 = [
    {
      title: "Stage 3",
      text: "Layout of design layouts taking into account SEO. Adaptation of layout for all platforms. Testing layout. Coordination with the customer.",
    },
    {
      title: "Этап 3",
      text: "Верстка макетов дизайна с учетом SEO. Адаптация верстки под все платформы. Тестирование верстки. Согласование с заказчиком.",
    },
    {
      title: "阶段 3",
      text: "考虑 SEO 的设计布局。适应所有平台的布局。测试布局。与客户协调。",
    },
  ];
  const stage4 = [
    {
      title: "Stage 4",
      text: "Stretching the layout onto the CMS system. Programming the site and creating functionality. Setting up and testing site functionality.",
    },
    {
      title: "Этап 4",
      text: "Натяжка вёрстки на систему CMS. Программирование сайта и создание функционала. настройка и тестирование функционала сайта.",
    },
    {
      title: "阶段 4",
      text: "将布局拉伸到 CMS 系统上。编写网站并创建功能。设置和测试网站功能。",
    },
  ];
  const stage5 = [
    {
      title: "Stage 5",
      text: "Filling the site with content. Basic SEO optimization of the site. Placing the site on hosting.",
    },
    {
      title: "Этап 5",
      text: "Наполнение сайта контентом. Базовая SEO оптимизация сайта. Размещение сайта на Хостинг.",
    },
    {
        title: "阶段 5",
        text: "使用内容填充网站。基本 SEO 优化网站。将网站放置在托管上。"
      }
  ];
  const stage6 = [
    {
      title: "Stage 6",
      text: "Site support. Launch and maintenance of advertising to attract customers.",
    },
    {
      title: "Этап 6",
      text: "Поддержка сайта. Запуск и сопровждение рекламы для привлечения клиентов.",
    },
    {
        title: "阶段 6",
        text: "网站支持。启动和维护广告以吸引客户。"
      }
  ];
  return (
    <div className="section7">
      <div className="container">
        <h1>{titles[langIndex]}</h1>
        <div className="bottom">
          <div className="left">
            <div className="card">
              <h1>{stage1[langIndex].title}</h1>
              <p>{stage1[langIndex].text}</p>
            </div>

            <div className="card">
              <h1>{stage2[langIndex].title}</h1>
              <p>{stage2[langIndex].text}</p>
            </div>

            <div className="card">
              <h1>{stage3[langIndex].title}</h1>
              <p>{stage3[langIndex].text}</p>
            </div>

            <div className="card">
              <h1>{stage4[langIndex].title}</h1>
              <p>{stage4[langIndex].text}</p>
            </div>

            <div className="card">
              <h1>{stage5[langIndex].title}</h1>
              <p>{stage5[langIndex].text}</p>
            </div>

            <div className="card">
              <h1>{stage6[langIndex].title}</h1>
              <p>{stage6[langIndex].text}</p>
            </div>
          </div>
          <div className="right">
            <img src={robo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section7;
