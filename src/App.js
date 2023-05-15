import { Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Aos from "aos";
import { LanguageContext } from "./context/contextCreation";
import Studio from "./pages/Studio/Studio";
const Jobs = React.lazy(() => import("./pages/Jobs/Jobs"));
const Section2 = React.lazy(() => import("./pages/Section2/Section2"));
const Section4 = React.lazy(() => import("./pages/Section4/Section4"));
const Section3 = React.lazy(() => import("./pages/Section3/Section3"));
const Section5 = React.lazy(() => import("./pages/Section5/Section5"));
const Blog = React.lazy(() => import("./pages/Blog/Blog"));
const Algorithm = React.lazy(() => import("./pages/Algorithm/Algorithm"));
const Sites = React.lazy(() => import("./pages/Sites/Sites"));
const Ai = React.lazy(() => import("./pages/AI/Ai"));
const Promotion = React.lazy(() => import("./pages/Promotion/Promotion"));
const Section6 = React.lazy(() => import("./pages/Section6/Section6"));
const Section7 = React.lazy(() => import("./pages/Section7/Section7"));
const Section8 = React.lazy(() => import("./pages/Section8/Section8"));
const Section9 = React.lazy(() => import("./pages/Section9/Section9"));
const Section10 = React.lazy(() => import("./pages/Section10/Section10"));
const Applications = React.lazy(() =>
  import("./pages/Applications/Applications")
);
const Fintech = React.lazy(() => import("./pages/Fintech/Fintech"));
const Footer = React.lazy(() => import("./pages/Footer/Footer"));
const Section12 = React.lazy(() => import("./pages/Section12/Section12"));
const Section11 = React.lazy(() => import("./pages/Section11/Section11"));
const More = React.lazy(() => import("./pages/More/More"));
const Contact = React.lazy(() => import("./pages/Contact/Contact"));
const SiteMore = React.lazy(() => import("./pages/SiteMore/SiteMore"));
const AbsoluteLinks = React.lazy(() =>
  import("./pages/AbosoluteLinks/AbsoluteLinks")
);
const Swiper = React.lazy(() => import("./pages/Swiper/Swiper"));
const Header = React.lazy(() => import("./pages/Header/Header"));
const Section1 = React.lazy(() => import("./pages/Section1/Section1"));
function App() {
  const languages = ["En", "Ru", "Chine"];
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
  const [langIndex, setLangIndex] = useState(1);

  useEffect(() => {
    Aos.init({ once: true });
    setLangIndex(JSON.parse(localStorage.getItem("LANG")) ?? 1);
  }, []);
  return (
    <div className="App">
      <LanguageContext.Provider value={{ langIndex, setLangIndex }}>
        <Header
          languages={languages}
          setLangIndex={setLangIndex}
        />
        <AbsoluteLinks />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Section1  />
                <Section2  />
                <Section3  />
                <Swiper
                
                  card1={card1}
                  card2={card2}
                  card3={card3}
                  card4={card4}
                />
                <Section4  />
                <Section5  />
                <Section6  />
                <Section7  />
                <Section8  />
                <Section9  />
                <Section10 />
                <Section11 />
                <Section12 />
              </>
            }
          />
          <Route path="/jobs" element={<Jobs/>} />
          <Route
            path="/algorithm"
            element={<Algorithm  />}
          />
          <Route path="/more" element={<More />} />
          <Route path="/sites" element={<Sites  />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/AI" element={<Ai/>} />
          <Route
            path="/promotion"
            element={<Promotion />}
        />
          <Route
            path="/applications"
            element={<Applications  />}
          />
          <Route path="/Fintech" element={<Fintech />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sitemore" element={<SiteMore />} />
          <Route path="/studio" element={<Studio />}/>
        </Routes>
        <Footer/>
      </LanguageContext.Provider>
    </div>
  );
}
export default React.memo(App, () => true);
