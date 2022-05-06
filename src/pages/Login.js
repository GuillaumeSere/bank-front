import React, { useEffect, useState }  from 'react';
import './Login.css';
import * as connectionActions from '../data/connexion';
import  callApi  from '../data/callApi';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

/**show Page Sign-in
 *  
 * @returns {JSX}
 */

export default function SignIn(){

    const dispatch = useDispatch()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const history = useNavigate()
    const stateReduxToken = useSelector((state)=>state.connection.token)


    async function  getUserAxios(){
        const axios = await callApi.axiosProfile(stateReduxToken)          
        dispatch(connectionActions.getUser({firstName:axios.firstName,lastName:axios.lastName}))
    }
    
    async function submit(){
        const responseAxios = await callApi.axiosToken({email,password})
        if(responseAxios){
            dispatch(connectionActions.getToken({token:responseAxios,email:email}))
        }
    }
    
    useEffect(()=>{
        if(stateReduxToken){      
            getUserAxios()  
            history("/profile")
        }
    },[stateReduxToken])

  return ( 
    <>   
        <main className="main bg-dark space bg">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                        <label>Email</label>
                        <input type="text" onChange={ e => setEmail(e.target.value)} />
                    </div>
                    <div className="input-wrapper">
                        <label>Password</label>
                        <input type="password" onChange={ e => setPassword(e.target.value)} />
                    </div>
                    <div className="input-remember">
                        <label><input type="checkbox"/>Remember me</label>
                    </div>
                    <button type="button" className="sign-in-button" onClick={ () => submit()}> Sign In </button>
                </form>
            </section>
        </main>
    </>
  );   

}