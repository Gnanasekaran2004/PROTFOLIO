import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../data/projects';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const featuredProjects = projects.filter(p => p.featured);
    const otherProjects = projects.filter(p => !p.featured);

    return (
        <section id="projects" className="py-20 md:py-32 bg-white dark:bg-primary-950">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Section Label */}
                    <p className="text-sm font-medium text-accent mb-4 tracking-wide uppercase">
                        Projects
                    </p>

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-bold text-primary-900 dark:text-white mb-12">
                        Featured Work
                    </h2>

                    {/* Featured Projects */}
                    <div className="space-y-16 mb-16">
                        {featuredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-primary-50 dark:bg-primary-900 rounded-2xl p-8 md:p-10"
                            >
                                {/* Title */}
                                <h3 className="text-2xl md:text-3xl font-bold text-primary-900 dark:text-white mb-4">
                                    {project.title}
                                </h3>

                                {/* Problem */}
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">
                                        Problem
                                    </h4>
                                    <p className="text-primary-700 dark:text-primary-300 leading-relaxed">
                                        {project.problem}
                                    </p>
                                </div>

                                {/* Solution */}
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">
                                        Solution
                                    </h4>
                                    <p className="text-primary-700 dark:text-primary-300 leading-relaxed">
                                        {project.solution}
                                    </p>
                                </div>

                                {/* Technical Highlights */}
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">
                                        Technical Highlights
                                    </h4>
                                    <ul className="space-y-2">
                                        {project.highlights.map((highlight, idx) => (
                                            <li
                                                key={idx}
                                                className="text-primary-700 dark:text-primary-300 flex items-start gap-2"
                                            >
                                                <span className="text-accent mt-1.5">•</span>
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Tech Stack */}
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">
                                        Tech Stack
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-white dark:bg-primary-950 text-primary-700 dark:text-primary-300 text-sm rounded-full border border-primary-200 dark:border-primary-800"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Links */}
                                <div className="flex flex-wrap gap-4">
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-600 transition-colors"
                                        >
                                            <ExternalLink size={18} />
                                            View Live
                                        </a>
                                    )}
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-200 dark:bg-primary-800 text-primary-900 dark:text-white font-medium rounded-lg hover:bg-primary-300 dark:hover:bg-primary-700 transition-colors"
                                        >
                                            <Github size={18} />
                                            View Code
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Other Projects */}
                    {otherProjects.length > 0 && (
                        <>
                            <h3 className="text-2xl font-bold text-primary-900 dark:text-white mb-8">
                                Other Projects
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {otherProjects.map((project, index) => (
                                    <motion.div
                                        key={project.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        className="bg-primary-50 dark:bg-primary-900 rounded-xl p-6"
                                    >
                                        <h4 className="text-xl font-semibold text-primary-900 dark:text-white mb-3">
                                            {project.title}
                                        </h4>
                                        <p className="text-primary-700 dark:text-primary-300 mb-4 leading-relaxed">
                                            {project.description}
                                        </p>

                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.techStack.map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-2 py-1 bg-white dark:bg-primary-950 text-primary-700 dark:text-primary-300 text-xs rounded-full border border-primary-200 dark:border-primary-800"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Link */}
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-accent hover:text-accent-600 font-medium transition-colors"
                                            >
                                                <ExternalLink size={16} />
                                                View Live
                                            </a>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
