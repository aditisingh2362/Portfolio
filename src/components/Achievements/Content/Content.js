import React from 'react';
import { FiActivity } from "react-icons/fi";
import styles from './Content.module.css'

function Content(props) {
    return (
        <div className={styles.content}>
            <span className={styles.icon}><FiActivity/></span>
            <h4 className={styles.heading}>{props.heading}</h4>
            <p className={styles.para}>{props.para}</p>
        </div>
    );
}

export default Content;