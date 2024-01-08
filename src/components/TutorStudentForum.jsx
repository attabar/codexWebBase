import React from 'react'
import './css/TutorStudentForum.css'
// import { Link } from 'react-router-dom'
function TutorStudentForum() {
  return (
    <div id='tutor-student-forum-container'>
    <h1>Registration Section</h1>
    <div className="become-a-tutor">
        <h2>Become A Tutor at CodeX</h2>
        <p className='become-a-tutor-paragraph'>Welcome to codeX, where we believe in the power of education to transform lives. As we continue to grow, we are seeking experienced and passionate individuals to join our esteemed team of tutors. If you have a deep understanding of technology, a commitment to excellence in education, and a desire to inspire the next generation of tech enthusiasts, we invite you to become a part of our community.</p>
        <div className="buttons">
            <button>Register</button><button>Login</button>
        </div>
    </div>
<hr></hr>
    <div className="become-a-tutor" style={{marginTop:'25px'}}>
        <h2>Embark on Your Tech Journey with CodeX - Become a Student</h2>
        <p className='become-a-tutor-paragraph'>Welcome to codeX, where innovation meets education. Are you ready to dive into the exciting world of technology and gain skills that will set you on a path to success? Join our community of learners and discover a dynamic and supportive environment that empowers you to thrive in the digital age.</p>
        <div className="buttons">
            <button>Register</button><button>Login</button>
        </div>
    </div>

    <div className="become-a-tutor" style={{marginTop:'25px'}}>
        <h2> CodeX Forum: Connect, Collaborate, and Learn Together

</h2>
        <p className='become-a-tutor-paragraph'>Welcome to the heart of our learning community – the CodeX Forum. This dynamic space is designed to foster collaboration, discussion, and knowledge-sharing among our students, tutors, and tech enthusiasts. Join the conversation, expand your network, and enhance your learning experience in the world of technology.</p>
        <div className="buttons">
            <button>Register</button><button>Login</button>
        </div>
    </div>
    </div>
  )
}

export default TutorStudentForum
