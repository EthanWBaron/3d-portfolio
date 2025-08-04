import React from 'react'
import { Mail, Linkedin, ExternalLink } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './Card'

const Contact = () => {
    const contactInfo = [
        {
            icon: Mail,
            title: "Email",
            value: "ethan.wade.baron@gmail.com",
            link: "mailto:ethan.wade.baron@gmail.com",
            description: "Drop me a line anytime"
        },
        {
            icon: Linkedin,
            title: "LinkedIn",
            value: "linkedin.com/in/ethan-w-baron",
            link: "https://www.linkedin.com/in/ethan-w-baron/",
            description: "Let's connect professionally"
        }
    ]

    return (
        <section>
            <div className="relative z-10 max-w-4xl mx-auto pt-8 pb-12">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Get In <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">Touch</span>
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Ready to collaborate? I'm always open to discussing new opportunities and interesting projects.
                        <br/>
                        I am looking for Full Time or Contract Work
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                    {contactInfo.map((contact, index) => {
                        const IconComponent = contact.icon
                        return (
                            <Card
                                key={index}
                                className="group relative overflow-hidden border-gray-800 bg-slate-900/50 backdrop-blur-sm hover:border-yellow-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/10"
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