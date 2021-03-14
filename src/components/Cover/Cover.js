/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styles from'./Cover.module.css'
import Image from '../../assests/gifs/Main_cover.gif'
import * as VFX from 'react-vfx';
import Name from '../../assests/images/name.png'
import { FiGithub } from "react-icons/fi";
import {FiLinkedin} from "react-icons/fi"
import Button from '../Button/Button';

const Cover = () => {
    return (
            <VFX.VFXProvider>
                <section className={styles.cover}>
                    <div className={styles.coverScreen}>
                        <div className={styles.leftHalf}>
                            <img src={Image} alt="loading..." className={styles.coverImage}/>
                        </div>
                        <div className={styles.rightHalf}>
                            <div className={styles.helloLine}>
                                <hr className={styles.helloBar}/>
                                <span className={styles.helloText}>Hello, I'm</span>
                            </div>
                            <VFX.VFXImg src={Name} alt="image" shader="rgbShift" className={styles.nameImage}/>
                            <p className={styles.para}>I'm a pre-final year student studying at IIIT Gwalior.</p>
                            <p className={styles.para}> I love working on new technologies and building products to help society</p>
                            <p className={styles.para}>  move forward for better. Scroll down to know more about me and my interests.</p>
                            <div className={styles.icon}>
                                <a href="https://github.com/aditisingh2362/" className={styles.iconItem} target={"_blank"}><FiGithub/></a>
                                <Button/>
                                <a href="https://www.linkedin.com/in/aditisingh2362/" className={styles.iconItem} target={"_blank"}><FiLinkedin/></a>
                            </div>
                        </div>
                    </div>
                </section>
            </VFX.VFXProvider>
    )
}

export default Cover