import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const SelectedCountry = () => {
    const location = useLocation() || ''
    const [language, setLanguage] = useState('')
    const {name, languages} = location.state || ''
    console.log(language)
  
    const handleSaveLanguage = (selectedLanguage)=> {
        const requestData = { 
            country    : name,
            language : language       
        }
        console.log(JSON.stringify(requestData))
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestData)
        };
        fetch('http://api.rokkhi.com:3000/idea', requestOptions)
        .then(response => response.json())
        .then(data => {
            alert('success!!!')   
        }) 
        .catch(err => {
            alert('Request failed, Something went wrong!!!') 
           console.error(err.message)
         });
    }

    const handleOptionValue = (event)=> {       
            setLanguage(event.target.value )       
    }

    return (
        <div className='d-flex flex-column align-items-center my-5'>
            <h2>{name}</h2>
            <div>
                <p className="form-group select">
                   Select Language: <select onChange={(event)=>handleOptionValue(event)} className="form-control select" id="sel1">
                    {
                        languages.map( language => 
                        <option className='cursor-pointer'> {language.nativeName}</option>)
                    }         
                    </select>
                </p>
                <button className= 'btn btn-primary'  onClick = {()=>handleSaveLanguage(language)}>Save</button>
            </div>
            
        </div>
    );
};

export default SelectedCountry;