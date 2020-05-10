import React from 'react';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SearchInput(props){
    const [value, setValue] = useState(props.value);
    useEffect( () => {
        console.log(value);
    } );
    return (
        <form>
            <input placeholder="search" onChange={ (e) => { setValue(e.target.value) } }></input>
            <button type="submit"><FontAwesomeIcon icon="search"/></button>
        </form>
    );
}