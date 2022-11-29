import React  from 'react';
import { useLoaderData } from 'react-router-dom';
import BuyingModal from '../../BuyingModal/BuyingModal';
import Computers from './Computers/Computers';

const ComputerCollections = () => {
const {Collections} = useLoaderData();
console.log(Collections);


    return (
       <div>
         <div className='grid mt-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 bg-lime-50 mt-10 mb-10'>
         {
          Collections.map(Collection => <Computers
          key={Collections._id}
          Collection={Collection}
          ></Computers>)
         }
        </div>
        <BuyingModal></BuyingModal>
       </div>
    );
};

export default ComputerCollections;