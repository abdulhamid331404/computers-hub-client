import React from 'react';
import hp from '../../../images/laptops/hp/hp.jpg';
import dell from '../../../images/laptops/dell/dell.jpg';
import lenovo from '../../../images/laptops/lenovo/lenovo.jpg';

const ProductsSection = () => {
    const laptops = [
        {
            name: 'Hp',
            img: hp

        }
    ]
    return (
        <div className='mb-10'>
            <h1 className=' text-3xl font-bold'> Product Categories</h1>
        </div>
    );
};

export default ProductsSection;