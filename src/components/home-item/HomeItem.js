import React from "react";
import styles from './HomeItem.module.css';

export const HomeItem = ({home, AddToNote, AddToWishlist, isAddedToWishlist, isAddedToNote}) => {
    // console.log('|||||||||||||||');
    // console.log(home);
    // console.log('|||||||||||||||');
    return(
        <div className={styles.wrap}>
            <div className={styles.photo}> img</div>
            <h3> {home.buildingType}</h3>
            <h3> {home.district} district </h3>
            <h3> {home.street} street</h3>
            <button
                style={{background: isAddedToNote ? 'red' : 'green'}}
                onClick={() => AddToNote(home)}>{isAddedToNote ? 'Remove from note' : 'Add to note'}</button>
            <button
                style={{background: isAddedToWishlist ? 'red' : 'green'}}
                onClick={() => AddToWishlist(home)}> {isAddedToWishlist ? 'Remove from wishlist' : 'Add to wishlist'} </button>
        </div>
    )
}
