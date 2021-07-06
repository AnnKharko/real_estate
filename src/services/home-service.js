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

    getHomeById(id){
        return AXIOS.get(`/homes/${id}`)
    }
};

export const homeService = new HomeService();
