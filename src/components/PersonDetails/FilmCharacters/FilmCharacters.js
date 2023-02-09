import React, {useEffect, useState} from 'react';
import SwapiSevice from "../../../sevices/SwapiServices";
import RandomPlanetLoading from "../../RandomPlanet/RandomPlanetLoading";
import ErrorBlock from "../../ErrorBlock/ErrorBlock";

const FilmCharacters = ({id}) => {
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
    }, [])
    const loading = status.loading ? <RandomPlanetLoading/> : null
    const error = status.error ? <ErrorBlock/> : null

    return (
        <div className='film-characters'>
            <img className="film-characters_img"
                 src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt=""/>
            <div className="film-characters_name">{person.name}</div>
            {error}
            {loading}
        </div>


);
};

export default FilmCharacters;