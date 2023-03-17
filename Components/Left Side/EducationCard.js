import React from 'react'
import styles from '../CSS/EducationCard.module.css'

let EducationCard = props => {
    return (
        <div className={styles.contactInf}>
                <h3 className={styles.title}>Education</h3>

                <ul>
                    <li>
                        <h5>Start year - End year</h5>
                        <h4>Degree</h4>
                        <h4>School name</h4>
                    </li>

                    <li>
                        <h5>Start year - End year</h5>
                        <h4>Degree</h4>
                        <h4>School name</h4>
                    </li>

                    <li>
                        <h5>Start year - End year</h5>
                        <h4>Degree</h4>
                        <h4>School name</h4>
                    </li>
                </ul>
            </div>
    )
}

export default EducationCard;