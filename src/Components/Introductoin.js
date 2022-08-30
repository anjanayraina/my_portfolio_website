import React from 'react'
import '../Styles/Introductoin.css'
import resume from '../Photos/resume.png'
function Introductoin() {
  return (
    <div className = "fullDivWrapper">
    <div className = "leftPart">
    <div className = "backgroundScreenLeft"></div>
    <div className = "nameAndIntroWrapper">
    <div className = "name">Anjanay Raina</div>
    
    <div className = "introText">Full Stack Blockchain Developer &</div>
    <div className = "introText">Front-End Web Developer</div>
    <div className = "introSubText">Hey there!! , I am a Front-End Web and Blockchain Developer focused on creating</div>
    <div className = "introSubText">Useful and Cool Dapps.I am quite proficient in Android App Development as well </div>
    <img className = "resumeImage" src ={resume}/>
    </div>
    </div>
    </div>
  )
}

export default Introductoin