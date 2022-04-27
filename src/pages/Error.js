import React from 'react';
import './Error.css';
import { Link } from 'react-router-dom';


/**show Page Error
 *  
 * @returns {JSX}
 */

 export default function Error(){
    
    return(
        <>
            <main className='error-main'>
                <div className='error-container'>
                    <p className='error-text-number'>404</p>
                    <p className='error-text'>Whoops! The page you requested does not exist.</p>
                    <Link to='/' className='error-btn'>Return to the homepage</Link>
                </div>
            </main>    
        </>
    );
}