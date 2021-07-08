import React from 'react';

import { HomeItem } from  '../home-item';
import { useDispatch, useSelector } from 'react-redux';
import { toggleHomeInNote, toggleHomeInWishlist} from '../../redux';


export const HomeList = ({items, onHomeClick}) => {

    const dispatch = useDispatch();
    const {wishlist, note} = useSelector(({wishlist:{ wishlist}, note: {note}}) => ({wishlist, note}))

    const AddToNote = (home) =>{
        dispatch(toggleHomeInNote(home))
    };
    const AddToWishlist = (home) => {
        dispatch(toggleHomeInWishlist(home))
    };

    return (
        <div>
            {items.map(item =>(
                <div  onClick={() => onHomeClick(item)}
                    key={item._id}>
                    <HomeItem
                        home={item}
                        AddToNote={AddToNote}
                        AddToWishlist={AddToWishlist}
                        isAddedToWishlist = {!!wishlist.find(({_id}) => _id === item._id )}
                        isAddedToNote = {!!note.find(({_id}) => _id === item._id )}
                    />
                </div>
                )
            )}
        </div>
    )
};
