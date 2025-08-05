import {useEffect, useRef, useState} from "react";
import App from "../App.jsx";

const About = () => {
    const [isVisible, setIsVisible] = useState(false)
    const aboutRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting)
            },
            { threshold: 0.3 }
        )

        if (aboutRef.current) {
            observer.observe(aboutRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section
            ref={aboutRef}
            className="min-h-screen relative z-10 py-16 px-4 absolute inset-0 bg-slate-900/50"
            style={{
                backgroundImage: "url('/projects-bg.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'overlay'
            }}
        >
            <div className="max-w-6xl mx-auto">
                {/* Animated Header */}
                <div className={`text-center mb-16 transition-all duration-1000 ease-out ${
                    isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                }`}>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        About <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">Me</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className={`transition-all duration-1000 ease-out delay-200 ${
                        isVisible
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-0 -translate-x-8'
                    }`}>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full blur-3xl"></div>
                            <div>
                                <img
                                    src="/Icon.png"
                                    alt="Ethan Baron"
                                    className="w-full max-w-sm mx-auto rounded-xl shadow-2xl object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Text Section */}
                    <div className={`transition-all duration-1000 ease-out delay-400 ${
                        isVisible
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-0 translate-x-8'
                    }`}>
                        <div className="space-y-6">
                            <div className="prose prose-lg">
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    Hi there! I'm <span className="text-yellow-300 font-semibold">Ethan Baron</span>,
                                    a passionate full-stack developer with a love for creating innovative digital solutions.
                                    With expertise in modern web technologies like React, Node.js, and mobile development
                                    with Kotlin and Jetpack Compose, I bring ideas to life through clean, efficient code.
                                </p>
                                <br/>
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    I thrive on solving complex problems and building user-friendly applications that make
                                    a real difference. Whether it's developing responsive web applications, mobile apps,
                                    or working with databases and APIs, I'm always eager to take on new challenges and
                                    learn cutting-edge technologies.
                                </p>
                                <br/>
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    When I'm not coding, you'll find me skateboarding, training my dog or sitting at my PS4
                                    or laptop playing games.
                                </p>
                            </div>

                            {/* Skills/Technologies */}
                            <div className="mt-8">
                                <h3 className="text-xl font-semibold text-yellow-300 mb-4">Technologies I Work With</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['React', 'Node.js', 'Kotlin', 'JavaScript', 'TypeScript', 'Firebase', 'Tailwind CSS', 'Jetpack Compose', 'C#', 'WPF'].map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 text-sm bg-yellow-400/10 text-yellow-300 rounded-full border border-yellow-400/20 hover:bg-yellow-400/20 transition-colors"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About