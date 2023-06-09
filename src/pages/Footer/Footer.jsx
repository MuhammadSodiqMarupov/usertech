import "./Footer.scss";
import logo from "../../images/white_logo.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../../context/contextCreation";
const Footer = () => {
  const [navbarItems, setNavbarItems] = useState([]);
  const {langIndex}=useContext(LanguageContext);
  const langData = [
    {
      dropdowns: [
        {
          title: "Home",
          link: "/",
          body: [],
          dropdown: false,
        },
        {
          title: "Studio",
          link:"/studio",
          body: [
            {
              title: "Work ALgorithm",
              page: "/algorithm",
            },
          ],
          dropdown: false,
        },
        {
          title: "Services",
          link:'/more',
          body: [
            {
              title: "Sites",
              page: "/sites",
            },
            {
              title: "Applications",
              page: "/applications",
            },
            {
              title: "Promotion",
              page: "/promotion",
            },
            {
              title: "Artifical Inteligence",
              page: "/AI",
            },
            {
              title: "Fintech",
              page: "/Fintech",
            },
          ],
          dropdown: false,
        },
        {
          title: "Blog",
          link: "/blog",
          body: [],
          dropdown: false,
        },
        {
          title: "Vacancies",
          link: "/jobs",
          body: [],
          dropdown: false,
        },
      ],
      button: "Contacts",
    },
    {
      dropdowns: [
        {
          title: "Главная",
          link: "/",
          body: [],
          dropdown: false,
        },
        {
          title: "Студия",
          link: "/studio",
          body: [
            {
              title: "Алгоритм работы",
              page: "/algorithm",
            },
          ],
          dropdown: false,
        },
        {
          title: "Услуги",
          link: "/more",
          body: [
            {
              title: "Сайты",
              page: "/sites",
            },
            {
              title: "Приложения",
              page: "/applications",
            },
            {
              title: "Продвижение",
              page: "/promotion",
            },
            {
              title: "Искусственный интеллект",
              page: "/AI",
            },
            {
              title: "Финтеч",
              page: "/Fintech",
            },
          ],
          dropdown: false,
        },
        {
          title: "Блог",
          link: "/blog",
          body: [],
          dropdown: false,
        },
        {
          title: "Вакагсии",
          link: "/jobs",
          body: [],
          dropdown: false,
        },
      ],
      button: "Контакты",
    },

    {
      dropdowns: [
        {
          title: "家",
          link: "/",
          body: [],
          dropdown: false,
        },
        {
          title: "工作室",
          link:"/studio",
          body: [
            {
              title: "工作算法",
              page: "/algorithm",
            },
          ],
          dropdown: false,
        },
        {
          title: "服务",
          link: "/more",
          body: [
            {
              title: "站点",
              page: "/sites",
            },
            {
              title: "应用",
              page: "/applications",
            },
            {
              title: "晋升",
              page: "/promotion",
            },
            {
              title: "人工智能",
              page: "/AI",
            },
            {
              title: "金融科技",
              page: "/Fintech",
            },
          ],
          dropdown: false,
        },
        {
          title: "博客",
          link: "/blog",
          body: [],
          dropdown: false,
        },
        {
          title: "工作",
          link: "/jobs",
          body: [],
          dropdown: false,
        },
      ],
      button: "联系人",
    },
  ];
  const footerData = [
    {
      descr:
        "We have been developing websites for Russia and foreign markets since 2010. Our team consists of more than fifty employees in different countries and cities.",
      address: "191119, St. Petersburg",
      street: "Socialisticheskaya 21",
      mail: "e-mail: usertech78@ya.ru",
    },
    {
      descr:
        "Мы занимаемся разработкой веб-сайтов для России и зарубежных рынков с 2010 года. Наша команда – более пятидесяти сотрудников в разных странах и городах.",
      address: "191119, город Санкт-Петербург",
      street: "Социалистическая 21",
      mail: "e-mail : usertech78@ya.ru",
    },
    {
      descr:
        "我们自2010年以来一直致力于为俄罗斯和海外市场开发网站。我们的团队在不同的国家和城市拥有50多名员工。",
      address: "圣彼得堡191119",
      street: "Socialisticheskaya 21",
      mail: "电子邮件usertech78@ya.ru",
    },
  ];
  useEffect(() => {
    setNavbarItems(langData[langIndex].dropdowns);
    localStorage.setItem("LANG", langIndex);
  }, [langIndex]);
  useEffect(() => {
    setNavbarItems(langData[langIndex].dropdowns);
  }, []);
  const navigate = useNavigate();
  return (
    <div className="footer">
      <div className="container">
        <div className="left">
          <div className="top">
            <img src={logo} alt="Logo" />
            <i
            onClick={(e) => {
              const hamburgerDIV = document.querySelector(".hamburger");
              hamburgerDIV.classList.toggle("hamburger_active");
            }}
            className="ri-menu-line"
            id="hamburger_menu"
          ></i>
            {navbarItems.map((item, index) => (
              <div key={index} className="dropdown">
                <button
                  className="dropdown-button"
                  onClick={() => navigate(item.link)}
                >
                  {item.title}{" "}
                  {item.dropdown ? (
                    <i className="ri-arrow-down-s-line"></i>
                  ) : (
                    ""
                  )}
                </button>
                {item.dropdown ? (
                  <div className="dropdown-content">
                    {item.body.map((item1, index1) => (
                      <p onClick={() => navigate(item1.page)} key={index1}>
                        {item1.title}
                      </p>
                    ))}
                  </div>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
          <div className="bottom">
            <p>
              {" "}
              Мы занимаемся разработкой веб-сайтов для России и зарубежных
              рынков с 2010 года. Наша команда – более пятидесяти сотрудников в
              разных странах и городах.{" "}
            </p>
          </div>
  
        </div>
        <div className="right">
          <h1> +79997103995 </h1>
          <p> 191119, город Санкт-Петербург,</p>
          <p> Социалистическая 21 </p>
          <small> e-mail : usertech78@ya.ru </small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
