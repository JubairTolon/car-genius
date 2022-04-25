import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDeails = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>Welcome to Details: {serviceId}</h2>
        </div>
    );
};

export default ServiceDeails; <h2>Welcome to Details</h2>