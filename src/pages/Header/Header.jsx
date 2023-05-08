import "./header.scss";
import logo from "../../images/logo.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
const Header = ({languages,langIndex,setLangIndex}) => {
  const navigate = useNavigate();
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
      button:"Contacts"
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
      button:'Контакты'
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
      button:'联系人'
    },
  ];
  const [navbarItems, setNavbarItems] = useState([]);
  useEffect(() => {
    setNavbarItems(langData[langIndex].dropdowns);
    localStorage.setItem("LANG", langIndex);
  }, [langIndex]);
  useEffect(() => {
    setNavbarItems(langData[langIndex].dropdowns);
  }, []);
  const changeLang = () => {
    if (langIndex>=(languages.length-1)) {
      setLangIndex(0);
    } else {
      setLangIndex(prev=>++prev);
    }
  };
  return (
    <div className="header">
      <div className="container">
        <div className="hamburger">
          <i
            className="ri-close-line"
            onClick={(e) => {
              const hamburgerDIV = document.querySelector(".hamburger");
              hamburgerDIV.classList.toggle("hamburger_active");
            }}
          ></i>
          {navbarItems.map((item, index) => (
            <div key={index}>
              <div className="item" id={"dropdown-" + (index + 1)}>
                <div className="item_header">
                  <span
                    onClick={(e) => {
                      if (item.dropdown) {
                        const indexInc = index + 1;
                        document
                          .getElementById("body-" + indexInc)
                          .classList.toggle("active");
                      } else {
                        navigate(item.link);
                      }
                    }}
                  >
                    {item.title}
                  </span>
                  {item.dropdown ? (
                    <i
                      onClick={(e) => {
                        if (item.dropdown) {
                          const indexInc = index + 1;
                          document
                            .getElementById("body-" + indexInc)
                            .classList.toggle("active");
                        }
                      }}
                      className="ri-arrow-down-s-line"
                    ></i>
                  ) : (
                    ""
                  )}
                </div>
                {item.dropdown ? (
                  <div id={"body-" + (index + 1)} className="item_body">
                    {item.body.map((body, index_body) => (
                      <p
                        className="p-b"
                        onClick={() => navigate(body.page)}
                        key={index_body}
                      >
                        {body.title}
                      </p>
                    ))}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}
          <button>{langData[langIndex-1]?.button}</button>
        </div>
        <div className="left">
          <img
            src={logo}
            onClick={() => {
              navigate("/");
            }}
            alt="Logo"
          />
        </div>
        <div className="right">
          <div className="list">
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
          <div className="more">
            <p onClick={changeLang}>{languages[langIndex]}</p>
            <button>{langData[langIndex].button}</button>
            <i
              onClick={(e) => {
                const hamburgerDIV = document.querySelector(".hamburger");
                hamburgerDIV.classList.toggle("hamburger_active");
              }}
              id="hamburger"
              className="ri-menu-fill"
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
