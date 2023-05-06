import React from 'react';
import "./Section4.scss"
import arrow from "../../images/Arrow.svg"
function Section4(props) {
    return (
        <div className="section4">
            <div className="container">
                    <div className="top">
                        <div className="left">
                            <h1> Быстрый запуск бизнеса  <span> Landing page </span> </h1>
                            <h2> от 25 000₽ </h2>
                         </div>
                        <div className="right">
                            <img src={arrow} alt=""/>
                        </div>
                    </div>
                <div className="bottom">
                </div>
            </div>
        </div>
    );
}

export default Section4;