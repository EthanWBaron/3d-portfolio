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
                backgroundImage: "url('/about-bg.webp')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'overlay'
            }}
        >
            <div className="max-w-6xl mx-auto">
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
                                    src="/Icon.webp"
                                    alt="Ethan Baron"
                                    className="w-full max-w-sm mx-auto rounded-xl shadow-2xl object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <div className={`transition-all duration-1000 ease-out delay-400 ${
                        isVisible
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-0 translate-x-8'
                    }`}>
                        <div className="space-y-6">
                            <div className="prose prose-lg">
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    Hey, I’m <span className="text-yellow-300 font-semibold">Ethan Baron</span>,
                                    a full-stack developer who loves turning ideas into real, working products. I work with
                                    modern tools like React, Node.js for web, Kotlin and Jetpack Compose for Android and C# WPF
                                    for desktop applications.
                                </p>
                                <br/>
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    I enjoy tackling problems and creating apps to solve them.
                                    From responsive web platforms to mobile apps to desktop and database/API work, I’m always looking
                                    for a chance to learn something new.
                                </p>
                                <br/>
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    When I’m not coding, you’ll probably find me skating, training my dog, or gaming on my
                                    PS4 or my laptop.
                                </p>

                            </div>

                            <div className="mt-8">
                                <h3 className="text-xl font-semibold text-yellow-300 mb-4">Technologies I Work With</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['React', 'Node.js', 'Kotlin', 'JavaScript', 'ThreeJS', 'Firebase', 'Tailwind CSS', 'Jetpack Compose', 'C#', 'WPF'].map((tech, index) => (
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