import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { homeService } from "../../services";

export const HomeDetails = () => {
    const {id} = useParams();
    const [homeDetails, setHomeDetails] = useState(null);
    const getHomeDetails = async () => {
        const data = await homeService.getHomeById(id)
        console.log(data);

        setHomeDetails(data);
    };

   useEffect(() => {
        getHomeDetails();
   },[]);

    console.log(homeDetails);

    if (homeDetails === null) {
        return null;
    }

    return (
        <div> Hello from HomeDetails
            {homeDetails.house ? <h1> House </h1> :<h1> Apartment </h1>}
            <h1> {homeDetails.buildingType}</h1>
            <h1> {homeDetails.description}</h1>

            <h1> {homeDetails.district}</h1>
            <h1> {homeDetails.WallMaterial}</h1>
        </div>
    )
};
// {house: true, photos: Array(2), docs: Array(2), videos: Array(0), tags: Array(0), …}
// WallMaterial: "cehla"
// apartment: false
// buildingType: "polskiy liyks"
// createdAt: "2021-06-23T15:58:49.387Z"
// description: "wery beautiful house!"
// district: "Lychakivskyy"
// docs: (2) ["home/60d35a398d35f419f56d3202/doc/e62426e0-d43b-11eb-874d-d1710be94e32.docx", "home/60d35a398d35f419f56d3202/doc/e6253850-d43b-11eb-874d-d1710be94e32.pdf"]
// house: true
// kitchenArea: 20
// landArea: 250
// livingSpace: 200
// numberOfFloors: 2
// numberOfRooms: 5
// photos: (2) ["home/60d35a398d35f419f56d3202/photo/e61fba10-d43b-11eb-874d-d1710be94e32.png", "home/60d35a398d35f419f56d3202/photo/e6238aa0-d43b-11eb-874d-d1710be94e32.jpeg"]
// price: 200000
// pricePerM2: 20000
// realtor: "60b3e3f9f9f418ae14450bf6"
// street: "Zelena"
// tags: []
// totalArea: 250
// updatedAt: "2021-06-23T15:58:49.435Z"
// videos: []
// __v: 0
// _id: "60d35a398d35f419f56d3202"
