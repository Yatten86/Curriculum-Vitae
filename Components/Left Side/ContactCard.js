import React from 'react'
import styles from '../CSS/ContactCard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons'



let ContactCard = props => {
    return (
<div className={styles.contactInf}>
                <h3 className={styles.title}>Contact Info</h3>
                <ul className={styles.ul}>
                    {/* <!--phone number--> */}
                    <li className={styles.li}>
                        <span>
                            <FontAwesomeIcon icon={faPhone} className={styles.icon} />
                        </span>
                        <span className = "text"> +40 7xx xxx xxx</span>
                    </li>
                    {/* <!--e-mail adress--> */}
                    <li className={styles.li}>
                        <span>
                            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
                        </span>
                        <span className = "text"> xxxxxxxxxxx@gmail.com</span>
                    </li>
                    {/* <!--web site--> */}
                    <li className={styles.li}>
                        <span>
                            <FontAwesomeIcon icon={faGlobeEurope} className={styles.icon}/>
                        </span>
                        <span className = "text"> www.xxxxxxxx.com</span>
                    </li>
                    {/* <!--linked in address--> */}
                    <li className={styles.li}>
                        <span>
                            <FontAwesomeIcon icon={faLink} className={styles.icon} />
                        </span>
                        <span className="text link"> www.linkedin.com/__</span>
                    </li>
                    {/* <!--address--> */}
                    <li className={styles.li}>
                        <span>
                            <FontAwesomeIcon icon={faMapMarker} className={styles.icon} />
                        </span>
                        <span className = "text"> Craiova, Dolj, Romania</span>
                    </li>
                </ul>
            </div>
    )
}

export default ContactCard;