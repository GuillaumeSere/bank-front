import connectionReduce from './data/connexion';
import { configureStore } from '@reduxjs/toolkit'; 

export default configureStore({
    reducer:{
        connection: connectionReduce,
    }
})