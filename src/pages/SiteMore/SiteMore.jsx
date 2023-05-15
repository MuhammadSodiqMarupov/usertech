import { useNavigate } from "react-router-dom";
import "./SiteMore.scss";
const SiteMore = () => {
  const navigate = useNavigate();
  return (
    <div className="site_more">
      <div className="container">
        <div className="content">
          <div className="left" data-aos="fade-right">
            <div className="title">LANDING PAGE</div>
            <div className="descr">
              Создадим продающий одностраничный сайт под ключ с не шаблонным
              авторским дизайном. Вы получите сайт, разработанный с целью —
              приносить клиентов и продажи. В процессе создания лендинга
              используем аналитику для лидогенерации и повышения продаж. Наши
              дизайнеры совместно с маркетологом отрисуют 3 варианта продающего
              дизайна с нуля на выбор, а система управления сайтом позволит вам
              управлять наполнением самостоятельно без привлечения
              программистов. Оставляйте заявку для бесплатной консультации и
              расчета стоимости создания вашего сайта, мы перезвоним вам в
              сжатые сроки.
            </div>
            <button onClick={()=>navigate("/contact")}>оставить заявку </button>
          </div>
          <div className="right" data-aos="fade-left">
            <img
              src="https://usertech.ru/wp-content/uploads/2022/09/bashnya.jpg"
              alt="Site Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteMore;
