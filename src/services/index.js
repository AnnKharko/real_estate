// import axios from 'axios';
//
// const AXIOS = axios.create({
//     baseURL: 'http://localhost:5000',
// })
// class HomeService {
//    async getAllHomes(){
//       try {
//           const { data } = await AXIOS.get('/homes');
//
//           return data;
//       } catch (e) {
//           alert(e.response.data);
//       }
//     };
//
//     getHomeById(id){
//         return AXIOS.get(`/homes/${id}`)
//     }
// };
//
// export const homeService = new HomeService();
export * from './home-service';
export * from './realtor-service';
