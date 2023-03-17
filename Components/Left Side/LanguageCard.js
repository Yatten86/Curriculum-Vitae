import React from 'react';
import styles from '../CSS/LanguageCard.module.css'

let LanguageCard = props => {
    return (
        <div className={styles.contactInf}>
            <h3 className={styles.title}>Languages</h3>
            <ul>
                <li>
                    <span className = "text">Romanian</span>
                    <span className={styles.percent}>
                        <div style={{width: `${100}%`}}></div>
                    </span>
                </li>

                <li>
                    <span className = {styles.text}>English</span>
                    <span className={styles.percent}>
                        <div style={{width: `${92}%`}}></div>
                    </span>
                </li>

                <li>
                    <span className = {styles.text}>Serbian</span>
                    <span className={styles.percent}>
                        <div style={{width: `${45}%`}}></div>
                    </span>
                </li>

                <li>
                    <span className = {styles.text}>German</span>
                    <span className={styles.percent}>
                        <div style={{width: `${0}%`}}></div>
                    </span>
                </li>
            </ul>
            </div>
    )
}

export default LanguageCard;