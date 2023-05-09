import "./Contact.scss"

function Contact() {
    return (
        <div className="contact">
            <div className="container">
                <h1> Цифры говорят сами за себя</h1>
                <h3> Есть идеи проекта ?</h3>
                <div className="secondSection">
                    <h1> Свяжитесь с нами</h1>
                    <div className="cardDiv">
                        <div className="card1">
                            <button><i className="ri-team-fill"></i> </button>
                            <p> Только самые талантливые</p>
                            <p> работают в нашей команде</p>
                        </div>
                        <div className="card1">
                            <button><i className="ri-money-dollar-circle-fill"></i> </button>
                            <p> Мы не завышаем цены,</p>
                            <p> ведем учет по часам</p>
                        </div>
                        <div className="card1">
                            <button><i className="ri-checkbox-circle-fill"></i> </button>
                            <p> Мы всегда делаем</p>
                            <p> как для себя</p>
                        </div>
                    </div>
                </div>
                <div className="thirdSection">
                    <div className="bigCard">
                        <div className="firstPart">
                            <p> Ваше имя *</p>
                            <div className="inpes">
                                <input placeholder="Ваш номер телефона *" type="text"/>
                                <input placeholder="Ваша фамилия *" type="text"/>
                            </div>
                        </div>

                        <div className="firstPart">
                            <div className="inpes">
                                <input placeholder="Ваш номер телефона *" type="text"/>
                                <input placeholder="Ваша фамилия *" type="text"/>
                            </div>
                        </div>

                        <div className="secondPart">
                           <div className="left">
                               <p> Бюджет проекта *</p>
                               <input placeholder="Ваш номер телефона *" type="range"/>
                           </div>
                               <div className="right">
                                   <p> Название компании</p>
                                   <input placeholder="Ваша фамилия *" type="text"/>
                               </div>
                        </div>
                        <div className="thirdPart">
                            <p> Откуда вы о нас узнали ?</p>
                            <div className="bottomLast">
                                <label htmlFor="">
                                    <input type="checkbox"/>
                                    <p> Друзья или коллеги</p>
                                </label>
                                <label  htmlFor="">
                                    <input type="checkbox"/>
                                    <p> Радио/ ТВ </p>

                                </label>
                                <label htmlFor="">
                                    <input  type="checkbox"/>
                                    <p> Социальные сети</p>

                                </label>
                                <label htmlFor="">
                                    <input type="checkbox"/>
                                    <p> Другое</p>
                                </label>
                            </div>
                        </div>
                        <div className="fourthPart">
                            <p> Напишите</p>
                            <input placeholder="Другое" type="text"/>
                        </div>
                        <button> Отправить запрос </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;