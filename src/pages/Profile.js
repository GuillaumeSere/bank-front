import React from 'react';
import Card from '../components/Card/Card';
import './Profile.css';


let tab=[
    {
        id:1,
    },
    {
        id:2,
    },
    {
        id:3,
    },                       
]

/**show Page User profile
 *  
 * @returns {JSX}
 */

 export default function UserProfile(){
  
        return ( 
            <>    
                <main className="main-profil bg-dark">
                    <div className="header title-welcome">
                        <h1>Welcome back<br /> Tony Jarvis!</h1>
                        <button className="edit-button">Edit Name</button> 
                    </div>
                    <h2 className="sr-only">Accounts</h2>
                    {
                        tab.map((elt)=>
                        <Card key={elt.id}/>
                        )
                    }
                </main>
            </>
        )   

        }
    