import React, {useEffect, useState} from "react";

import { HomeList } from '../components';
import { homeService } from '../services';
import styles from './home.module.css';

export const Home = () => {
    const [homeList, setHomeList] = useState([]);
    const [isLoading, setIsLoading] = useState([null]);
    const FetchHomes = async () => {
        try{
            setIsLoading(true)
            const data = await homeService.getAllHomes();
            console.log(data);
            setHomeList(data);
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
           {isLoading || isLoading === null ? renderLoadingIndicator() : <HomeList/>}
           < HomeList />
       </div>
    )

}
