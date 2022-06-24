import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetail';

const ServiceDeails = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);

    return (
        <div>
            <h2>You are about to book: {service.name}</h2>
            <div className='text-center my-5'>
                <Link to={`/checkout/${serviceId}`}>
                    <button className='btn btn-info'>Proceed Checkout</button>
                </Link>

            </div>
        </div>
    );
};

export default ServiceDeails; <h2>Welcome to Details</h2>