import React from 'react';
import "./Section5.scss"
function Section5(props) {
    return (
        <div className="section5" >
            <div className="container">
                   <div className="card1">
                       <h1> Комплексное продвижение </h1>
                       <ul>
                           <li> SEO-продвижение</li>
                           <li> Содержание </li>
                           <li> SERM </li>
                           <li> Реклама в Яндекс.Директ</li>
                           <li> Геомаркетинг, продвижение в контекстном поиске</li>
                           <li> SMM – продвижение соц.сетей</li>
                           <li> Настройка таргетированной рекламы для SMM</li>
                           <li> UX, улучшение конверсии сайта</li>
                       </ul>
                       <button> Подробнее </button>
                   </div>

                <div className="card2">
                    <h1> Yandex direct </h1>
                    <ul>
                        <li> Настройка через Яндекс.Бизнес </li>
                         <li> Настройка через Яндекс.Директ</li>
                        <li> Подборка активных слов</li>
                        <li> Кампании на картах</li>
                       <li> Подборка изображений для РСЯ</li>
                        <li> Брендированная видеореклама</li>
                        <li> Настройка систем аналитики и отслеживание целей</li>
                       <li> Смарт-баннеры</li>
                    </ul>
                    <button> Подробнее </button>
                </div>

                <div className="card3">
                    <h1> SMM/Таргет </h1>
                    <ul>
                        <li>Настройка через Mytarget</li>
                        <li> Настройка через ВК/FB/instagram</li>
                        <li> Персональная настройка под бизнес.</li>
                        <li>  Создание сообществ</li>
                        <li> Подбор аудиторий, креативы, тексты объявлений</li>
                        <li> Подбор аудиторий, креативы, тексты объявлений  </li>
                        <li> Отслеживание эффективности кампании</li>
                    </ul>
                    <button> Подробнее </button>
                </div>
            </div>
        </div>
    );
}

export default Section5;