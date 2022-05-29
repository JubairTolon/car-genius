import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Banner from '../Banner/Banner';
import Exerts from '../Experts/Exerts';
import Services from '../Services/Services'

const Home = () => {
    return (
        <div>
            {<PageTitle title='Home'></PageTitle>}
            <Banner></Banner>
            <Services></Services>
            <Exerts></Exerts>
        </div>
    );
};

export default Home;