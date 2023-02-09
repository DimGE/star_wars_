import React from 'react';
import './Header.css'
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <div className='header container'>
            <NavLink to='/'><div className="header_title">StarWarsDB</div></NavLink>
            <ul className="header_list">
                <NavLink to='/films'> <li className="header_list_item">Фильмы</li></NavLink>
                <NavLink to='/persons'> <li className="header_list_item">Персонажи</li></NavLink>
                <NavLink to='/planets'> <li className="header_list_item">Планеты</li></NavLink>
                <NavLink to='/starships'> <li className="header_list_item">Корабли</li></NavLink>

            </ul>
        </div>
    );
};

export default Header;