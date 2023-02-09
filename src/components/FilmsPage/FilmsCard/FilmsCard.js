import React, {useEffect, useState} from 'react';
import './FilmsCard.css'
import SwapiSevice from "../../../sevices/SwapiServices";
import RandomPlanetLoading from "../../RandomPlanet/RandomPlanetLoading";
import ErrorBlock from "../../ErrorBlock/ErrorBlock";
import {useNavigate} from "react-router-dom";


const FilmsCard = ({id}) => {
    const navigate = useNavigate()
    const [filmInfo,setFilmInfo] = useState({})
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
    const loading = status.loading ? <RandomPlanetLoading/> : null
    const error = status.error ? <ErrorBlock/> : null

    return (
        <div className='film-card'>
            <div className="film-card_item" onClick={()=>{navigate(`/films/${id}`)}}>
                <img src={`https://starwars-visualguide.com/assets/img/films/${id}.jpg`} alt=""/>
                <div className="film-card_item_description">
                    Звездные войн: Эпизод {filmInfo.episode}. {filmInfo.title}
                </div>
            </div>
            {loading}
            {error}
        </div>
    );
};

export default FilmsCard;