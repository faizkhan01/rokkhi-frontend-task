import React, { useEffect, useState } from 'react';
import CountryList from './CountryList';

const Home = () => {
    const [country, setCountry]= useState([])
    useEffect( ()=> {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountry(data)); 
        
    },[])
    console.log(country)
    return (
        <div style={{backgroundColor: 'cyan'}}>
            <h1 className='text-center my-5' style={{color:'blueviolet', backgroundColor: 'goldenrod'}}> <strong>Select Country Name </strong></h1>
           
            {
                country.map( country => <CountryList key={country._id} country={country} ></CountryList> )
            }   

        </div>
    );
};

export default Home;