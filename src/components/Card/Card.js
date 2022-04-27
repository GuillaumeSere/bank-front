import React from 'react';
import './Card.css';

/**show card 
 *  
 * @returns {JSX}
 */

 const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
   })

 export default function Card({ transaction }){

  return ( 
    <>   
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank Savings {transaction.type}</h3>
                <p className="account-amount">{formatter.format(transaction.amount)}</p>
                <p className="account-amount-description">Available {transaction.balance}</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
            </div>
        </section>
    </>
  );   

}