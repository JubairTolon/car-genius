import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css'

const Service = ({ service }) => {
    const { _id, name, img, description, price } = service;
    const navigate = useNavigate();

    const navigateToServiceDeails = id => {
        navigate(`/service/${id}`);
    }

    return (
        <div className='service'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button className='btn btn-primary' onClick={() => navigateToServiceDeails(_id)}>{name}</button>
        </div>
    );
};

export default Service;