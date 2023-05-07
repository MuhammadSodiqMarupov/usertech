import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./pages/Header/Header";
import Section1 from "./pages/Section1/Section1";
import Section2 from "./pages/Section2/Section2";
import Section3 from "./pages/Section3/Section3";
import Section4 from "./pages/Section4/Section4";
import Section5 from "./pages/Section5/Section5";
import Jobs from "./pages/Jobs/Jobs";
import Aos from "aos";
import Blog from "./pages/Blog/Blog";
import Algorithm from "./pages/Algorithm/Algorithm";
import Sites from "./pages/Sites/Sites";
import Ai from "./pages/AI/Ai";
import Promotion from "./pages/Promotion/Promotion";
import Section6 from "./pages/Section6/Section6";
import Section7 from "./pages/Section7/Section7";
import Section8 from "./pages/Section8/Section8";
import Section9 from "./pages/Section9/Section9";
import Section10 from "./pages/Section10/Section10";
function App() {
  const [languages, setLanguages] = useState(["En", "Ru"]);
  const [langIndex, setLangIndex] = useState(0);
  useEffect(() => {
    Aos.init({ once: true });
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="flying_items">
                <div class="spinner-wrap">
                  <img
                    src="
                    https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/1024px-Telegram_logo.svg.png?20220101141644
                    "
                    alt="Telegram Image"
                  />
                  
                  <div class="spinner-item"></div>
                  <div class="spinner-item spinner-item--2"></div>
                  <div class="spinner-item spinner-item--3"></div>
                </div>
                <div class="spinner-wrap">
                  <img
                    src="
                    https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg
                    "
                    alt="Whatsapp Image"
                  />
                  
                  <div class="spinner-item" style={{borderColor:"rgba(25,199,13,255)"}}></div>
                  <div class="spinner-item spinner-item--2" style={{borderColor:"rgba(25,199,13,255)"}}></div>
                  <div class="spinner-item spinner-item--3" style={{borderColor:"rgba(25,199,13,255)"}}></div>
                </div>
              </div>
              <Header />
                 <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
        <Section7/>
        <Section8/>
        <Section9/>
        <Section10/>

            </>
          }
        />
        <Route
          path="/jobs"
          element={
            <>
              <Header />
              <Jobs />
            </>
          }
        />
        <Route path="/algorithm" element={<>
        <Header/>
        <Algorithm />
        </>}/>
        <Route path="/sites" element={<>
        <Header />
        <Sites />
        </>}/>
        <Route path="/blog" element={<>
        <Header />
        <Blog />
        </>} />
        <Route path="/AI" element={<>
        <Header />
        <Ai />
        </>} />
        <Route path="/promotion" element={<>
        <Header />
        <Promotion />
        </>} />
      </Routes>
    </div>
  );
}
export default App;
