import React from 'react';
import './StartPage.css'
import one from '../../img/1.jpg'
import two from '../../img/2.jpg'
import three from '../../img/3.jpg'
import four from '../../img/4.jpg'
import five from '../../img/6.jpg'
import six from '../../img/7.jpg'
import sevan from '../../img/8.jpg'


const StartPage = () => {
    const imgArray = [two, three, four, five, six, sevan]
    const slaider = imgArray.map((el,index) => {
        return (
            <div key={index} className="carousel-item" data-bs-interval="4000">
                <img src={el} className="d-block w-100" alt="..."/>
            </div>
        )
    })
    return (
        <div className="start-page">
            <div className="start-page_title">
                Добро пожаловать на StarWarsDB
            </div>
            <div className="start-page_description">
                Здесь вы можете найти интересующию вас информацию о вселенной звездных
                войн. <p>Для этого воспользуйтесь навигационным меню</p>
            </div>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="4000">
                        <img src={one} className="d-block w-100" alt="..."/>
                    </div>
                    {slaider}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Предыдущий</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Следующий</span>
                </button>
            </div>
        </div>
    );
};

export default StartPage;