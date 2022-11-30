import React from 'react';
import img1 from '../../../images/future-collection/1.jpg'
import img2 from '../../../images/future-collection/2.jpg'
import img3 from '../../../images/future-collection/3.jpg'
import img4 from '../../../images/future-collection/4.jpg'
import img5 from '../../../images/future-collection/5.jpg'
import img6 from '../../../images/future-collection/6.jpg'
import img7 from '../../../images/future-collection/7.jpg'
import img8 from '../../../images/future-collection/8.jpg'
import img9 from '../../../images/future-collection/9.jpg'
import img10 from '../../../images/future-collection/10.jpg'

const FutureCollection = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold mt-10 mb-10">
                Future Collections
            </h1>
            <div>
           <div className="carousel carousel-center  p-4 space-x-4 bg-neutral rounded-box w-full">
  <div className="carousel-item ">
    <img src={img5} />
  </div> 
  <div className="carousel-item">
    <img src={img8} />
  </div> 
  <div className="carousel-item">
    <img src={img6} />
  </div> 
  <div className="carousel-item">
    <img src={img7} />
  </div> 
  <div className="carousel-item">
    <img src={img9} />
  </div> 
  <div className="carousel-item">
    <img src={img7} />
  </div> 
  <div className="carousel-item">
    <img src={img4} />
  </div>
</div>
</div>
        </div>
    );
};

export default FutureCollection;


