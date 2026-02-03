import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data/skills';

const Skills = () => {
    return (
        <section id="skills" className="py-20 md:py-32 bg-primary-50 dark:bg-primary-900">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Section Label */}
                    <p className="text-sm font-medium text-accent mb-4 tracking-wide uppercase">
                        Skills
                    </p>

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-bold text-primary-900 dark:text-white mb-12">
                        Technical Expertise
                    </h2>

                    {/* Skills Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Object.entries(skills).map(([category, skillList], index) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                {/* Category Title */}
                                <h3 className="text-lg font-semibold text-primary-900 dark:text-white mb-4">
                                    {category}
                                </h3>

                                {/* Skills List */}
                                <div className="flex flex-wrap gap-2">
                                    {skillList.map((skill, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1.5 bg-white dark:bg-primary-950 text-primary-700 dark:text-primary-300 text-sm rounded-lg border border-primary-200 dark:border-primary-800 hover:border-accent dark:hover:border-accent transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
