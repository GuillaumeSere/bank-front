import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

/**show Page Sign-in
 *  
 * @returns {JSX}
 */

export default function SignIn(){

  return ( 
    <>   
        <main className="main bg-dark space bg">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                        <label htmlFor="email">Email</label><input type="text" id="username" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label><input type="password" id="password" />
                    </div>
                    <div className="input-remember">
                        <label htmlFor="remember-me" ><input type="checkbox" id="remember-me" />Remember me</label>
                    </div>
                    <Link to="/profile" className="sign-in-button" >Sign In</Link>
                </form>
            </section>
        </main>
    </>
  )   

}