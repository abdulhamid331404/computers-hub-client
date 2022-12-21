import React from 'react';

const Blog = () => {
    return (
        <div className='bg-dark text-left'>

            <div className='bg-info p-3'>
                <strong><h2 >what is cors?</h2></strong>
                <p>Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos. </p>
            </div>
            <div className='bg-info p-3'>
               <strong> <h2>Why are you using firebase?</h2></strong>
                <li>Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.</li>
               <strong> <h4>What other options do you have to implement authentication?</h4></strong>
                <li>
                    Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                </li>
            </div>
            <div className='bg-info p-3'>
                <strong><h2>How does the private route work?</h2></strong>
                <p>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
            </div>
            <div className='bg-info p-3'>
                <strong><h2>What is Node? How does Node work?</h2></strong>
                <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
            </div>

        </div>
    );
};

export default Blog;