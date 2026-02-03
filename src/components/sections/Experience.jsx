import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../../data/experience';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="py-20 md:py-32 bg-primary-50 dark:bg-primary-900">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Section Label */}
                    <p className="text-sm font-medium text-accent mb-4 tracking-wide uppercase">
                        Experience
                    </p>

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-bold text-primary-900 dark:text-white mb-12">
                        Work & Education
                    </h2>

                    {/* Timeline */}
                    <div className="space-y-12">
                        {experience.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="relative pl-8 border-l-2 border-accent"
                            >
                                {/* Icon */}
                                <div className="absolute -left-[17px] top-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                                    {item.type === 'education' ? (
                                        <GraduationCap size={16} className="text-white" />
                                    ) : (
                                        <Briefcase size={16} className="text-white" />
                                    )}
                                </div>

                                {/* Content */}
                                <div>
                                    <p className="text-sm text-primary-600 dark:text-primary-400 mb-1">
                                        {item.period}
                                    </p>
                                    <h3 className="text-xl font-semibold text-primary-900 dark:text-white mb-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-base text-accent font-medium mb-3">
                                        {item.company || item.institution} • {item.location}
                                    </p>

                                    {item.type === 'education' && item.cgpa && (
                                        <p className="text-primary-700 dark:text-primary-300 mb-3">
                                            CGPA: {item.cgpa}
                                        </p>
                                    )}

                                    {item.description && (
                                        <p className="text-primary-700 dark:text-primary-300 mb-3 leading-relaxed">
                                            {item.description}
                                        </p>
                                    )}

                                    {item.highlights && (
                                        <ul className="space-y-2">
                                            {item.highlights.map((highlight, idx) => (
                                                <li
                                                    key={idx}
                                                    className="text-primary-700 dark:text-primary-300 flex items-start gap-2"
                                                >
                                                    <span className="text-accent mt-1.5">•</span>
                                                    <span>{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
