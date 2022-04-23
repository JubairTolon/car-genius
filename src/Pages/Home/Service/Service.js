import React from 'react';
import './Services.css'

const Service = ({ service }) => {
    const { name, img, description, price } = service;

    return (
        <div className='service'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button>{name}</button>
        </div>
    );
};

export default Service;