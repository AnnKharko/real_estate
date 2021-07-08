import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import { RealtorItem } from '../realtor-item';
import { setRealtors} from '../../redux';


export const RealtorList = () => {

    const realtors = useSelector(({realtors: {realtors}}) => realtors);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setRealtors())
    },[])


    return (
        <div>
            { realtors.map((realtor, index) => <RealtorItem key={index} realtor={realtor}/>)}

        </div>
    )
}
