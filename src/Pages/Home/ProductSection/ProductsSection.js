import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ComputerCetagori from '../ComputerCetagori/ComputerCetagori';

const ProductsSection = ({ computers }) => {

    return (
        <div className='mb-10'>
            <h1 className=' text-3xl font-bold'> Product Categories</h1>
            <div className='grid mt-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                {
                    computers.map(computer => <ComputerCetagori
                    key={computer._id}
                    computer={computer}
                    ></ComputerCetagori>)
                }
            </div>
        </div>
    );
};

export default ProductsSection;