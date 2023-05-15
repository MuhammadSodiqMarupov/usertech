import React, { useContext } from "react";
import "./Section3.scss";
import { useNavigate } from "react-router-dom";
import { LanguageContext } from "../../context/contextCreation";

function Section3() {
  const {langIndex} = useContext(LanguageContext);
  const navigate = useNavigate();
  const card1 = [
    {
      title: "Complex web services",
      descr: "We have experience in creating complex web projects:",
      links: [
        "Online educational schools",
        "Online auctions (goods, cars)",
        "Marketplaces and financial platform",
        "B2B platform",
        "Any non-standard solutions",
      ],
      button: " Learn more  ",
    },
    {
      title: "Сложные веб-сервисы",
      descr: "Владеем опытом создания сложных веб-проектов:",
      links: [
        "Образовательные онлайн школы",
        "Онлайн аукционы (товары, автомобили)",
        "Маркетплэйсы и финансовая платформа",
        "Платформа B2B",
        "Любые нестандартные решения",
      ],
      button: " Подробнее  ",
    },
    {
      title: "复杂的网络服务",
      descr: "我们拥有创建复杂网络项目的经验：",
      links: [
        "在线教育学校",
        "在线拍卖（商品，汽车）",
        "市场和金融平台",
        "B2B平台",
        "任何非标准解决方案",
      ],
      button: " 了解更多  ",
    },
  ];
  const card2 = [
    {
      title: "Online Stores",
      descr: "Creating a turnkey online store:",
      links: [
        "Selling structure",
        "Easy management of products and orders",
        "Any types of integrations",
        "Individual functionality",
        "Individual functionality",
      ],
      button: "Learn more ",
    },

    {
      title: "Интернет-магазины",
      descr: "Создание Интернет-Магазина под ключ:",
      links: [
        "Продающая структура",
        "Легкое управление товарами и заказами",
        "Любые виды интеграций",
        "Индивидуальный функционал",
        "Индивидуальный функционал",
      ],
      button: " Подробнее  ",
    },
    {
      title: "网上商店",
      descr: "创建一站式在线商店：",
      links: [
        "销售结构",
        "轻松管理产品和订单",
        "任何类型的集成",
        "个性化功能",
        "个性化功能",
      ],
      button: "了解更多 ",
    },
  ];
  const card3 = [
    {
      title: "Corporate Website",
      descr: "Creating a corporate website for your company:",
      links: [
        "We will create a memorable website (not like everyone else's)",
        "Forming the face of the company on the Internet, for any business sector",
        "Increasing the company's online sales",
        "Creating any functionality",
      ],
      button: " Learn more  ",
    },
    {
      title: "Корпоративный сайт",
      descr: "Создание корпоративного сайта для компании:",
      links: [
        "Создадим запоминающийся сайт (не как у всех)",
        "Формируем лицо компании в интернете, для любой сферы бизнеса",
        "Повысим онлайн продажи компании",
        "Создадим любой функционал",
      ],
      button: " Подробнее  ",
    },
    {
      title: "企业网站",
      descr: "为您的公司创建企业网站：",
      links: [
        "我们将创建一款令人难忘的网站（不像其他人的）",
        "在互联网上塑造公司形象，适用于任何业务领域",
        "提高公司的在线销售业绩",
        "创建任何功能",
      ],
      button: " 了解更多  ",
    },
  ];
  const card4 = [
    {
      title: "Turnkey Landing Page",
      descr: "Creating a Landing Page or a business card website:",
      links: [
        "for starting companies or single services;",
        "with a selling design and focus on attracting the target audience;",
        "aimed at a precise and specific audience;",
        "technical support after launch.",
        "Website domain as a gift. Development: 7-14 days",
      ],
      button: "Learn more ",
    },
    {
      title: "Лендинг под ключ",
      descr: "Создание Лендинга, сайта визитки:",
      links: [
        "для начинающих компаний или одних услуг;",
        "с продающим дизайном и ставкой на выбор привлечение;",
        "ориентация на точную и конкретную аудиторию;",
        "техническая поддержка после запуска.",
        "Домен сайта в подарок. Разработка: от 7-14 дней",
      ],
      button: " Подробнее ",
    },
    {
      title: "关键落地页",
      descr: "创建落地页或名片网站：",
      links: [
        "面向创业公司或单项服务；",
        "拥有销售设计并专注于吸引目标受众；",
        "面向精确和特定受众；",
        "上线后提供技术支持。",
        "网站域名作为礼物。开发时间 7-14天",
      ],
      button: "了解更多 ",
    },
  ];
  const card5 = [
    {
      title: "Mobile Apps",
      descr: "Mobile app development:",
      links: [
        "iOS/Android apps.",
        "Publishing to AppStore/PlayMarket.",
        "Business applications.",
        "Analytics + specification development.",
        "Turnkey development using modern technologies.",
        "UX/UI design. 24/7 project support.",
      ],
      button: " Learn more  ",
    },
    {
      title: "Приложения",
      descr: "Разработка мобильных приложений:",
      links: [
        "iOS/Android приложения.",
        "Публикация в AppStore/PlayMarket.",
        "Приложения для бизнеса.",
        "Проведем аналитику + составим ТЗ.",
        "Разработка под ключ на современных технологиях.",
        "UX/UI дизайн. Поддержка проекта 24/7",
      ],
      button: " Подробнее  ",
    },
    {
      title: "移动应用程序",
      descr: "移动应用程序开发：",
      links: [
        "iOS/Android应用程序。",
        "发布到AppStore/PlayMarket。",
        "面向企业的应用程序。",
        "分析+规范开发。",
        "使用现代技术的一站式开发。",
        "UX/UI设计。 24/7项目支持。",
      ],
      button: " 了解更多 ",
    },
  ];
  const card6 = [
    {
      title: "CMS",
      descr: "",
      links: [
        "Creating websites on popular CMS platforms",
        "Development of custom CMS platform",
        "Consultation and selection of CMS for your project",
        "Ease of use",
        "Security",
        "Setup and testing",
      ],
      button: "Learn More ",
    },
    {
      title: "CMS",
      descr: "",
      links: [
        "Создание сайтов на популярных движках",
        "Написание собственной платформы CMS",
        "Консультация и подбор CMS под ваш проект",
        "Удобство в использовании",
        "Безопасность",
        "Настройка и тестировании",
      ],
      button: " Подробнее ",
    },
    {
      title: "CMS",
      descr: "",
      links: [
        "使用流行的CMS平台创建网站",
        "开发定制CMS平台",
        "为您的项目提供咨询和CMS选择",
        "易于使用",
        "安全性",
        "设置和测试",
      ],
      button: "了解更多 ",
    },
  ];
  return (
    <div className="section3">
      <div className="container">
        <div className="main">
          <div className="card" onClick={()=>navigate("/more")}>
            <h1>{card1[langIndex].title}</h1>
            <div className="between">
              <p>{card1[langIndex].descr}</p>
              <ul>
                {card1[langIndex].links.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="bottom">
              <span>
                {card1[langIndex].button} <i className="ri-arrow-right-line"></i>
              </span>
            </div>
          </div>

          <div className="card" onClick={()=>navigate("/more")}>
            <h1>{card2[langIndex].title}</h1>
            <div className="between">
              <p>{card2[langIndex].descr}</p>
              <ul>
                {card2[langIndex].links.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="bottom">
              <span>
                {card2[langIndex].button} <i className="ri-arrow-right-line"></i>
              </span>
            </div>
          </div>

          <div className="card" onClick={()=>navigate("/more")}>
            <h1>{card3[langIndex].title}</h1>
            <div className="between">
              <p>{card3[langIndex].descr}</p>
              <ul>
                {card3[langIndex].links.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="bottom">
              <span>
                {card3[langIndex].button} <i className="ri-arrow-right-line"></i>
              </span>
            </div>
          </div>

          <div className="card" onClick={()=>navigate("/more")}>
            <h1>{card4[langIndex].title}</h1>
            <div className="between">
              <p>{card4[langIndex].descr}</p>
              <ul>
                {card4[langIndex].links.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="bottom">
              <span>
                {card4[langIndex].button} <i className="ri-arrow-right-line"></i>
              </span>
            </div>
          </div>

          <div className="card" onClick={()=>navigate("/more")}>
            <h1>{card5[langIndex].title}</h1>
            <div className="between">
              <p>{card5[langIndex].descr}</p>
              <ul>
                {card5[langIndex].links.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="bottom">
              <span>
                {card5[langIndex].button} <i className="ri-arrow-right-line"></i>
              </span>
            </div>
          </div>
          <div className="card" onClick={()=>navigate("/more")}>
            <h1>{card6[langIndex].title}</h1>
            <div className="between">
              <p>{card6[langIndex].descr}</p>
              <ul>
                {card6[langIndex].links.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="bottom">
              <span>
                {card6[langIndex].button} <i className="ri-arrow-right-line"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
