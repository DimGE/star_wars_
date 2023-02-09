import React, {useEffect, useState} from 'react';
import '../PersonDetails/PersonDetails.css'
import SwapiSevice from "../../sevices/SwapiServices";
import RandomPlanetLoading from "../RandomPlanet/RandomPlanetLoading";
import ErrorBlock from "../ErrorBlock/ErrorBlock";

const StarshipDetails = ({id}) => {
    const [starship, setStarship] = useState({})
    const [status, setStatus] = useState({
        loading: true,
        error: false
    })
    const swapi = new SwapiSevice()

    const onDataLoaded = (data) => {
        setStarship(data);
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
        swapi.getStarship(id)
            .then(data => onDataLoaded(data))
            .catch(() => {
                console.log('eror nen')
                onError()
            })
    }, [id])
    const loading = status.loading ? <RandomPlanetLoading/> : null
    const error = status.error ? <ErrorBlock/> : null
    return (
        <div className='person-details'>
            {!status.error && !status.loading ? <React.Fragment>
                <img className="person-details_img"
                     src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`} alt=""/>
                <div className="person-details_text">
                    <div className="person-details_name">Имя {starship.name}</div>
                    <div className="person-details_description">Модель: {starship.model}</div>
                    <div className="person-details_description">Мануфактура: {starship.manufacturer}</div>
                    <div className="person-details_description">Цена: {starship.costInCredits}</div>
                    <div className="person-details_description">Длина: {starship.length}</div>
                    <div className="person-details_description">Крюк: {starship.crew}</div>
                    <div className="person-details_description">Кол-во пассажиров: {starship.passengers}</div>
                    <div className="person-details_description">Крузовой отсек: {starship.cargoCopacity}</div>
                </div>
            </React.Fragment> : null}
            {loading}
            {error}
        </div>
    );
};

export default StarshipDetails;