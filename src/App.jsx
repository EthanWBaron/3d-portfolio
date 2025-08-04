import React from 'react'
import Hero from './components/Hero.jsx'
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

const App = () => {
    return (
        <div className='min-h-screen w-full overflow-x-hidden'>
            <Hero/>
            <div
                className="relative"
                style={{
                    backgroundImage: "url('/projects-bg.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'overlay'
                }}>
                <div className="absolute inset-0 bg-slate-900/40"></div>
                <Projects />
                <Contact />
            </div>
        </div>
    )
}
export default App
