import "./Blog.scss";
const Blog = () => {
//   const getJobs = async () => {
//     const querySnapshot = await getDocs(collection(db, "jobs"));
//     const newData = [];
//     querySnapshot.forEach((doc) => {
//       newData.push({ ...doc.data(), id: doc.id });
//     });
//     const uniqueData = newData.filter((item, index) => {
//       return (
//         index ===
//         newData.findIndex((obj) => {
//           return JSON.stringify(obj) === JSON.stringify(item);
//         })
//       );
//     });
//     setData(uniqueData);
//   };
//   useEffect(() => {
//     getJobs();
//   }, []);
  return (
    <div className="blog">
      <div className="container">
        <div className="card" data-aos="fade-up" data-aos-duration="1500">
          <img src={require("../../images/card1_blog.jpg")} alt="Card Image" />
          <div className="info">Blog news usertech</div>
          <div className="title">
            САМЫЕ ПОПУЛЯРНЫЕ CSS ФРЕЙМВОРКИ В 2020 ДЛЯ МОБИЛЬНЫХ УСТРОЙСТВ
          </div>
          <div className="descr">
            Мир давно осознал, что будущее за искусственным интеллектом и ИТ.
            […]
          </div>
          <button>Read</button>
        </div>
        <div
          className="card"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="500"
        >
          <img src={require("../../images/card1_blog.jpg")} alt="Card Image" />
          <div className="info">Blog news usertech</div>
          <div className="title">
            САМЫЕ ПОПУЛЯРНЫЕ CSS ФРЕЙМВОРКИ В 2020 ДЛЯ МОБИЛЬНЫХ УСТРОЙСТВ
          </div>
          <div className="descr">
            Мир давно осознал, что будущее за искусственным интеллектом и ИТ.
            […]
          </div>
          <button>Read</button>
        </div>
        <div
          className="card"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="900"
        >
          <img src={require("../../images/card1_blog.jpg")} alt="Card Image" />
          <div className="info">Blog news usertech</div>
          <div className="title">
            САМЫЕ ПОПУЛЯРНЫЕ CSS ФРЕЙМВОРКИ В 2020 ДЛЯ МОБИЛЬНЫХ УСТРОЙСТВ
          </div>
          <div className="descr">
            Мир давно осознал, что будущее за искусственным интеллектом и ИТ.
            […]
          </div>
          <button>Read</button>
        </div>
        <div
          className="card"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="1400"
        >
          <img src={require("../../images/card1_blog.jpg")} alt="Card Image" />
          <div className="info">Blog news usertech</div>
          <div className="title">
            САМЫЕ ПОПУЛЯРНЫЕ CSS ФРЕЙМВОРКИ В 2020 ДЛЯ МОБИЛЬНЫХ УСТРОЙСТВ
          </div>
          <div className="descr">
            Мир давно осознал, что будущее за искусственным интеллектом и ИТ.
            […]
          </div>
          <button>Read</button>
        </div>
        <div
          className="card"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="1800"
        >
          <img src={require("../../images/card1_blog.jpg")} alt="Card Image" />
          <div className="info">Blog news usertech</div>
          <div className="title">
            САМЫЕ ПОПУЛЯРНЫЕ CSS ФРЕЙМВОРКИ В 2020 ДЛЯ МОБИЛЬНЫХ УСТРОЙСТВ
          </div>
          <div className="descr">
            Мир давно осознал, что будущее за искусственным интеллектом и ИТ.
            […]
          </div>
          <button>Read</button>
        </div>
        <div
          className="card"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="2200"
        >
          <img src={require("../../images/card1_blog.jpg")} alt="Card Image" />
          <div className="info">Blog news usertech</div>
          <div className="title">
            САМЫЕ ПОПУЛЯРНЫЕ CSS ФРЕЙМВОРКИ В 2020 ДЛЯ МОБИЛЬНЫХ УСТРОЙСТВ
          </div>
          <div className="descr">
            Мир давно осознал, что будущее за искусственным интеллектом и ИТ.
            […]
          </div>
          <button>Read</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
