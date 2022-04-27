import axios from 'axios'; 

const apiUrl = axios.create({
    baseURL: `http://localhost:3001/api/v1`
}); 

//find the token
export const axiosToken = async (params) =>{
    try{
        const response = await apiUrl.post('http://localhost:3001/api/v1/user/login', params);
        return response.data.body.token;
    }catch(e){
        console.log(e);
    }
}

//look up user information
export const axiosProfile = async(token) =>{
    try{
        const response = await apiUrl.get('http://localhost:3001/api/v1/user/profile', {}, {
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
export const axiosPutUse = async (token,newUser) =>{
    try{
        const response = await apiUrl.put('http://localhost:3001/api/v1/user/profile', newUser, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data.body;
    }catch(e){
        console.log(e);
    }
}
  