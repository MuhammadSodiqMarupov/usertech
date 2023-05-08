import "./Footer.scss";
import logo from "../../images/white_logo.png";
import { useNavigate } from "react-router-dom";
import { useState,useEffect} from "react";
const Footer = ({ langIndex }) => {
  const [navbarItems, setNavbarItems] = useState([]);
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
          body: [
            {
              title: "Work ALgorithm",
              page: "/algorithm",
            },
          ],
          dropdown: true,
        },
        {
          title: "Services",
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
          dropdown: true,
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
          link: "/",
          body: [
            {
              title: "Алгоритм работы",
              page: "/algorithm",
            },
          ],
          dropdown: true,
        },
        {
          title: "Услуги",
          link: "",
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
          dropdown: true,
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
          body: [
            {
              title: "工作算法",
              page: "/algorithm",
            },
          ],
          dropdown: true,
        },
        {
          title: "服务",
          link: "/",
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
          dropdown: true,
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
        <div className="content">
          <div className="top">
            <img src={logo} alt="Logo" />
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
            <div className="right">
              <p>+79997103995</p>
              <p>
                191119, город Санкт-Петербург,
                <br /> Социалистическая 21
              </p>
              <p>e-mail : usertech78@ya.ru</p>
            </div>
          </div>
          <div className="bottom">
            Мы занимаемся разработкой веб-сайтов для России и зарубежных рынков
            с 2010 года. Наша команда – более пятидесяти сотрудников в разных
            странах и городах.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;