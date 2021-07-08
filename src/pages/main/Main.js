import React, { useEffect } from "react";

import { HomeList } from '../../components';
import {useDispatch, useSelector} from "react-redux";
import {setHomes} from "../../redux";
import {useHistory} from "react-router-dom";

export const Main = () => {

    const {note, wishlist, homes} = useSelector(({note:{note}, wishlist:{wishlist}, homes: {homes}}) => ({note, wishlist, homes}));
    const history = useHistory();
    const dispatch = useDispatch();

    const onHomeClick = ({_id}) => {
        console.log('||||||||||||');
        console.log(_id);
        history.push(`/homes/${_id}`);
    };

    useEffect(() => {
                dispatch(setHomes());

    },[])

    return (
       <div>
           <p>{note.length} {wishlist.length} {homes.length}</p>
           <HomeList  items={homes} onHomeClick={onHomeClick}/>
       </div>
    )

}
