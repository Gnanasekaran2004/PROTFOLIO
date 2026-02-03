import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-primary-50 dark:from-primary-950 dark:to-primary-900 pt-20">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Greeting */}
                    <p className="text-sm font-medium text-accent mb-4 tracking-wide uppercase">
                        Full-Stack Developer
                    </p>

                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-900 dark:text-white mb-6 leading-tight">
                        Building secure, scalable
                        <br />
                        web applications
                    </h1>

                    {/* Subheading */}
                    <p className="text-xl md:text-2xl text-primary-700 dark:text-primary-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                        with a focus on clean architecture and user experience.
                    </p>

                    {/* Status */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-primary-600 dark:text-primary-400">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                            <span>Currently: Computer Science @ Abdul Hakeem College of Engineering</span>
                        </div>
                        <span className="hidden sm:block">•</span>
                        <span>Previously: Full-Stack Intern @ Femtosoft Technologies</span>
                    </div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="mt-12"
                    >
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-medium rounded-lg hover:bg-accent-600 transition-colors shadow-lg hover:shadow-xl"
                        >
                            View My Work
                            <ArrowDown size={18} />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
