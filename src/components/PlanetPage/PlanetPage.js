import React, {useEffect, useState} from 'react';
import ListItems from "../ListItems/ListItems";
import ErrorBlock from "../ErrorBlock/ErrorBlock";
import Row from "../Row/Row";
import SwapiSevice from "../../sevices/SwapiServices";
import PlanetDetails from "../PlanetDetails/PlanetDetails";

const PlanetPage = () => {
    const [selected, setSelected] = useState(2)
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
            getData={swapi.getAllPlanets}/>
    );
    const personDetail = (
        <PlanetDetails id={selected}/>
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

export default PlanetPage;