import NavBar from './NavBar';
import Hero from './Hero';
import About from './About';
import Courses from './courses';
import FAQSection from './Faq';
import TutorStudentForum from './TutorStudentForum';
import Instructors from './Instructors';
import Testimonials from './Testimonials';
import Footer from './Footer';
import StarRating from './StarRating';
import Register from './Students/Register';


function Homepage() {
    return ( 
        <>
        <NavBar/>
        <Hero />
        <About/>
        <Courses/>
        <FAQSection/>
        <Instructors/>
        <TutorStudentForum/>
        <Testimonials/>
        <Footer/>
        </>
     );
}

export default Homepage;