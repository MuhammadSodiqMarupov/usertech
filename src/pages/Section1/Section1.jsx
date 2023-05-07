import React from 'react';
import "./Section1.scss"
import robo from "../../images/animationRobo.gif"
function Section1() {
    return (
        <div className="section1">
            <div className="container">
                <div className="top">
                    <div className="left">
                        <h1> Сайт для вашего бизнеса под ключ </h1>
                        <p> МЫ АГЕНСТВО ПОЛНОГО ЦИКЛА для IT продуктов.  Создаем простые решения для сложных задач вашего проекта. Разработаем IT продукт, настроим рекламу  и построем из этого стабильную систему  по привлечению клиентов </p>
                        <button> Узнать подробнее </button>
                    </div>
                    <div className="right">
                        <img src={robo} alt=""/>
                    </div>
                </div>
                <div className="bottom">
                    <div className="card1">
                        <h1> 1к+ </h1>
                        <p> Успешных проектов успели реализовать за все время </p>
                    </div>

                    <div className="card1">
                        <h1> более 13 лет </h1>
                        <p> опыта разработки сервисов любой сложности </p>
                    </div>

                    <div className="card1">
                        <h1> более 200 </h1>
                        <p> постоянных клиентов </p>
                    </div>

                    <div className="card4">
                        <h1> 100+ </h1>
                        <p> Успешных кейсов продвижений сайтов  </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Section1;