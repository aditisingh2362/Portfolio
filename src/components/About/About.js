import React from 'react';
import styles from './About.module.css';
import Skills from './Skills/Skills';
import Particles from 'react-particles-js';

function About() {
    return (
        <div className={styles.about}>
            <div className={styles.leftHalf}>
                <Particles 
                        canvasClassName={styles.example}
                        height="100%"
                        width="45%"
                        params={{
                            "particles": {
                                "number": {
                                    "value": 160,
                                    "density": {
                                        "enable": false
                                    }
                                },
                                "size": {
                                    "value": 3,
                                    "random": true,
                                    "anim": {
                                        "speed": 4,
                                        "size_min": 0.3
                                    }
                                },
                                "line_linked": {
                                    "enable": false
                                },
                                "move": {
                                    "random": true,
                                    "speed": 1,
                                    "direction": "top",
                                    "out_mode": "out"
                                }
                            },
                            "interactivity": {
                                "events": {
                                    "onhover": {
                                        "enable": true,
                                        "mode": "bubble"
                                    },
                                    "onclick": {
                                        "enable": true,
                                        "mode": "repulse"
                                    }
                                },
                                "modes": {
                                    "bubble": {
                                        "distance": 250,
                                        "duration": 2,
                                        "size": 0,
                                        "opacity": 0
                                    },
                                    "repulse": {
                                        "distance": 400,
                                        "duration": 4
                                    }
                                }
                            }
                        }}
                /> 
                <div className={styles.header}>
                </div>
                <p className={styles.heading}>ABOUT ME</p>
                <hr className={styles.bar}/>
                <p className={styles.para}>
                Oh, Hi there! </p>
                <p className={styles.para}>Ever since I was a little kid, building something to help others has always been my passion. This love of mine brought me to IIIT Gwalior as a BTech undergraduate. </p>
                <p className={styles.para}> I started my development journey in my first year, and since then I'm hooked with its beauty. The joy of learning and creating 
                projects that have the potential to change the society for better is beyond explanation. This is why I love taking part in hackathons and contributing to tech societies. </p>
                <p className={styles.para}> Whenever I'm free I love to cook, listen to Taylor Swift( very specific) or think about a new idea to work upon. :D</p>
                
            </div>
            <div className={styles.rightHalf}>
                <div className={styles.header}>
                    <hr className={styles.bar}/>
                    <h2 className={styles.title}>MY SKILLS</h2>
                </div>
                <br/><br/>
                <Skills/>
            </div>
        </div>
    );
}

export default About;