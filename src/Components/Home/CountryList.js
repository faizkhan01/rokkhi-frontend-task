import React from 'react';
import { useHistory } from 'react-router-dom';


const CountryList = (props) => {
    const history = useHistory()
    
   const {name, languages} = props.country || ''
   const handleCountryLanguage = ()=>{
        history.push({ 
            pathname: '/selectedCountry',
            state : {
                name : name,
                languages: languages
            }
        });
    }
    
    return (
        <p className='mx-5 cursor-pointer' onClick = {handleCountryLanguage}>{name}</p>
       
    );
};

export default CountryList;