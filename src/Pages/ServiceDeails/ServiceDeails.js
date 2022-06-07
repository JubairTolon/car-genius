import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ServiceDeails = () => {
    const { serviceId } = useParams();
    const navigate = useNavigate();
    const [service, setService] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
    }, []);

    const handleProceed = () => {
        navigate("/checkout");
    }
    return (
        <div>
            <h2>You are about to book: {service.name}</h2>
            <div className='text-center my-5'>
                <button className='btn btn-danger' onClick={handleProceed}>Proceed Checkout</button>
            </div>
        </div>
    );
};

export default ServiceDeails; <h2>Welcome to Details</h2>