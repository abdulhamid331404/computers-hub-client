import React from 'react';
import BannerBackgroung from '../../../images/banner/banner.jpg'

const Banner = () => {
  return (
    <div className="hero min-h-screen mb-5" style={{ backgroundImage: `url(${BannerBackgroung})` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome to Computers Hub</h1>
          <p className="mb-5">If you need any type of laptop or computer, new or old, you can contact us and buy the computer of your choice. And if you have an old laptop to sell, then you can sell it here. thank you.</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;