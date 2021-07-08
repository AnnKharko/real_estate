import { AXIOS } from './axiosConfig';

class HomeService {
    async getAllHomes(){
        try {
            const { data } = await AXIOS.get('/homes');

            return data;
        } catch (e) {
            alert(e.response.data);
        }
    };

    async getHomeById(id){
       try {
           const { data } = await AXIOS.get(`/homes/${id}`);
           return data;
       } catch (e) {
           alert(e.response.data);
       }
    };
}

export const homeService = new HomeService();
