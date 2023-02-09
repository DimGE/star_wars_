import React, {useEffect, useState} from 'react';
import ListItems from "../ListItems/ListItems";
import PersonDetails from "../PersonDetails/PersonDetails";
import ErrorBlock from "../ErrorBlock/ErrorBlock";
import Row from "../Row/Row";
import SwapiSevice from "../../sevices/SwapiServices";

const PersonPage = () => {
    const [selected, setSelected] = useState(1)
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
            getData={swapi.getAllPeople}>
            <li
                className="list-group-item"
                onClick={() =>{setSelected(11)}} >Enokim Skyoker</li>
        </ListItems>
    );
    const personDetail = (
        <PersonDetails id={selected}/>
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

export default PersonPage;