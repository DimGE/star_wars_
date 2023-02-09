import React, {useEffect, useState} from 'react';
import './ListItems.css'
import RandomPlanetLoading from "../RandomPlanet/RandomPlanetLoading";
import ErrorBlock from "../ErrorBlock/ErrorBlock";

const ListItems = ({selectItem, getData,children}) => {
    const [items, setItems] = useState([])
    const [status, setStatus] = useState({
        loading: true,
        error: false
    })
    const onDataLoaded = (data) => {
        setItems(data);
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
            getData()
            .then(data => onDataLoaded(data))
            .catch(er => {
                onError()
            })
    }, [])

    const loading = status.loading ? <RandomPlanetLoading/> : null
    const error = status.error ? <ErrorBlock/> : null
    const allItems = !status.error && !status.loading ? items.map(el => <li
        key={el.id}
        className="list-group-item"
        onClick={() => {selectItem(el.id)}}>{el.name}</li>) : null

    return (
        <div className="list-items">
            <ul className='list-group'>
                {error}
                {loading}
                {allItems}
            </ul>

        </div>
    );
};

export default ListItems;