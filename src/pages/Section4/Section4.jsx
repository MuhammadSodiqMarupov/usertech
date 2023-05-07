import React from 'react';
import "./Section4.scss"
import arrow from "../../images/Arrow.svg"
import robo from "../../images/animationRobo.gif"
function Section4(props) {
    return (
        <div className="section4">
            <div className="container">
              <div className="left">
                  <h1> Создали IT продукт ,  а что дальше ? </h1>
                  <h2> Мы помогаем клиентам  в следующих ситуациях: </h2>
                  <img src={robo} alt=""/>
              </div>
              <div className="right"></div>
            </div>
        </div>
    );
}

export default Section4;