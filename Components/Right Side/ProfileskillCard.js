import React from "react";
import styles from "../CSS/ProfileskillCard.module.css";

let ProfileskillCard = props => {
    return (
        <div className={styles.about}>
                <h2 className={styles.title2}>Profesional Skills</h2>
                <div className={styles.box}>
                    <h4>Html</h4>
                    <div className={styles.percent}>
                        <div style={{width: `${85}%`}}></div>
                    </div>
                </div>
                <div className={styles.box}>
                    <h4>CSS</h4>
                    <div className={styles.percent}>
                        <div style={{width: `${70}%`}}></div>
                    </div>
                </div>
                <div className={styles.box}>
                    <h4>Javascript</h4>
                    <div className={styles.percent}>
                        <div style={{width: `${45}%`}}></div>
                    </div>
                </div>
                <div className={styles.box}>
                    <h4>React</h4>
                    <div className={styles.percent}>
                        <div style={{width: `${35}%`}}></div>
                    </div>
                </div>

            </div>
    )
};

export default ProfileskillCard;