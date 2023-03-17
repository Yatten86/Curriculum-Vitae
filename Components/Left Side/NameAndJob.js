import React from 'react';
import styles from '../CSS/NameAndJob.module.css'


let NameAndJob = props => {
    return (
        <div className={styles.profileText}>
            <h2 className={styles.h2}>Petre Catalin Alexandru</h2>
            <span className={styles.span}>JUNIOR WEB DEVELOPER</span>
        </div>
    )
}

export default NameAndJob;