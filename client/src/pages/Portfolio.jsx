import Navbar from "./Navbar.jsx"
import Hero from "./Hero.jsx"
import About from "./About.jsx"
import Skills from "./Skills.jsx"
import Projects from "./Projects.jsx"
import Experiences from "./Experiences.jsx"
import Educations from "./Educations.jsx"
import Contact from "./Contact.jsx"


export default function Portfolio(){
    return (
        <div className="portfolio">
            <h1>Hello! World!</h1>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experiences />
            <Educations />
            <Contact />
        </div>
    )
    
} 