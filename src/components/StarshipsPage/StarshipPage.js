import React, {useEffect, useState} from 'react';
import ListItems from "../ListItems/ListItems";
import ErrorBlock from "../ErrorBlock/ErrorBlock";
import Row from "../Row/Row";
import SwapiSevice from "../../sevices/SwapiServices";
import StarshipDetails from "../StarshipDetails/StarshipDetails";

const StarshipPage = () => {
    const [selected, setSelected] = useState(5)
    const [error, setError] = useState(null)
    const swapi = new SwapiSevice()
    useEffect(() => {
        try {
        } catch (err) {
            setError(err)
        }
    }, [])
    const listItem = (
        <ListItems
            selectItem={(id) => {
                setSelected(id)
            }}
            getData={swapi.getAllStarships}/>
    );
    const personDetail = (
        <StarshipDetails id={selected}/>
    )
    if (error) {
        return <ErrorBlock/>
    }
    return (
        <div>
            <Row left={listItem} right={personDetail}/>
        </div>
    );
};

export default StarshipPage;