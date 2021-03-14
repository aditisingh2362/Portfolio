import React, { Component } from "react";
import ReactTextTransition from "react-text-transition";
import styles from './Tagline.module.css';

const paragraphs = [
  "React Native Developer.  ",
  "Incoming SWE Intern at Google.  ",
];

class Tagline extends Component {
  state = {
    paragraphIndex: 0
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        paragraphIndex: this.state.paragraphIndex + 1
      });
    }, 5000);
  }

  render() {
    return (
        <section>
          <div  className={styles.helloLine}>
            
            <ReactTextTransition
              text={paragraphs[this.state.paragraphIndex % paragraphs.length]}
              className={styles.designation}
            />
            {/* <hr className={styles.helloBar}/> */}
          </div>
        </section>
    );
  }
}

export default Tagline;
