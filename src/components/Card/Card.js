import React from 'react';
import './Card.css';

/**show card 
 *  
 * @returns {JSX}
 */

 export default function Card(){

  return ( 
    <>   
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                <p className="account-amount">$10,928.42</p>
                <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
            </div>
        </section>
    </>
  )   

}