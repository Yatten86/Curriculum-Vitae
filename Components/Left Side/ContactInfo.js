import React from 'react';
import styles from '../CSS/ContactInfo.module.css'
import ProfileImg from './ProfileImg';
import NameAndJob from './NameAndJob';


let ContactInfo = props => {
    return(
        <div className={styles.profileText}>
            <ProfileImg />
            <NameAndJob />
        </div>
    )
}


export default ContactInfo