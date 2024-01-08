import React from 'react'
import imgone from './img/web_design.jpeg';
import imgtwo from './img/web_development.jpeg';
import imgthree from './img/mern.jpeg';
import imgfour from './img/mobile.jpeg';
import imgfive from './img/graphics.jpeg';
import imgsix from './img/uiux.jpeg';
import imgseven from './img/video.jpeg';
import imgeight from './img/cyber.jpeg';
import './css/courses.css';
function Courses() {
    const courses = {
       imgOne:imgone,
       imgTwo:imgtwo,
       imgThree:imgthree,
       imgFour: imgfour,
       imgFive: imgfive,
       imgSix: imgsix, 
       imgSeven: imgseven,
       imgEight: imgeight
    }
  return (
    <>
    <h1>Courses</h1>
    <div id='courses' className='courses'>
        <div className="web_design">
            <img src={courses.imgOne} alt="" />
            <h2>Web Design</h2>
            <button style={{padding:'10px', backgroundColor:'blue', color:'#fff', border: 'none', borderRadius:'5px', marginTop:'5px'}}>Get Started</button>
        </div>
        <div className="web_development">
            <img src={courses.imgTwo} alt="" />
            <h2>Web Development</h2>
            <button style={{padding:'10px', backgroundColor:'blue', color:'#fff', border: 'none', borderRadius:'5px', marginTop:'5px'}}>Get Started</button>
        </div>
        <div className="mern">
            <img src={courses.imgThree} alt="" />
            <h2>Web Application</h2>
            <button style={{padding:'10px', backgroundColor:'blue', color:'#fff', border: 'none', borderRadius:'5px', marginTop:'5px'}}>Get Started</button>
        </div>
        <div className="mobile">
            <img src={courses.imgFour} alt="" />
            <h2>Android / iOS App</h2>
            <button style={{padding:'10px', backgroundColor:'blue', color:'#fff', border: 'none', borderRadius:'5px', marginTop:'5px'}}>Get Started</button>
        </div>
        <div className="graphics">
            <img src={courses.imgFive} alt="" />
            <h2>Graphics Design</h2>
            <button style={{padding:'10px', backgroundColor:'blue', color:'#fff', border: 'none', borderRadius:'5px', marginTop:'5px'}}>Get Started</button>
        </div>
       <div className="uiux">
        <img src={courses.imgSix} alt="" />
        <h2>UI/UX Design</h2>
        <button style={{padding:'10px', backgroundColor:'blue', color:'#fff', border: 'none', borderRadius:'5px', marginTop:'5px'}}>Get Started</button>
       </div>
       <div className="video">
        <img src={courses.imgSeven} alt="" />
        <h2>Video Editing</h2>
        <button style={{padding:'10px', backgroundColor:'blue', color:'#fff', border: 'none', borderRadius:'5px', marginTop:'5px'}}>Get Started</button>
       </div>
       <div className="cyber">
        <img src={courses.imgEight} alt="" />
        <h2>Cyber Security</h2>
        <button style={{padding:'10px', backgroundColor:'blue', color:'#fff', border: 'none', borderRadius:'5px', marginTop:'5px'}}>Get Started</button>
       </div>
    </div>
    </>
  )
}

export default Courses
