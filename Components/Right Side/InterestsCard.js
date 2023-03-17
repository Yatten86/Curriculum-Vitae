import react from "react"
import styles from "../CSS/InterestsCard.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faChartArea, faFutbol, faBook } from '@fortawesome/free-solid-svg-icons';



let InterestCard = props => {
    return (
        <div className={styles.interest}>
                <h2 className={styles.title2}>Interest</h2>
                <ul>
                    <li><FontAwesomeIcon className={styles.fa} icon={faGamepad} /> Gaming</li>
                    <li><FontAwesomeIcon className={styles.fa} icon={faChartArea} /> Crypto</li>
                    <li><FontAwesomeIcon className={styles.fa} icon={faFutbol}/> Sports</li>
                    <li><FontAwesomeIcon className={styles.fa} icon={faBook} /> Reading</li>
                </ul>
            </div>
    )
}

export default InterestCard;