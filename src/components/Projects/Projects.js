import React from 'react';
import styles from './Projects.module.css';
import ProjectTab from './ProjectTab/ProjectTab';

function Projects(props) {
    return (
        <div className={styles.projects}>
            <div className={styles.leftHalf}>
               <span className={styles.horizontalText}> PROJECTS</span>
            </div>
            <div className={styles.rightHalf}>
                <ProjectTab/>
            </div>
        </div>
    );
}

export default Projects;