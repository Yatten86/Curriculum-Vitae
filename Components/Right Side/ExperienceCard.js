import React from "react";
import styles from "../CSS/ExperienceCard.module.css"

let ExperienceCard = props => {
    return (
        <div className={styles.about}>
            <h2 className={styles.title2}>Experience</h2>
                <div className={styles.box}>
                    <div className={styles.year_company}>
                        <h5>year - year</h5>
                        <h5>Company name</h5>
                    </div>
                    <div className={styles.text}>
                        <h4>Position</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.year_company}>
                        <h5>year - year</h5>
                        <h5>Company name</h5>
                    </div>
                    <div className={styles.text}>
                        <h4>Position</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.year_company}>
                        <h5>year - year</h5>
                        <h5>Company name</h5>
                    </div>
                    <div className={styles.text}>
                        <h4>Position</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
        </div>
    )
};

export default ExperienceCard;