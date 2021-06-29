import React from "react";
import styles from './BaseLayout.module.css';

export const BaseLayout = ({children}) => {
    return (
        <div className={styles.mainWrapper}>
            <header className={styles.header}> Header data
            <div className={styles.note}>
                <div className={styles.mx10}> wishlist: </div>
                <div className={styles.mx10}> note: </div>
            </div>
            </header>
            <main> {children} </main>
            <footer> Footer data</footer>
        </div>
    )
}
