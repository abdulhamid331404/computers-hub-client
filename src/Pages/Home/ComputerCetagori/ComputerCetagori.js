import React from 'react';
import { Link } from 'react-router-dom';

const ComputerCetagori = ({computer}) => {
    const {_id, name, img} = computer;
    return (
         <Link to={`/computers/${_id}`}>
         <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Computer" /></figure>
        <div className="card-body">
          <h2 className="card-title text=2xl">{name}</h2>
        </div>
      </div>
         </Link>
    );
};

export default ComputerCetagori;