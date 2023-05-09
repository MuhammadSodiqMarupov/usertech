import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./pages/Header/Header";
import Section1 from "./pages/Section1/Section1";
import Section2 from "./pages/Section2/Section2";
import swiper1 from "./images/swiper_1.jpeg";
import Section3 from "./pages/Section3/Section3";
import Section4 from "./pages/Section4/Section4";
import Section5 from "./pages/Section5/Section5";
import Jobs from "./pages/Jobs/Jobs";
import Aos from "aos";
import Blog from "./pages/Blog/Blog";
import Algorithm from "./pages/Algorithm/Algorithm";
import Sites from "./pages/Sites/Sites";
import Ai from "./pages/AI/Ai";
import Promotion from "./pages/Promotion/Promotion";
import Section6 from "./pages/Section6/Section6";
import Section7 from "./pages/Section7/Section7";
import Section8 from "./pages/Section8/Section8";
import Section9 from "./pages/Section9/Section9";
import Section10 from "./pages/Section10/Section10";
import Applications from "./pages/Applications/Applications";
import Fintech from "./pages/Fintech/Fintech";
import Footer from "./pages/Footer/Footer";
import Carousel from "nuka-carousel";
import Section11 from "./pages/Section11/Section11";
import Section12 from "./pages/Section12/Section12";
import More from "./pages/More/More";
function App() {
  const languages = ["En", "Ru", "Chine"];
  const [slides, setSlides] = useState([]);
  const card1 = [
    {
      title: "Fast Business Launch",
      br: "Landing page",
      price: "from 25000 P",
      links: [
        "High Conversion Rate",
        "SEO Optimization",
        "Ease of Use",
        "Easy Testing",
      ],
    },
    {
      title: "Быстрый Запуск Бизнеса",
      br: "Landing page",
      price: "от 25000 P",
      links: [
        "Высокая конверсия",
        "Оптимизасия под SEO",
        "Удобства Использования",
        "Легкость тесторования",
      ],
    },
    {
      title: "快速启动业务",
      br: "落地页",
      price: "从 25000 P 开始",
      links: ["高转化率", "SEO 优化", "易用性", "易于测试"],
    },
  ];

  const card2 = [
    {
      title: "Свой в Яндексе",
      br: "настройка Яндект Директ",
      price: "от 25000 P",
      links: [
        "Точная настройка таргета",
        "Большой охват аудитори",
        "Отслеживание",
      ],
    },
    {
      title: "Your own in Yandex",
      br: "Yandex.Direct setup",
      price: "from 25000 P",
      links: ["Precise targeting", "Wide audience coverage", "Tracking"],
    },
    {
      title: "在 Yandex 上拥有自己的",
      br: "Yandex.Direct 设置",
      price: "从 25000 P 开始",
      links: ["精准定位", "广泛的受众覆盖率", "跟踪"],
    },
  ];

  const card3 = [
    {
      title: "От идеи до первой прибыли",
      br: "комплексное продвижение",
      price: "от 30 000 P",
      links: [
        "Болшой охват аудитори",
        "Целевая Аудитория",
        "Эффектиность",
        "Удобная коммуникация",
      ],
    },
    {
      title: "From idea to first profit",
      br: "Comprehensive promotion",
      price: "from 30,000 P",
      links: [
        "Large audience coverage",
        "Target audience",
        "Efficiency",
        "Convenient communication",
      ],
    },
    {
      title: "从创意到第一笔利润",
      br: "全面宣传",
      price: "从 30,000 P 开始",
      links: ["广泛的受众覆盖率", "目标受众", "效率", "方便的沟通"],
    },
  ];
  const card4 = [
    {
      title: "Develop Your Own Yandex Taxi",
      br: "Mobile Applications",
      price: "from 15,000 RUB",
      links: [
        "Large Audience Coverage",
        "Convenience for Customers",
        "Quick Access",
        "Functionality",
      ],
    },
    {
      title: "Разработай свое Яндект Такси",
      br: "Мобильные приложения",
      price: "от 15 000 P",
      links: [
        "Болшой охват аудитори",
        "Удобства для клиентов",
        "Быстрый доступ",
        "Функциональность",
      ],
    },
    {
      title: "开发您自己的Yandex出租车",
      br: "移动应用程序",
      price: "价格 15,000卢布起",
      links: ["广泛覆盖的受众", "为客户提供方便", "快速访问", "功能性"],
    },
  ];
  const card5 = [
    {
      title: "Your own online store -",
      br: "internet shops",
      price: "from 70,000 rubles",
      links: [
        "Wide coverage of the audience",
        "Convenience for customers",
        "Efficient logistics",
        "Real-time operation",
      ],
    },
    {
      title: "Своя электронная лавка -",
      br: " интернет магазины",
      price: "от 70 000 P",
      links: [
        "Большой охват аудитории",
        "Удобство для клиентов",
        "Эффективная логистика",
        "Работа в режиме реального времени",
      ],
    },
    {
      title: "您自己的在线商店 -",
      br: "网络商店",
      price: "从 70,000 卢布起",
      links: ["广泛覆盖受众", "方便顾客", "高效物流", "实时操作"],
    },
  ];
  const [langIndex, setLangIndex] = useState(
    JSON.parse(localStorage.getItem("LANG")) ?? 1
  );

  useEffect(() => {
    Aos.init({ once: true });
  }, []);
  return (
    <div className="App">
      <Header
        languages={languages}
        setLangIndex={setLangIndex}
        langIndex={langIndex}
      />
      <div className="flying_items">
        <div className="spinner-wrap">
          <img
            src="
                    https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/1024px-Telegram_logo.svg.png?20220101141644
                    "
            alt="Telegram Image"
          />

          <div className="spinner-item"></div>
          <div className="spinner-item spinner-item--2"></div>
          <div className="spinner-item spinner-item--3"></div>
        </div>
        <div className="spinner-wrap">
          <img
            src="
                    https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg
                    "
            alt="Whatsapp Image"
          />

          <div
            className="spinner-item"
            style={{ borderColor: "rgba(25,199,13,255)" }}
          ></div>
          <div
            className="spinner-item spinner-item--2"
            style={{ borderColor: "rgba(25,199,13,255)" }}
          ></div>
          <div
            className="spinner-item spinner-item--3"
            style={{ borderColor: "rgba(25,199,13,255)" }}
          ></div>
        </div>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Section1 langIndex={langIndex} />
              <Section2 langIndex={langIndex} />
              <Section3 langIndex={langIndex} />
              <div className="swiper_container">
                <Carousel
                  renderBottomCenterControls={false}
                  renderCenterLeftControls={({ previousSlide }) => (
                    <button
                      onClick={previousSlide}
                      className="btn-swiper btn-1"
                    >
                      <i className="ri-arrow-left-line"></i>
                    </button>
                  )}
                  renderCenterRightControls={({ nextSlide }) => (
                    <button onClick={nextSlide} className="btn-swiper btn-2">
                      <i className="ri-arrow-right-line"></i>
                    </button>
                  )}
                >
                  <div className="swiper_item i-1">
                    <div className="title">
                      {card1[langIndex].title}
                      <br />
                      <strong> {card1[langIndex].br}</strong>
                    </div>
                    <div className="price">{card1[langIndex].price}</div>
                    <ul className="links">
                      {card1[langIndex].links.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="swiper_item i-2">
                    <div className="title">
                      {card2[langIndex].title}
                      <br />
                      <strong> {card2[langIndex].br}</strong>
                    </div>
                    <div className="price">{card2[langIndex].price}</div>
                    <ul className="links">
                      {card2[langIndex].links.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="swiper_item i-1">
                    <div className="title">
                      {card3[langIndex].title}
                      <br />
                      <strong> {card3[langIndex].br}</strong>
                    </div>
                    <div className="price">{card3[langIndex].price}</div>
                    <ul className="links">
                      {card3[langIndex].links.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="swiper_item i-1">
                    <div className="title">
                      {card4[langIndex].title}
                      <br />
                      <strong> {card4[langIndex].br}</strong>
                    </div>
                    <div className="price">{card4[langIndex].price}</div>
                    <ul className="links">
                      {card4[langIndex].links.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="swiper_item i-1">
                    <div className="title">
                      {card4[langIndex].title}
                      <br />
                      <strong> {card4[langIndex].br}</strong>
                    </div>
                    <div className="price">{card4[langIndex].price}</div>
                    <ul className="links">
                      {card4[langIndex].links.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </Carousel>
              </div>
              <Section4 langIndex={langIndex} />
              <Section5 langIndex={langIndex} />
              <Section6 langIndex={langIndex} />
              <Section7 langIndex={langIndex} />
              <Section8 langIndex={langIndex} />
              <Section9 langIndex={langIndex} />
              <Section10 langIndex={langIndex} />
              <Section11 langIndex={langIndex} />
              <Section12 langIndex={langIndex} />
            </>
          }
        />
        <Route path="/jobs" element={<Jobs langIndex={langIndex} />} />
        <Route
          path="/algorithm"
          element={<Algorithm langIndex={langIndex} />}
        />
        <Route path="/more" element={<More />} />
        <Route path="/sites" element={<Sites langIndex={langIndex} />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/AI" element={<Ai langIndex={langIndex} />} />
        <Route
          path="/promotion"
          element={<Promotion langIndex={langIndex} />}
        />
        <Route
          path="/applications"
          element={<Applications langIndex={langIndex} />}
        />
        <Route path="/Fintech" element={<Fintech langIndex={langIndex} />} />
      </Routes>
      <Footer langIndex={langIndex} />
    </div>
  );
}
export default App;
