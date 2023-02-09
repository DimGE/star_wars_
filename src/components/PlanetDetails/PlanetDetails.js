import React, {useEffect, useState} from 'react';
import '../PersonDetails/PersonDetails.css'
import SwapiSevice from "../../sevices/SwapiServices";
import RandomPlanetLoading from "../RandomPlanet/RandomPlanetLoading";
import ErrorBlock from "../ErrorBlock/ErrorBlock";
import RandomPlanetContent from "../RandomPlanet/RandomPlanetContent";

const PlanetDetails = ({id}) => {
    const [planet, setPlanet] = useState({})
    const [status, setStatus] = useState({
        loading: true,
        error: false
    })
    const swapi = new SwapiSevice()

    const onDataLoaded = (data) => {
        setPlanet(data);
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
        swapi.getPlanet(id)
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
            {!status.error && !status.loading ? <RandomPlanetContent {...planet}/>
                 : null}
            {loading}
            {error}
        </div>
    );
};

export default PlanetDetails;