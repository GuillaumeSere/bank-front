import { createSlice} from "@reduxjs/toolkit"


const connectionSlice= createSlice({
    name:'connection',
    initialState:{
        email:null,
        isConnected:false,
        token:null,
        rememberMe:false,
        firstName:null,
        lastName:null,
    },
    
    reducers:{
        getToken:(state,action)=>{
            return {
                ...state,
                email:action.payload.email,
                isConnected:true,
                token:`${action.payload.token}`
            }
            
        },
        getUser:(state,action)=>{
            return {
                ...state,
                firstName:action.payload.firstName,
                lastName:action.payload.lastName
            }
        },
        signOut:(state)=>{
            if(state.rememberMe){
                return{
                    ...state,
                    isConnected:false,
                    token:null,
                    firstName:null,
                    lastName:null,
                }
            }else{
                return{
                    ...state,
                    email:null,
                    isConnected:false,
                    token:null,
                    rememberMe:false,
                    firstName:null,
                    lastName:null,
                }
            }

        }
    }
})

const { actions, reducer } = connectionSlice
export const { getToken,getUser,signOut } = actions
export default reducer