import React, { useEffect, useState } from 'react';
import { Chrono } from "react-chrono";
import Particles from 'react-particles-js';
import styles from './Experience.module.css';


const items = [{
    title: "October 2019 – November 2019",
    cardTitle: "Machine Learning Intern",
    cardSubtitle:"Vaidik Technology Pvt. Ltd.",
    cardDetailedText:"Preprocessed and cleaned daily activity records gathered using Google activity recognition API.",

  }, {
    title: "January 2020 – April 2020",
    cardTitle: "Data Science Intern",
    cardSubtitle:"Caliche Private Limited",
    cardDetailedText:"Developed transformation pipelines and Machine Learning based module to predict the ratio of primary and secondary recovery of Hydrocarbons.",

  },
  {
    title: "May 2020 – June 2020",
    cardTitle: "Machine Learning Intern",
    cardSubtitle:"Zubi Infotech Private Limited",
    cardDetailedText:"Developed a resume parsing system using NER tagging and Rule based classification.",

  },
  {
    title: "August 2020 – Present",
    cardTitle: "Software Developer Intern",
    cardSubtitle:"Boozingo",
    cardDetailedText:"Developed and integrated User Interfaces using React Native, working on microservice architecture using Node.js and Sequelize.",

  },
];


function Experience(props) {
    const queryToMatch = '(min-width: 600px)';
    const [matches, setMatches] = useState(window.matchMedia(queryToMatch).matches);
    useEffect(() => {
        const media = window.matchMedia(queryToMatch);
        // If there is a change update the match
        if (media.matches !== matches) setMatches(media.matches);
        // Add the listener to update the state
        const listener = () => setMatches(media.matches);
        media.addEventListener('change', listener);
        return () => media.addEventListener('change', listener);
      }, [matches, queryToMatch]);
    return (
        <div className={styles.experience}>
          <Particles 
                        canvasClassName={styles.example}
                        height="120%"
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
            <div className={styles.header}>
                <hr className={styles.bar}/>
                <h2 className={styles.title}>EXPERIENCE</h2>
                <hr className={styles.bar}/>
            </div>
           
            
               {matches?
               <div style={{ width: "60%", height: "100vh"}}>
                    <Chrono
                items={items}
                // slideShow
                mode="VERTICAL_ALTERNATING"
                disableNavOnKey={true}
                scrollable={false}
                cardHeight={400}
                theme={{primary: "purple", secondary: "white", cardBgColor: "white", cardForeColor: "black" }}
                />
                </div>
                :
                <div style={{ width: "300px", height: "500px"}}>
                <Chrono
                  cardPositionHorizontal="TOP"

                items={items}
                // slideShow
                mode="HORIZONTAL"
                // disableNavOnKey={true}
                // scrollable={true}
                // cardHeight={400}
                // itemWidth={200}
                theme={{primary: "purple", secondary: "white", cardBgColor: "white", cardForeColor: "black" }}
                />
                </div>
                }
        </div>
    );
}

export default Experience;