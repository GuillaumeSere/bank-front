import axios from 'axios'; 

const apiUrl=`http://localhost:3001/api/v1`; 

//find the token
export function axiosToken(params){
    return axios.post(apiUrl+'/user/login', params)
        .then(response=>{
            return response.data.body.token
        })

}

//look up user information
export function axiosProfile(token){
    return axios.get(apiUrl+'/user/profile',{},{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
        .then(response=>{
            return response.data.body
        })

}

//edit user information
export function axiosPutUser(token,newUser){
    return axios.put(apiUrl+'/user/profile',newUser,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
        .then(response=>{
            return response.data.body
        })

}