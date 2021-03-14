/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Particles from 'react-particles-js';
import styles from './ProjectContent.module.css'

function ProjectContent(props) {
    return (
        <Flippy
            flipOnHover={true} // default false
            flipDirection="horizontal" 
            style={{ width: '255px', height: '355px', padding:'3px', borderRadius: '10px', alignContent: 'center' }} /// these are optional style, it is not necessary
        >
            <FrontSide
            className={styles.flippyFront}
            >
                <img src={props.image} alt="loading..." className={styles.image}/>
            <p className={styles.title}>{props.title}</p>
                <Particles 
                        canvasClassName={styles.example}
                        height="100%"
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
            
            </FrontSide>
            <BackSide
            className={styles.flippyBack}>
            <a href={props.link} target={"_blank"}>Check it out!</a>
            </BackSide>
        </Flippy>
    );
}

export default ProjectContent;