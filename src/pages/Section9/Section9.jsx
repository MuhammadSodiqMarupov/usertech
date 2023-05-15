import "./Section9.scss";
import call from "../../images/phone.gif";
import { LanguageContext } from "../../context/contextCreation";
import { useContext } from "react";
function Section9() {
  const {langIndex}=useContext(LanguageContext);
  const langData = [
    {
      "title": "Leave a request for a project",
      "button": "Submit request",
      "input": "Full Name",
      "input2": "Phone",
      "descr": "*by submitting forms on this website, you consent to the processing of personal data"
    },    
    {
      title: " Оставьте заявку на проект ",
      button: " Отправить заявку на проект",
      input:"ФИО",
      input2:"Телефон",
      descr:"  *отправляя формы на данном сайте, вы даете согласие на обработкуперсональных данных",
    },
    {
      "title": "留下您的项目请求",
      "button": "提交请求",
      "input": "姓名",
      "input2": "电话",
      "descr": "*通过在本网站上提交表单，您同意处理个人数据"
    }
    
  ];
  return (
    <div className="section9">
      <div className="container">
        <div className="bigCard">
          <div className="left">
            <h1>{langData[langIndex].title}</h1>
            <div className="inputs">
              <input placeholder={langData[langIndex].input} type="text" />
              <input placeholder={langData[langIndex].input2} type="text" />
            </div>
            <button>{langData[langIndex].button}</button>
            <small>{langData[langIndex].descr}</small>
          </div>
          <div className="right">
            <img src={call} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section9;
