import React from 'react';
import Logo from '../../assets/argentBankLogo.png';
import { Link } from 'react-router-dom';
import './Header.css';


/**show Header  
 * @returns {JSX}
 */

export default function Header(){

  return ( 
    <>
      <header className='header'>
        <nav className="main-nav">
          <Link className="main-nav-logo" to="/">
            <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo"/>
            <h1 className="sr-only">Argent Bank</h1>
          </Link>
          <div>
            <Link to="/profile" className='main-nav-item'>
            <i className="fa fa-user-circle"></i>
            Sign in
            </Link>
            <Link to="/login" className="main-nav-item">
            <i className='fa fa-sign-out'></i>
            Sign Out
            </Link>
          </div>
        </nav>
      </header>   
    </>     
  );  
}

