import React from 'react'
import { ExternalLink, Github } from 'lucide-react'
import {Card, CardHeader,CardTitle,CardDescription, CardContent} from './Card'

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "AniRec",
            description: " • Built a lightweight animation discovery tool with React + Vite, integrating the TMDB API." +
                "\n• Implemented debounced search using react-use, and added random anime suggestions to improve user engagement." +
                "\n• Deployed on Vercel with a clean, responsive UI and React hooks (useState, useEffect).",
            image: "/Ani-Rec.png",
            tech: ["React", "Node.js", "HTML/CSS", "Javascript"],
            github: "https://github.com/EthanWBaron/AniRec",
            live: "https://ani-rec-nine.vercel.app/",
            featured: true
        },
        {
            id: 2,
            title: "MarketTrack Staff",
            description: "Scanner App for Stock Taking and Sales",
            image: "/MarketTrack-Staff.jpeg",
            tech: ["Kotlin", "Jetpack Compose", "Firebase", "Google MLKit"],
            tall: true
        },
        {
            id: 3,
            title: "Father's Heart Android",
            description: "Collaborated in a team to build Android Application for event " +
                "tracking, donations and volunteering.",
            image: "/Fathers-Heart-Android.jpeg",
            tech: ["Kotlin", "Jetpack Compose", "Firebase"],
            tall: true
        },
        {
            id: 4,
            title: "Portfolio Website",
            description: "Responsive portfolio showcasing modern web development techniques.",
            image: "/Portfolio.png",
            tech: ["React", "Tailwind", "ThreeJS"],
            github: "https://github.com/EthanWBaron/portfolio",
            live: "https://ethanbaron.vercel.app"
        },
        {
            id: 5,
            title: "MarketTrack Admin",
            description: "Responsive Admin Dashboard for the MarketTrack Stock App",
            image: "/MarketTrack-Admin.png",
            tech: ["Javascript", "ChartJS", "HTML/CSS", "Firebase"],
            wide: true
        },
        {
            id: 6,
            title: "Father's Heart Desktop",
            description: "Developed a WPF desktop app (C#) admin application for event " +
                "tracking, donations and volunteering.",
            image: "/Fathers-Heart-Desktop.png",
            tech: ["C#", "WPF", "Firebase"]
        }
    ]

    return (
        <section>
            <div className="relative z-10 max-w-7xl mx-auto pt-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Featured <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">Projects</span>
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        A collection of projects that showcase my skills
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
                    {projects.map((project) => (
                        <Card
                            key={project.id}
                            className={`
                                group relative overflow-hidden border-gray-800 bg-slate-900/50 backdrop-blur-sm
                                hover:border-yellow-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/10
                                ${project.featured ? 'lg:col-span-2 lg:row-span-2' : ''}
                                ${project.wide ? 'lg:col-span-2' : ''}
                                ${project.tall ? 'lg:row-span-2' : ''}
                            `}
                        >
                            {/* Project Image */}
                            <div className={`
                                relative overflow-hidden
                                ${project.featured ? 'h-150' : project.tall ? 'h-150' : 'h-60'}
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
                                            className="p-3 bg-yellow-400 text-black rounded-full hover:bg-yellow-300 transition-colors"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Github size={20} />
                                        </a>
                                    )}
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            className="p-3 bg-orange-500 text-white rounded-full hover:bg-orange-400 transition-colors"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <CardHeader className="pb-3">
                                <CardTitle className="text-white group-hover:text-yellow-300 transition-colors">
                                    {project.title}
                                </CardTitle>
                                <CardDescription className="text-gray-400 text-sm leading-relaxed">
                                    {project.description}
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="pt-0">
                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, index) => (
                                        <span
                                            key={index}
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
        </section>
    )
}

export default Projects