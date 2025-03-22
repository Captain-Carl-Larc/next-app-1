function About() {
    return ( 
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
                    About Me
                </h1>
                
                {/* Introduction Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <p className="text-lg text-gray-600 mb-6">
                            Hello! I am a passionate full-stack developer with a keen eye for creating elegant solutions 
                            to complex problems. With expertise in modern web technologies and a commitment to clean code, 
                            I transform ideas into powerful digital experiences.
                        </p>
                        <p className="text-lg text-gray-600">
                            My journey in software development has been driven by curiosity and a constant desire to learn. 
                            I specialize in building scalable web applications using cutting-edge technologies while maintaining 
                            a focus on performance and user experience.
                        </p>
                    </div>
                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
                        <div className="absolute inset-0 bg-blue-100 flex items-center justify-center">
                            <span className="text-blue-600 text-sm">Profile Image</span>
                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-black mb-8">Technical Expertise</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-4">Frontend</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>React & Next.js</li>
                                <li>TypeScript</li>
                                <li>Tailwind CSS</li>
                                <li>HTML5 & CSS3</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-4">Backend</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>Node.js</li>
                                <li>Express</li>
                                <li>Python</li>
                                <li>RESTful APIs</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-4">Database</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>MongoDB</li>
                                <li>PostgreSQL</li>
                                <li>MySQL</li>
                                <li>Redis</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-4">Tools</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>Git & GitHub</li>
                                <li>Docker</li>
                                <li>AWS</li>
                                <li>VS Code</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Experience Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-black mb-8">Professional Journey</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-black mb-2">Early Career</h3>
                            <p className="text-gray-600">
                                Started my journey with web development, mastering fundamental technologies and building 
                                a strong foundation in software development principles.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-black mb-2">Growth Phase</h3>
                            <p className="text-gray-600">
                                Expanded expertise into full-stack development, leading projects and implementing 
                                complex features for various clients and organizations.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-black mb-2">Current Focus</h3>
                            <p className="text-gray-600">
                                Specializing in modern web applications using Next.js and React, with a focus on 
                                performance, accessibility, and exceptional user experiences.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Values Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-black mb-8">What I Value</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-4">Quality Code</h3>
                            <p className="text-gray-600">
                                I believe in writing clean, maintainable, and well-documented code that stands the 
                                test of time. Every project deserves a solid foundation.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-4">User Experience</h3>
                            <p className="text-gray-600">
                                Creating intuitive and accessible interfaces is at the heart of my development 
                                philosophy. Users deserve seamless experiences.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact CTA */}
                <div className="text-center bg-white p-12 rounded-2xl shadow-sm">
                    <h2 className="text-3xl font-bold text-black mb-4">Let&apos;s Work Together</h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        I am always interested in taking on new challenges and collaborating on exciting projects. 
                        If you have an idea or project in mind, I would love to hear about it.
                    </p>
                    <a 
                        href="/contact"
                        className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                        Get in Touch
                    </a>
                </div>
            </div>
        </div>
    );
}

export default About;