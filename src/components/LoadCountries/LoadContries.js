import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './LoadCountries.css';

const LoadContries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h2>All Countries Details</h2>
            <div className='country-item'>
                {
                    countries.map(country => <Country
                        country={country}
                        key={country.cca3}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default LoadContries;