import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { realtorService } from "../../services";

export const RealtorInfo = () => {
    const {id} = useParams();
    const [realtorInfo, setRealtorInfo] = useState();

    const getRealtorInfo = async () => {
        const data = await realtorService.getRealtorById(id);
        setRealtorInfo(data);
    };

    useEffect(() => {
        getRealtorInfo();
    })

    if ( !realtorInfo) {
        return null;
    }

    return (
       <div>
           <h1> Hello Realtor info</h1>
           <h1> {realtorInfo._id}</h1>
       </div>
    )
}
