import React, {useEffect, useRef, useState} from 'react'
import { ExternalLink, Github } from 'lucide-react'
import {Card, CardHeader,CardTitle,CardDescription, CardContent} from './Card'

const Projects = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [cardsVisible, setCardsVisible] = useState([])
    const sectionRef = useRef(null)
    const cardsRef = useRef([])

    const projects = [
        {
            id: 1,
            title: "AniRec",
            description: " Built a lightweight animation discovery tool with React + Vite, integrating the TMDB API." ,
            image: "/Ani-Rec.webp",
            tech: ["React", "Node.js", "HTML/CSS", "Javascript"],
            github: "https://github.com/EthanWBaron/AniRec",
            live: "https://ani-rec-nine.vercel.app/",
            featured: true
        },
        {
            id: 2,
            title: "MarketTrack Staff",
            description: "Scanner App for Stock Taking and Sales",
            image: "/MarketTrack-Staff.webp",
            tech: ["Kotlin", "Jetpack Compose", "Firebase", "Google MLKit"],
            tall: true
        },
        {
            id: 3,
            title: "Father's Heart Android",
            description: "Collaborated in a team to build Android Application for event " +
                "tracking, donations and volunteering.",
            image: "/Fathers-Heart-Android.webp",
            tech: ["Kotlin", "Jetpack Compose", "Firebase"],
            tall: true
        },
        {
            id: 4,
            title: "Portfolio Website",
            description: "Responsive portfolio showcasing modern web development techniques.",
            image: "/Portfolio.webp",
            tech: ["React", "Tailwind", "ThreeJS"],
            github: "https://github.com/EthanWBaron/3d-portfolio",
            live: "https://ethanbaron.vercel.app"
        },
        {
            id: 5,
            title: "MarketTrack Admin",
            description: "Responsive Admin Dashboard for the MarketTrack Stock App",
            image: "/MarketTrack-Admin.webp",
            tech: ["Javascript", "ChartJS", "HTML/CSS", "Firebase"],
            wide: true
        },
        {
            id: 6,
            title: "Father's Heart Desktop",
            description: "Developed a WPF desktop app (C#) admin application for event " +
                "tracking, donations and volunteering.",
            image: "/Fathers-Heart-Desktop.webp",
            tech: ["C#", "WPF", "Firebase"]
        }
    ]

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        const cardObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        const cardIndex = cardsRef.current.indexOf(entry.target)
                        if (cardIndex !== -1) {
                            setTimeout(() => {
                                setCardsVisible(prev => [...prev, cardIndex])
                            }, cardIndex * 100) // Stagger animation
                        }
                    }
                })
            },
            { threshold: 0.2 }
        )

        cardsRef.current.forEach(card => {
            if (card) cardObserver.observe(card)
        })

        return () => cardObserver.disconnect()
    }, [])

    return (
        <section
            ref={sectionRef}
            className="min-h-screen py-16 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
            style={{
                backgroundImage: "url('/projects-bg.webp')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'overlay'
            }}
        >
            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Animated Header */}
                <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ease-out ${
                    isVisible
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 -translate-x-full'
                }`}>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Featured <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">Projects</span>
                    </h2>
                    <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto px-4">
                        A collection of projects that showcase my skills
                    </p>
                </div>

                {/* Mobile-friendly Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {projects.map((project, index) => (
                        <Card
                            key={project.id}
                            ref={el => cardsRef.current[index] = el}
                            className={`
                                group relative overflow-hidden border-gray-800 bg-slate-900/50 backdrop-blur-sm
                                hover:border-yellow-400/50 transition-all duration-500 hover:shadow-lg hover:shadow-yellow-400/10
                                ${project.featured ? 'sm:col-span-2 lg:col-span-2 lg:row-span-2' : ''}
                                ${project.wide ? 'sm:col-span-2 lg:col-span-2' : ''}
                                ${project.tall ? 'sm:row-span-1 lg:row-span-2' : ''}
                                ${cardsVisible.includes(index)
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-8'
                            }
                            `}
                            style={{
                                transitionDelay: `${index * 50}ms`
                            }}
                        >
                            {/* Project Image - Mobile optimized */}
                            <div className={`
                                relative overflow-hidden
                                ${project.featured
                                ? 'h-48 sm:h-64 lg:h-80'
                                : project.tall
                                    ? 'h-48 sm:h-64 lg:h-80'
                                    : 'h-40 sm:h-48 lg:h-60'
                            }
                            `}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>

                                {/* Overlay with links */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            className="p-2 md:p-3 bg-yellow-400 text-black rounded-full hover:bg-yellow-300 transition-colors"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Github size={16} className="md:w-5 md:h-5" />
                                        </a>
                                    )}
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            className="p-2 md:p-3 bg-orange-500 text-white rounded-full hover:bg-orange-400 transition-colors"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <ExternalLink size={16} className="md:w-5 md:h-5" />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <CardHeader className="pb-2 md:pb-3">
                                <CardTitle className="text-white group-hover:text-yellow-300 transition-colors text-lg md:text-xl">
                                    {project.title}
                                </CardTitle>
                                <CardDescription className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                                    {project.description}
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="pt-0">
                                {/* Tech Stack - Mobile optimized */}
                                <div className="flex flex-wrap gap-1 md:gap-2">
                                    {project.tech.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-2 py-1 text-xs bg-yellow-400/10 text-yellow-300 rounded-full border border-yellow-400/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .line-clamp-3 {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </section>
    )
}

export default Projects