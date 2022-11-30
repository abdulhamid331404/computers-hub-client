import React from 'react';
import { Link } from 'react-router-dom';

const NewsLeater = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content bg-slate-800 text-white">
        
       
        <div>
         
        </div> 
        <div>
          <span className="footer-title">Sign up to Newsletter</span> 
          <div className="form-control w-80">
            <label className="label">
              
            </label> 
            <div className="relative">
              <input type="text" placeholder="you@gmail.com" className="input input-bordered w-full pr-16" /> 
              <Link to={'/signup'}><button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button></Link>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default NewsLeater;