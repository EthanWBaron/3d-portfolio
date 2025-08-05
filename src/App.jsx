import React from 'react'
import Hero from './components/Hero.jsx'
import Projects from "./components/Projects.jsx"
import Contact from "./components/Contact.jsx"
import About from "./components/About.jsx"
import { Analytics } from '@vercel/analytics/react';


const App = () => {
    return (
        <div className='min-h-screen w-full overflow-x-hidden'>
            <Hero/>
            <Projects />
            <About/>
            <Contact />
            <Analytics />
        </div>
    )
}
export default App