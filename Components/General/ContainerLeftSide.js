import React from 'react';
import ContactInfo from '../Left Side/ContactInfo';
import styles from '../CSS/Container.module.css'
import ContactCard from '../Left Side/ContactCard';
import EducationCard from '../Left Side/EducationCard';
import LanguageCard from '../Left Side/LanguageCard';

let ContainerLeftSide = props => {
    return(
        <div className={styles.leftSide}>
                <ContactInfo />
                <ContactCard />
                <EducationCard />
                <LanguageCard />
        </div>
    )
}

export default ContainerLeftSide;