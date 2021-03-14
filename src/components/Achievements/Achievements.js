import React from 'react';
import Particles from 'react-particles-js';
import styles from './Achievements.module.css';
import Content from './Content/Content';

function Achievements(props) {
    return (
        <div className={styles.achievements}>
            <Particles 
                        canvasClassName={styles.example}
                        height="90%"
                        width="100%"
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
            <h2 className={styles.title }>ACHIEVEMENTS</h2>
            <div className={styles.cards}>
                <Content heading="1st Prize" para="Hack With CW Internation Hackathon 2020"/>
                <Content heading="1st Prize" para="Fliplearn EdTech Hackathon 2020"/>
                <Content heading="1st Prize" para="AASF Winter Projects 2020"/>
                <Content heading="1st Prize" para="Technex Hackathon 2020"/>
                <Content heading="2nd Prize" para="AASF inter college hackathon 2019"/>
                <Content heading="Top Performer" para="Mobility Developer Tech camp 2019"/>
                <Content heading="State-Level winner" para="INSPIRE Awards 2015"/>
            </div>
        </div>
    );
}

export default Achievements;