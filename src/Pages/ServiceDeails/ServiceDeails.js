import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ServiceDeails = () => {
    const { serviceId } = useParams();
    const navigate = useNavigate();

    const handleProceed = () => {
        navigate("/checkout");
    }
    return (
        <div>
            <h2>Welcome to Details: {serviceId}</h2>
            <div className='text-center my-5'>
                <button className='btn btn-danger' onClick={handleProceed}>Proceed Checkout</button>
            </div>
        </div>
    );
};

export default ServiceDeails; <h2>Welcome to Details</h2>