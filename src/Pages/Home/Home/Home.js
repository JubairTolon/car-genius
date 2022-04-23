import React from 'react';
import Banner from '../Banner/Banner';
import Exerts from '../Experts/Exerts';
import Services from '../Services/Services'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Exerts></Exerts>
        </div>
    );
};

export default Home;