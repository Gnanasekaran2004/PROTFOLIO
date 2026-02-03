import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 md:py-32 bg-white dark:bg-primary-950">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Section Label */}
                    <p className="text-sm font-medium text-accent mb-4 tracking-wide uppercase">
                        About
                    </p>

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-bold text-primary-900 dark:text-white mb-8">
                        Building solutions that matter
                    </h2>

                    {/* Content */}
                    <div className="space-y-6 text-lg text-primary-700 dark:text-primary-300 leading-relaxed">
                        <p>
                            I'm a computer science student and full-stack developer who believes that good software
                            should be both functional and thoughtfully designed. My journey into development started
                            with curiosity about how things work under the hood, and has evolved into a focus on
                            building secure, scalable web applications.
                        </p>

                        <p>
                            Through internships at <strong className="text-primary-900 dark:text-white">Femtosoft Technologies</strong> and{' '}
                            <strong className="text-primary-900 dark:text-white">Codesoft</strong>, I've learned that the best code
                            isn't just about making things work—it's about making them work reliably, securely, and maintainably.
                            I approach every project with a security-first mindset, implementing proper authentication, password
                            hashing, and data validation from the start.
                        </p>

                        <p>
                            My technical philosophy centers on three principles: <strong className="text-primary-900 dark:text-white">clean
                                architecture</strong> (separating concerns and keeping code readable), <strong className="text-primary-900 dark:text-white">user-focused
                                    design</strong> (building interfaces that people actually want to use), and <strong className="text-primary-900 dark:text-white">continuous
                                        learning</strong> (staying current with best practices and emerging technologies).
                        </p>

                        <p>
                            Currently, I'm focused on deepening my expertise in full-stack development with React and Spring Boot,
                            exploring modern deployment practices with Docker and CI/CD pipelines, and contributing to projects
                            that solve real problems for real users.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
