import React, {useEffect, useState} from 'react';
import './PersonDetails.css'
import SwapiSevice from "../../sevices/SwapiServices";
import RandomPlanetLoading from "../RandomPlanet/RandomPlanetLoading";
import ErrorBlock from "../ErrorBlock/ErrorBlock";

const PersonDetails = ({id}) => {
    const [person, setPerson] = useState({})
    const [status, setStatus] = useState({
        loading: true,
        error: false
    })
    const swapi = new SwapiSevice()

    const onDataLoaded = (data) => {
        setPerson(data);
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
        swapi.getPerson(id)
            .then(person => onDataLoaded(person))
            .catch(() => {
                onError()
            })
    }, [id])
    const loading = status.loading ? <RandomPlanetLoading/> : null
    const error = status.error ? <ErrorBlock/> : null
    return (
        <div className='person-details'>
            {!status.error && !status.loading ? <React.Fragment>
                <img className="person-details_img"
                     src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt=""/>
                <div className="person-details_text">
                    <div className="person-details_name">Имя {person.name}</div>
                    <div className="person-details_description">Пол: {person.gender}</div>
                    <div className="person-details_description">Год рождения: {person.birthYear}</div>
                    <div className="person-details_description">Цвет глаз: {person.eyeColor}</div>
                    <div className="person-details_description">Рост: {person.height}</div>
                    <div className="person-details_description">Вес: {person.mass}</div>
                </div>
            </React.Fragment> : null}
            {loading}
            {error}
        </div>
    );
};

export default PersonDetails;