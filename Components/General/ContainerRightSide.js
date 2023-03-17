import React from 'react';
import styles from '../CSS/Container.module.css';
// import Button from '../Right Side/Button';
import ExperienceCard from '../Right Side/ExperienceCard';
import InterestCard from '../Right Side/InterestsCard';
import ProfileCard from '../Right Side/ProfileCard';
import ProfileskillCard from '../Right Side/ProfileskillCard';

let ContainerRightSide = props => {
    return (
        <div className={styles.rightSide}>
            <ProfileCard />
            <ExperienceCard />
            <ProfileskillCard />
            <InterestCard />
            {/* <Button /> */}
        </div>
    )
}

export default ContainerRightSide;