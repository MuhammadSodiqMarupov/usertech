import { Route, Routes } from "react-router-dom";
import Header from "./pages/Header/Header";
import Section1 from "./Pages/Section1/Section1";
import Section2 from "./Pages/Section2/Section2";
function App() {
  return (
      <Routes>
        <Route path="/" element={<>
        <Header />
        <Section1/>
        <Section2/>
        </>}/>
      </Routes>
  );
}

export default App;
