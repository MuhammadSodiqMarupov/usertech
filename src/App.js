import { Route, Routes } from "react-router-dom";
import Header from "./pages/Header/Header";
import Section1 from "./pages/Section1/Section1";
import Section2 from "./pages/Section2/Section2";
import Section3 from "./pages/Section3/Section3";
import Section4 from "./pages/Section4/Section4";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<>
        <Header />
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        </>}/>
      </Routes>
    </div>
  );
}
export default App;

