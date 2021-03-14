import React from 'react';
import styles from './Footer.module.css';
import { FiGithub } from "react-icons/fi";
import {FiLinkedin} from "react-icons/fi"

function Footer(props) {
    return (
        <div className={styles.footer}>
            <div className={styles.icon}>
                <a href="https://github.com/aditisingh2362/" className={styles.iconItem} target={"_blank"}><FiGithub/></a>
                <a href="https://www.linkedin.com/in/aditisingh2362/" className={styles.iconItem} target={"_blank"}><FiLinkedin/></a>
            </div>
            <p className={styles.line}>Made with <span role="img" aria-label="sheep">❤️</span> by Aditi Singh.</p>
            <p className={styles.email}>Email: aditisingh2362@gmail.com</p>
        </div>
    );
}

export default Footer;