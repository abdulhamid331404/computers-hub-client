import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsLeater from '../../NewsLatear/NewsLeater';
import Banner from '../Banner/Banner';
import FutureCollection from '../FutureCollection/FutureCollection';
import ProductsSection from '../ProductSection/ProductsSection';

const Home = () => {
    const computers = useLoaderData();
    return (
        <div>
           <Banner></Banner>
           <ProductsSection
           key={computers._id}
           computers={computers}
           ></ProductsSection>
           <FutureCollection></FutureCollection>
           <NewsLeater></NewsLeater>
        </div>
    );
};

export default Home;