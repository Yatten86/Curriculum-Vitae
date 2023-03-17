import React from 'react';
import styles from '../CSS/ProfileImg.module.css'

let ProfileImg = props => {
    return (
            <img className={styles.imgBox} src='./images/me.jpg' alt='Profile Image' />
    )
}

export default ProfileImg;