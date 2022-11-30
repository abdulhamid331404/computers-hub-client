import React, { useState }  from 'react';
import { useLoaderData } from 'react-router-dom';
import BuyingModal from '../BuyingModal/BuyingModal';

import Computers from './Computers/Computers';

const ComputerCollections = () => {
  const [collectionComputer, setCollectionComputer] = useState(null);
const {Collections} = useLoaderData();


    return (
       <div>
         <div className='grid mt-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 bg-lime-50 mt-10 mb-10'>
         {
          Collections.map(Collection => <Computers
          key={Collection._id}
          Collection={Collection}
          setCollectionComputer={setCollectionComputer}
          ></Computers>)
         }
        </div>
       { 
       collectionComputer &&
       <BuyingModal
       key={collectionComputer._id}
        collectionComputer={collectionComputer}
        setCollectionComputer={setCollectionComputer}
        ></BuyingModal>}
       </div>
    );
};

export default ComputerCollections;