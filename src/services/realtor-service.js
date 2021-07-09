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

    async getRealtorById(id){
       try {
           const { data } = await AXIOS.get(`/realtors/${id}`);

           return data;
       } catch (e) {

       }
    }
}

export const realtorService = new RealtorService();
