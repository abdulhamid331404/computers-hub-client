import React, { useState } from 'react';

const Computers = ({ Collection, setCollectionComputer }) => {
    const { name, img, location, orginalPrice, resellPrice, uses, post } = Collection;
    console.log(Collection);

    return (
        <div className="card w-96 bg-base-100 shadow-xl mt-5">
            <figure><img src={img} alt="Shoes" className='w-full' /></figure>
            <div className="card-body text-left">
                <h2 className="card-title"> {name} </h2>
                <p>Post: {post}</p>
                <p>Original Price: {orginalPrice} $</p>
                <p>Resell Price: {resellPrice} $</p>
                <p>Uses: {uses}</p>
                <p>Location: {location}</p>

                <div className="card-actions justify-end">
                    <label
                        htmlFor="buying-modal"
                        className="btn btn-primary"
                        onClick={() => setCollectionComputer(Collection)}
                    >Buy Now</label>
                </div>
            </div>
        </div>
    );
};

export default Computers;