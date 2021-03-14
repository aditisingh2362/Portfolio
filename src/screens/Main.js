import React from 'react'
import About from '../components/About/About';
import Achievements from '../components/Achievements/Achievements';
import Cover from '../components/Cover/Cover';
import Experience from '../components/Experience/Experience';
import Footer from '../components/Footer/Footer';
import Projects from '../components/Projects/Projects';


const Main = ({element}) => {
    return (
        <div ref={element}>
            <div id='home'>
                <Cover/>
            </div>
            <div id="about">
                <About/>
            </div>
            <div id="experience">
                <Experience/>
            </div>
            <div id="projects">
                <Projects/>
            </div>
            <div id="achievements">
                <Achievements/>
            </div>
            <Footer/>
        </div>
    )
}

export default Main