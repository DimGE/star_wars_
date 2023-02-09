import React, {useEffect, useState} from 'react';
import './FilmDetail.css'
import {useLocation} from "react-router-dom";
import SwapiSevice from "../../../sevices/SwapiServices";
import RandomPlanetLoading from "../../RandomPlanet/RandomPlanetLoading";
import ErrorBlock from "../../ErrorBlock/ErrorBlock";
import FilmCharacters from "../../PersonDetails/FilmCharacters/FilmCharacters";

const FilmDetail = (props) => {
    const location = useLocation()
    const id = location.pathname.slice(-1)
    const [filmInfo, setFilmInfo] = useState({})
    const [status, setStatus] = useState({
        loading: true,
        error: false
    })
    const swapi = new SwapiSevice()

    const onDataLoaded = (data) => {
        setFilmInfo(data);
        setStatus({
            loading: false,
            error: false
        })
    }
    const onError = () => {
        setStatus({
            loading: false,
            error: true
        })
    }
    useEffect(() => {
        swapi.getFilm(id)
            .then(data => onDataLoaded(data))
            .catch(() => {
                console.log('eror nen')
                onError()
            })
    }, [id])

    let characters
    if(filmInfo.characters) {
        characters = filmInfo.characters.map(el => <FilmCharacters key={swapi.getId(el)} id={swapi.getId(el)}/>)
    }

    const loading = status.loading ? <RandomPlanetLoading/> : null
    const error = status.error ? <ErrorBlock/> : null

    return (
        <div className='film-detail'>
            { !loading && !error ? <div className="film-detail_item">
                <div className="film-detail_item_hedear">
                    <img src={`https://starwars-visualguide.com/assets/img/films/${id}.jpg`} alt=""/>
                    <div className="film-details_item_text">
                        <div className="film-details_item_title"><span>Название фильма:</span> Звездные войн:
                            Эпизод {filmInfo.episode}. {filmInfo.title}</div>
                        <div className="film-details_item_description"><span>Дата выхода:</span> {filmInfo.releaseDate}
                        </div>
                        <div className="film-details_item_description"><span>Описание:</span> {filmInfo.openingСrawl}
                        </div>
                        <div className="film-details_item_description"><span>Продюсер:</span> {filmInfo.producer}</div>
                    </div>

                </div>
                <div className='film-details_item_heroes'>
                    Герои
                </div>
                <div className="film-details_item_characters">
                    {characters}
                </div>

            </div> : null}

            {loading}
            {error}
        </div>
    );
};

export default FilmDetail;