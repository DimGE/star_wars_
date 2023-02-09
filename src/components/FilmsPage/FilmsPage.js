import React, {useEffect, useState} from 'react';
import './FilmsPage.css'
import FilmsCard from "./FilmsCard/FilmsCard";
import SwapiSevice from "../../sevices/SwapiServices";
import ErrorBlock from "../ErrorBlock/ErrorBlock";
import FilmDetail from "./FilmDetail/FilmDetail";

const FilmsPage = () => {
    const [films,setFilms] = useState([])
    const [selected, setSelected] = useState(2)
    const [error, setError] = useState(null)
    const swapi = new SwapiSevice()

    useEffect(() => {
        swapi.getAllFilms()
            .then(data => setFilms(data))
            .catch(err=> setError(err))
        try {
        } catch (err) {
            setError(err)
        }
    }, [selected])

    const allFilms = films.map(el => <FilmsCard key={el.id} seleted={(id)=>setSelected(id)} {...el}/>)

    if (error) {
        return <ErrorBlock/>
    }

    return (
        <div className='films_wrapper'>
            {allFilms}
        </div>
    );
};

export default FilmsPage;