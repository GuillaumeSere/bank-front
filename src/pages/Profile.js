import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { callApi } from '../data/callApi';
import * as connectionActions from '../data/connexion';
import transactionsData from "../data/transactions";
import Card from '../components/Card/Card';
import './Profile.css';


/**show Page User profile
 *  
 * @returns {JSX}
 */

export default function UserProfile() {

    const stateReduxFirstName = useSelector((state) => state.connection.firstName)
    const stateReduxLastName = useSelector((state) => state.connection.lastName)
    const stateReduxToken = useSelector((state) => state.connection.token)
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [displayEditName, setdisplayEditName] = useState(false)
    const dispatch = useDispatch()

    function displayFormEdit() {

        setdisplayEditName(!displayEditName)
    }
    async function editUser() {
        const axios = await callApi.axiosPutUser(stateReduxToken, { firstName, lastName })
        dispatch(connectionActions.getUser({ firstName: axios.firstName, lastName: axios.lastName }))
        setdisplayEditName(!displayEditName)
    }

    if (stateReduxToken) {
        return (
            <>
                <main className="main-profil bg-dark">
                    <div className="header title-welcome">
                        {
                            displayEditName ? (
                                <>
                                    <h1>Welcome back</h1>
                                    <form >
                                        <div className='form-first-line'>
                                            <label htmlFor="fisrtName">
                                                <input type="text" className="input-new" onChange={(e) => setFirstName(e.target.value)} />
                                            </label>

                                            <label htmlFor="lastName">
                                                <input type="text" className='input-new' onChange={(e) => setLastName(e.target.value)} />
                                            </label>
                                        </div>
                                        <div className='form-second-line'>
                                            <button type='button' className='button-edit' onClick={() => editUser()}>
                                                Save
                                            </button>
                                            <button type='button' className='button-edit' onClick={() => displayFormEdit()}>
                                                Cancel
                                            </button>
                                        </div>
                                    </form>
                                </>
                            ) : (
                                <>
                                    <h1>Welcome back<br />{stateReduxFirstName + " " + stateReduxLastName} !</h1>
                                    <button className="edit-button" onClick={() => displayFormEdit()}>Edit Name</button>
                                </>
                            )
                        }

                    </div>
                    <h2 className="sr-only">Accounts</h2>
                    {transactionsData.map((transaction) => {
					return <Card transaction={transaction} key={transaction._id} />;
				})}
                </main>
            </>
        )

    }

}
