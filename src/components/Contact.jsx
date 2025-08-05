import React, {useEffect, useRef, useState} from 'react'
import {Mail, Linkedin, ExternalLink, Github} from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './Card'

const Contact = () => {
    const [isVisible, setIsVisible] = useState(false)
    const contactRef = useRef(null)

    const contactInfo = [
        {
            icon: Mail,
            title: "Email",
            value: "ethan.wade.baron@gmail.com",
            link: "mailto:ethan.wade.baron@gmail.com",
            description: "Send me a message"
        },
        {
            icon: Linkedin,
            title: "LinkedIn",
            value: "linkedin.com/in/ethan-w-baron",
            link: "https://www.linkedin.com/in/ethan-w-baron/",
            description: "Let's connect"
        },
        {
            icon: Github,
            title: "Github",
            value: "github.com/EthanWBaron",
            link: "https://github.com/EthanWBaron",
            description: "See some projects on GitHub"
        },
        {
            icon: ExternalLink,
            title: "Synaptinc",
            value: "Coming Soon",
            description: "Outsource Development to us"

        }
    ]

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting)
            },
            { threshold: 0.3 }
        )

        if (contactRef.current) {
            observer.observe(contactRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section
            ref={contactRef}
            className="min-h-screen relative z-10 py-16 px-4"
            style={{
                backgroundImage: "url('/projects-bg.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'overlay'
            }}
        >
            <div className="relative z-10 max-w-4xl mx-auto">
                {/* Animated Header */}
                <div className={`text-center mb-16 transition-all duration-1000 ease-out ${
                    isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                }`}>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Get In <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">Touch</span>
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        I am looking for Full Time Junior Roles
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                    {contactInfo.map((contact, index) => {
                        const IconComponent = contact.icon
                        return (
                            <Card
                                key={index}
                                className={`group relative overflow-hidden border-gray-800 bg-slate-900/50 backdrop-blur-sm hover:border-yellow-400/50 transition-all duration-1000 hover:shadow-lg hover:shadow-yellow-400/10 ${
                                    isVisible
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-8'
                                }`}
                                style={{
                                    transitionDelay: `${200 + index * 200}ms`
                                }}
                            >
                                <CardHeader className="text-center">
                                    <div className="flex justify-center mb-4">
                                        <div className="p-4 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full group-hover:from-yellow-400/30 group-hover:to-orange-500/30 transition-all duration-300">
                                            <IconComponent
                                                size={32}
                                                className="text-yellow-300 group-hover:text-yellow-200 transition-colors"
                                            />
                                        </div>
                                    </div>
                                    <CardTitle className="text-white group-hover:text-yellow-300 transition-colors text-xl">
                                        {contact.title}
                                    </CardTitle>
                                    <CardDescription className="text-gray-400 mb-4">
                                        {contact.description}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="text-center">
                                    <a
                                        href={contact.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-medium rounded-full hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105"
                                    >
                                        <span>{contact.value}</span>
                                        <ExternalLink size={16} />
                                    </a>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Contact