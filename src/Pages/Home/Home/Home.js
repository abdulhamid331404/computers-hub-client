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
           <div>
           <div className="carousel carousel-center  p-4 space-x-4 bg-neutral rounded-box w-full">
  <div className="carousel-item ">
    <img src="https://placeimg.com/250/180/arch" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="https://placeimg.com/250/180/arch" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="https://placeimg.com/250/180/arch" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="https://placeimg.com/250/180/arch" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="https://placeimg.com/250/180/arch" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="https://placeimg.com/250/180/arch" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="https://placeimg.com/250/180/arch" className="rounded-box" />
  </div>
</div>

           </div>
        </div>
    );
};

export default Home;