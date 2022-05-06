import axios from 'axios'; 

const apiUrl = axios.create({
    baseURL: `http://localhost:3001/api/v1`
}); 


class callApi {
 
    //find the token
    axiosToken = async (params) =>{
        const response = await apiUrl.post('/user/login', params);
        return response.data.body.token; 
    }

    //look up user information
     axiosProfile = async (token) =>{
        const response = await apiUrl.post('/user/profile', {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data.body;
    }

    //edit user information
    axiosPutUser = async (token,newUser) =>{
        const response = await apiUrl.put('/user/profile', newUser, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data.body;
    } 

}

export default new callApi();






