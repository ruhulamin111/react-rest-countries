import React from 'react';
import './Country.css';

const Country = (props) => {
    const { flags, name, area, population, region, borders, capital } = props.country;
    return (
        <div className='country-details'>
            <div>
                <img src={flags.png} alt="" />
            </div>
            <div>
                <p>Name: <b>{name.common}</b></p>
                <p>Capital: <b>{capital}</b></p>
                <p>Population: <b>{population}</b></p>
                <p>Continets: <b>{region}</b></p>
                <p>Border: <b>{borders}</b></p>
                <p>Area: <b>{area}</b></p>
            </div>

        </div>
    );
};

export default Country;