import React from 'react';
import sw from './StarWars.png'

const RandomPlanetContent = ({id,name,population,rotationPeriod,diameter}) => {
    return (
        <div className='random-planet'>
            <img className='random-planet_img'
                 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt=""/>
            <div className="random-planet_info">
                <div className="random-planet_title">{name}</div>
                <div className="random-planet_description">Население {population}</div>
                <div className="random-planet_description">Время оборота {rotationPeriod}</div>
                <div className="random-planet_description">Диаметр {diameter}</div>
            </div>
            <img className='random-planet_logo' src={sw} alt="StarWars"/>
        </div>
    );
};

export default RandomPlanetContent;