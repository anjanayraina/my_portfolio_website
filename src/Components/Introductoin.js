import React from 'react'
import '../Styles/Introductoin.css'
import resume from '../Photos/resume.png'
import myImage from '../Photos/myImage.png'
import leetcode from '../Photos/leetcode.png'
import github from '../Photos/Github.png'
import linkedin from '../Photos/Linkedin.png'
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
    <div className = "introSubText">Useful and Cool Dapps. I am quite proficient in Android App Development as well </div>
    {/* <img className = "resumeImage" src ={resume}/> */}
    <div className = "CVtext">Download CV</div>
    <img src ={leetcode} className = "leetcode" />
    <div className = "leetcodeText">Leetcode ID</div>
    <img src ={github} className = "github" />
    <img src ={linkedin} className = "linkedin" />
    
    </div>
    </div>

    <div className = "rightPart">
      <img src ={myImage}/>
      
    </div>
    </div>
  )
}

export default Introductoin