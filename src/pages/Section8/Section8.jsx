import "./Section8.scss"
import lines from "../../images/Lines.png"
import { LanguageContext } from "../../context/contextCreation";
import { useContext } from "react";

function Section8() {
    const {langIndex}=useContext(LanguageContext);
    const data = ["Our advantages","Наши преимущества","我们的优势"];
    return (
        <div className="section8">
            <div className="container">
                <h1>{[data[langIndex]]}</h1>
                <img src={lines} alt=""/>
            </div>
        </div>
    );
}

export default Section8;