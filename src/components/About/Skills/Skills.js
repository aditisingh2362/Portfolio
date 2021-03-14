import React from 'react';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import styles from './Skills.module.css'
function Skills(props) {
    return (
        <div>
          <div className={styles.progress}>
            <p className={styles.bar}>C++ </p>
            <Progress
              percent={90}
              theme={{
                success: {
                  color: 'purple'
                },
                active: {
                  color: 'purple'
                },
                default: {
                  color: '#fbc630'
                }
              }}
            />
          </div>
          <div className={styles.progress}>
            <p className={styles.bar}>Machine Learning </p>
            <Progress
              percent={80}
              theme={{
                success: {
                  color: 'purple'
                },
                active: {
                  color: 'purple'
                },
                default: {
                  color: '#fbc630'
                }
              }}
            />
          </div>
          <div className={styles.progress}>
            <p className={styles.bar}>React Native </p>
            <Progress
              percent={90}
              theme={{
                success: {
                  color: 'purple'
                },
                active: {
                  color: 'purple'
                },
                default: {
                  color: '#fbc630'
                }
              }}
            />
          </div>
          <div className={styles.progress}>
            <p className={styles.bar}>React.js </p>
            <Progress
              percent={80}
              theme={{
                success: {
                  color: 'purple'
                },
                active: {
                  color: 'purple'
                },
                default: {
                  color: '#fbc630'
                }
              }}
            />
          </div>
          <div className={styles.progress}>
            <p className={styles.bar}>Node.js </p>
            <Progress
              percent={80}
              theme={{
                success: {
                  color: 'purple'
                },
                active: {
                  color: 'purple'
                },
                default: {
                  color: '#fbc630'
                }
              }}
            />
          </div>
          <div className={styles.progress}>
            <p className={styles.bar}>Python </p>
            <Progress
              percent={70}
              theme={{
                success: {
                  color: 'purple'
                },
                active: {
                  color: 'purple'
                },
                default: {
                  color: '#fbc630'
                }
              }}
              style={{color: 'white'}}
            />
          </div>
        </div>
    );
}

export default Skills;