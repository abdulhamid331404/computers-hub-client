import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
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
        </div>
    );
};

export default Home;