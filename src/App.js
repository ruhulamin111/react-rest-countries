import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div>
      <LoadCountries></LoadCountries>

    </div>
  );
}

function LoadCountries() {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])

  return (
    <div>
      {
        countries.map(country => <Country country={country}></Country>)
      }
    </div>
  )
}

function Country(props) {
  const { flags, name, area, population, region, borders, capital } = props.country;
  console.log(props.country);
  return (
    <div>
      <img src={flags.png} alt="" />
      <p>Name: <b>{name.common}</b></p>
      <p>Capital: <b>{capital}</b></p>
      <p>Population: <b>{population}</b></p>
      <p>Continets: <b>{region}</b></p>
      <p>Border: <b>{borders}</b></p>
      <p>Area: <b>{area}</b></p>

    </div>
  )
}


export default App;
