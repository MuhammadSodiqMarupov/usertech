import "./header.scss";
import logo from "../../images/logo.svg";
import "./header.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
const Header = () => {
  const navigate = useNavigate();
  const languages = ["En", "Ru"];
  const langData = [
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
          body: ["Алгоритм работы"],
          dropdown: true,
        },
        {
          title: "Услуги",
          body: ["Сайты", "Приложения"],
          dropdown: true,
        },
        {
          title: "Блог",
          link: "",
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
    },
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
    },
  ];
  const [langIndex, setLangIndex] = useState(
    JSON.parse(localStorage.getItem("LANG")) ?? 1
  );
  const [navbarItems, setNavbarItems] = useState([]);
  useEffect(() => {
    setNavbarItems(langData[langIndex].dropdowns);
    localStorage.setItem("LANG", langIndex);
  }, [langIndex]);
  useEffect(() => {
    setNavbarItems(langData[langIndex].dropdowns);
  }, []);
  const changeLang = () => {
    if (languages.length - 1 <= langIndex) {
      setLangIndex((prev) => --prev);
    } else {
      setLangIndex((prev) => ++prev);
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
                      class="ri-arrow-down-s-line"
                    ></i>
                  ) : (
                    ""
                  )}
                </div>
                {item.dropdown ? (
                  <div id={"body-" + (index + 1)} className="item_body">
                    {item.body.map((body, index_body) => (
                      <p key={index_body}>{body.title}</p>
                    ))}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}
          <button>Contacts</button>
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
                  {item.dropdown ? <i class="ri-arrow-down-s-line"></i> : ""}
                </button>
                {item.dropdown ? (
                  <div className="dropdown-content">
                    {item.body.map((item1, index1) => (
                      <p onClick={()=>navigate(item1.page)} key={index1}>{item1.title}</p>
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
            <button>Contacts</button>
            <i
              onClick={(e) => {
                const hamburgerDIV = document.querySelector(".hamburger");
                hamburgerDIV.classList.toggle("hamburger_active");
              }}
              id="hamburger"
              class="ri-menu-fill"
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
