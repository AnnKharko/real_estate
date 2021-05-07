import axios from 'axios';

const AXIOS = axios.create({
    baseURL: 'http://localhost:5000',
    // headers: {
    //     Authorization: ' Bearer '
    // }
})

class HomeService {
   async getAllHomes(){
       const { data } = await AXIOS.get('/homes')
       return data;
    };

    getHomeById(id){
        return AXIOS.get(`/homes/${id}`)
    }
};

export const homeService = new HomeService();
