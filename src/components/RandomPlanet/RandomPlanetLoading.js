import React from 'react';
import Loader from "../Loader/Loader";

const RandomPlanetLoading = () => {
    return (
        <div style={{justifyContent: 'center'}} className='random-planet'>
            <Loader/>
        </div>
    );
};

export default RandomPlanetLoading;