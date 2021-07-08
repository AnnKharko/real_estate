import { AXIOS } from './axiosConfig';

class RealtorService {
    async getAllRealtors(){
        try {
            const { data } = await AXIOS.get('/realtors');

            return data;
        } catch (e) {
            alert(e.response.data);
        }
    };

    getRealtorById(id){
        return AXIOS.get(`/realtors/${id}`)
    }
};

export const realtorService = new RealtorService();
