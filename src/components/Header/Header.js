import React from 'react';
import Logo from '../../assets/argentBankLogo.png';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import { useSelector,useDispatch } from 'react-redux';
import * as connectionActions from '../../data/connexion';


/**show Header  
 * @returns {JSX}
 */

    export default function Header(){

        const isConnected = useSelector((state)=>state.connection.isConnected)
        const firstName = useSelector((state)=>state.connection.firstName)
        const dispatch = useDispatch()
        const history = useNavigate() 
      
        function signOut(){
          dispatch(connectionActions.signOut())
          history("/")
        } 

  return ( 
    <>
        <nav className="main-nav">
        <Link  to="/" className="main-nav-logo">
            <img
              className="main-nav-logo-image"
              src={Logo}
              alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
          </Link>
          <div>
            {isConnected?(
              <><Link to="/profile" className='main-nav-item'>
                <i className="fa fa-user-circle"></i>
                {firstName}
              </Link>

               <Link to="/" className='main-nav-item main-button-out' onClick={() => signOut()}>
               <i className='fa fa-sign-out'></i>
               Sign out
             </Link></>
            ):(
              <Link to="/login" className="main-nav-item">
                <i className="fa fa-user-circle"></i>
                Sign In
              </Link>
            )

            }
          </div>
        </nav> 
    </>     
  );  
    
}

