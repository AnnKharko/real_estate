import React from "react";
import {useHistory} from "react-router-dom";


export const RealtorItem = ({realtor:{name, phone, email, _id }}) => {
    const history = useHistory();
    const handleShowMore = (id) => {
    history.push(`/realtors/${id}`);
};

    return (
        <div>
            {name}
            <br/>
            {_id}
            <br/>
            phone: {phone}
            <br/>
            email: {email}
            <br/>
            <button onClick={() => handleShowMore(_id)}> Show more</button>
            <hr/>
        </div>
    )
};
