import React from 'react';
import styles from '../CSS/Container.module.css';
import ContainerLeftSide from './ContainerLeftSide';
import ContainerRightSide from './ContainerRightSide';

let Container = props => {
    return (
        <div className={styles.container}>
            <ContainerLeftSide />
            <ContainerRightSide />
        </div>
    )
}

export default Container;