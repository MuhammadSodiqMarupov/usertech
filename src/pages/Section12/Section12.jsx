import "./Section12.scss";
import direktor from "../../images/div.ytp-cued-thumbnail-overlay-image.webp";
function Section12({ langIndex }) {
  const langData = [
    {
      title: "Get a consultation",
      descr: "Leave your request and we will contact you shortly",
      input1: "Your name",
      input2: "Your phone number",
      input3: "Your question",
      button: "Leave a request and we will contact you shortly",
      link: "By clicking the button, you consent to the",
      linkspan: "processing of personal data",
    },
    {
      title: "Получить консультацию",
      descr: "Оставьте заявку и в ближайшее время мы свяжемся с Вами",
      input1: "Ваше имя",
      input2: "Ваше номер телефона",
      input3: "Ваш вопрос",
      button: "Оставьте заявку и в ближайшее время мы свяжемся с Вами",
      link: "Нажимая кнопку, вы даете согласие на",
      linkspan: " обработку персональных данных ",
    },
    {
      title: "获取咨询",
      descr: "留下您的请求，我们会尽快与您联系",
      input1: "您的姓名",
      input2: "您的电话号码",
      input3: "您的问题",
      button: "留下请求，我们会尽快与您联系",
      link: "点击按钮即表示您同意",
      linkspan: "处理个人数据",
    },
  ];
  return (
    <div className="section12">
      <div className="container">
        <div className="left">
          <div className="innerLeft">
            <h1>{langData[langIndex]?.title}</h1>
            <h4> {langData[langIndex]?.descr}</h4>
            <input
              placeholder={langData[langIndex]?.input1}
              className="inp1"
              type="text"
            />
            <input
              placeholder={langData[langIndex]?.input2}
              className="inp2"
              type="text"
            />
            <textarea
              placeholder={langData[langIndex]?.input3}
              className={"inp3"}
              cols="30"
              rows="10"
            ></textarea>
            <button> {langData[langIndex]?.button}</button>
            <small>
              {" "}
              {langData[langIndex]?.link}{" "}
              <span> {langData[langIndex]?.linkspan} </span>{" "}
            </small>
          </div>
        </div>
        <div className="right">
          <div className="forImg">
            <img src={direktor} alt="Director " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section12;
