import React, {useEffect, useState} from 'react';
import './RandomPlanet.css'
import planet from './planet.jpg'
import SwapiSevice from "../../sevices/SwapiServices";
import Loader from "../Loader/Loader";
import RandomPlanetContent from "./RandomPlanetContent";
import RandomPlanetLoading from "./RandomPlanetLoading";
import ErrorBlock from "../ErrorBlock/ErrorBlock";

const RandomPlanet = () => {


    const [info, setInfo] = useState({
        id: null,
        name: null,
        population: null,
        rotationPeriod: null,
        diameter: null,
        loading: true,
        error: false
    })
    const swapi = new SwapiSevice()

    const onPlanetLoaded =(planet)=>{
        setInfo({
            ...planet,
            loading: false,
            error: false
        })
    }
    const errorReading = ()=>{
        setInfo(prevState => {
            return{
                ...prevState,
                loading: false,
                error: true
            }
        })
    }

    const updatePlanet = () => {
        const id = Math.floor(Math.random() * 20 + 2)
        swapi.getPlanet(id)
            .then(data => {
                onPlanetLoaded(data)
            })
            .catch(()=>{
                errorReading()
            })
    }

    useEffect(()=>{
        const intId = setInterval(updatePlanet,15000)
        return ()=>{
            clearInterval(intId)
        }
    },[])

    const loader = info.loading ? <RandomPlanetLoading/> : null
    const content = !info.loading && !info.error ? <RandomPlanetContent {...info}/> : null
    const errorRender = info.error ? <ErrorBlock/> : null

    return (
        <div >
            {loader}
            {errorRender}
            {content}
        </div>
    );
};

export default RandomPlanet;