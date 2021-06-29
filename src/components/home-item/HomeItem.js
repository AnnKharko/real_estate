import React from "react";
import styles from './HomeItem.module.css';

export const HomeItem = ({props}) => {
    console.log('|||||||||||||||');
    console.log(props);
    console.log('|||||||||||||||');
    return(
        <div className={styles.wrap}>
            <div className={styles.photo}> img</div>
            <h3> {props.buildingType}</h3>
            <h3> {props.district} district </h3>
            <h3> {props.street} street</h3>

        </div>
    )
}
