import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

const Location = (props) => {
    // console.log(props);
    // debugger;

     /* Forma de asignar las propiedades */
        //1.- const city = props.city;
        //2.- const { city } = props;
        //3.- const Location = ({city}) => {
    
    /* Destructuring ↓ */
     const { city } = props;

    return ( 
        <div className="locationCont">
            <h1>{city}</h1>
        </div>
)};

Location.propTypes = {
    city: PropTypes.string.isRequired,
};

export default Location;