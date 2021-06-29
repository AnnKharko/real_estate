import React, {useEffect, useState} from "react";

import { HomeList } from '../components';
import { homeService } from '../services';
import styles from './home.module.css';
import {useDispatch, useSelector} from "react-redux";
import {setHomes} from "../redux";

export const Home = () => {

    const {note, wishlist, homes} = useSelector(({note:{note}, wishlist:{wishlist}, homes: {homes}}) => ({note, wishlist, homes}));

    const [homeList, setHomeList] = useState([]);
    const [isLoading, setIsLoading] = useState(null);

    const dispatch = useDispatch();

    const FetchHomes = async () => {
        try{
            setIsLoading(true);
            const data = await homeService.getAllHomes();

            setHomeList(data);
            dispatch(setHomes(data));
        }catch (e) {
            console.error(e);
        }
        finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        FetchHomes();
    },[])

    const renderLoadingIndicator = () => (
        <div className={styles.loading}> Loading...</div>
    )
    return (
       <div>
           <p>{note.length} {wishlist.length} {homes.length}</p>
           {isLoading || isLoading === null ? renderLoadingIndicator() : <HomeList items={homeList}/>}
           {/*< HomeList  items={homeList}/>*/}
       </div>
    )

}
