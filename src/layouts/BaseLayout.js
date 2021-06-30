import React from "react";
import styles from './BaseLayout.module.css';
import {useSelector} from "react-redux";

export const BaseLayout = ({children}) => {
    const { note, wishlist } = useSelector(({note: {note}, wishlist: {wishlist}}) => ({ note, wishlist}));



    // const localWish = JSON.parse(localStorage.getItem('wishlist'));
    // const localNote = JSON.parse(localStorage.getItem('note'));
    // localStorage.setItem('wishlist', JSON.stringify(wishlist));
    // localStorage.setItem('note', JSON.stringify(note));



    return (
        <div className={styles.mainWrapper}>
            <header className={styles.header}> Header data
            <div className={styles.note}>
                <div className={styles.mx10}> wishlist: {wishlist.length}</div>
                <div className={styles.mx10}> note: {note.length} </div>
            </div>
            </header>
            <main> {children} </main>
            <footer> Footer data</footer>
        </div>
    )
}
