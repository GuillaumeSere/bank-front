import axios from 'axios'; 

const apiUrl = axios.create({
    baseURL: `http://localhost:3001/api/v1`
}); 

//find the token
export const axiosToken = async (params) =>{
    try{
        const response = await apiUrl.post('/user/login', params);
        return response.data.body.token;
    }catch(e){
        console.log(e);
    }
}

//look up user information
export const axiosProfile = async(token) =>{
    try{
        const response = await apiUrl.post('/user/profile', {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data.body;
    }catch(e){
        console.log(e);
    }
}

//edit user information
export const axiosPutUser = async (token,newUser) =>{
    try{
        const response = await apiUrl.put('/user/profile', newUser, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data.body;
    }catch(e){
        console.log(e);
    }
}
  