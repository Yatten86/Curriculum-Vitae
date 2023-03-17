import React from 'react';
import styles from '../CSS/ProfileCard.module.css'

let ProfileCard = props => {
    return (
    <div className={styles.about}>
        <h2 className={styles.title2}>Profile</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
            consequat. <br />
            <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>

    )
};

export default ProfileCard;