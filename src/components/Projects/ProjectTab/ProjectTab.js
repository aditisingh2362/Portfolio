/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import ProjectContent from '../ProjectContent/ProjectContent';
import styles from './ProjectTab.module.css'

class ProjectTab extends React.Component {
    render(){
      return(
        <div className={styles.tabs}>
         <Tabs>
           {/* <Tab label="Everything">
             <div className={styles.tabContent}>
                <ProjectContent title="Warriors" link="https://github.com/aditisingh2362/Warriors"/>
                <ProjectContent title="Spotify Clone" link="https://github.com/aditisingh2362/SpotifyClone"/>
                <ProjectContent title="Secure Store" link="https://github.com/aditisingh2362/secure-store-frontend"/>
                <ProjectContent title="Portfolio" link="https://github.com/aditisingh2362/Portfolio"/>
                <ProjectContent title="911 calls association rule mining" link="https://github.com/aditisingh2362/911-Emergency-Calls"/>
                <ProjectContent title="Smart Traffic Monitoring System" link="https://github.com/aditisingh2362/Smart-Traffic-Monitoring-System"/>
             </div>
           </Tab> */}
           <Tab label="React Native">
             <div className={styles.tabContent}>
                <ProjectContent title="Warriors" link="https://github.com/aditisingh2362/Warriors" image="logo192.png"/>
                <ProjectContent title="Spotify UI Clone" link="https://github.com/aditisingh2362/SpotifyClone" image="images/Splash.jpeg"/>
             </div>
           </Tab>
           <Tab label="React">
             <div className={styles.tabContent}>
                <ProjectContent title="Secure Store" link="https://github.com/aditisingh2362/secure-store-frontend" image="logo192.png"/>
                <ProjectContent title="Portfolio" link="https://github.com/aditisingh2362/Portfolio" image="logo192.png"/>
             </div>
           </Tab>
           <Tab label="ML/CV">
             <div className={styles.tabContent}>              
                <ProjectContent title="911 calls association rule mining" link="https://github.com/aditisingh2362/911-Emergency-Calls" image="logo192.png"/>
                <ProjectContent title="Smart Traffic Monitoring System" link="https://github.com/aditisingh2362/Smart-Traffic-Monitoring-System" image="logo192.png"/>
                <ProjectContent title="Movie Recommendation System" link="https://github.com/aditisingh2362/Movie-Recommendation-System" image="logo192.png"/>
             </div>
           </Tab>
           <Tab label="Publications">
             <div className={styles.tabContent}>
              <ProjectContent title="Rich Text Editor in React Native" link="https://medium.com/tech-iiitg/implementing-a-rich-text-editor-in-react-native-c6dd180d1d14" image="logo192.png"/>
             </div>
           </Tab>
         </Tabs>
        </div>
        
      )
    }
  }
  
  class Tabs extends React.Component{
    state ={
      activeTab: this.props.children[0].props.label
    }
    changeTab = (tab) => {
      this.setState({ activeTab: tab });
    };
    render(){
      
      let content;
      let buttons = [];
      return (
        <div>
          {React.Children.map(this.props.children, child =>{
            buttons.push(child.props.label)
            if (child.props.label === this.state.activeTab) content = child.props.children
          })}
           
          <TabButtons activeTab={this.state.activeTab} buttons={buttons} changeTab={this.changeTab}/>
          <div className={styles.tabButtons}>{content}</div>
          
        </div>
      );
    }
  }
  
  const TabButtons = ({buttons, changeTab, activeTab}) =>{
     
    return(
      <div className={styles.tabButtons}>
      {buttons.map(button =>{
         return <button className={button === activeTab? styles.active: null} onClick={()=>changeTab(button)}>{button}</button>
      })}
      </div>
    )
  }
  
  const Tab = props =>{
    return(
      <React.Fragment>
        {props.children}
      </React.Fragment>
    )
  }
   
  
export default ProjectTab;