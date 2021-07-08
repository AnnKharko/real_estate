import React from "react";


export const RealtorItem = ({realtor:{name, phone, email, _id }}) => {

    return (
        <div>
            {name}
            <br/>
            {_id}
            <br/>
            phone: {phone}
            <br/>
            email: {email}
            <hr/>
        </div>
    )
};
