import "./header.scss";
import logo from "../../images/logo.svg";
import "./header.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Header = () => {
  const navigate = useNavigate();
  const defNavbar = [
    {
      title: "Home",
      body: [],
      dropdown: false,
    },
    {
      title: "Studio",
      body: ["Work ALgorithm"],
      dropdown: true,
    },
    {
      title: "Services",
      body: ["Sites", "Applications"],
      dropdown: true,
    },
    {
      title: "Blog",
      body: [],
      dropdown: false,
    },
    {
      title: "Vacancies",
      body: [],
      dropdown: false,
    },
  ];
  const [navbarItems, setNavbarItems] = useState(defNavbar);
  return (
    <div className="header">
      <div className="container">
        <div className="hamburger">
            <i className="ri-close-line" onClick={(e)=>{
                const hamburgerDIV = document.querySelector(".hamburger");
                hamburgerDIV.classList.toggle("hamburger_active");
            }}></i>
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
                      <p key={index_body}>{body}</p>
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
            <div className="title">Home</div>
            <div className="dropdown">
              <button className="dropdown-button">
                Studio <i class="ri-arrow-down-s-line"></i>
              </button>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropdown-button">
                Services <i class="ri-arrow-down-s-line"></i>
              </button>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>

            <div className="title">Blog</div>
            <div className="title">Vacancies</div>
          </div>
          <div className="more">
            <p>En</p>
            <button>Contacts</button>
            <i onClick={(e)=>{
                const hamburgerDIV = document.querySelector(".hamburger");
                hamburgerDIV.classList.toggle("hamburger_active");
            }} id="hamburger" class="ri-menu-fill"></i>    
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
