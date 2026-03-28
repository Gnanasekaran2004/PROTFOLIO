import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 md:py-36 bg-navy-800 relative overflow-hidden">
            {/* Subtle ambient glow */}
            <div className="absolute w-72 h-72 rounded-full bg-emerald-500/6 blur-3xl top-1/2 right-0 pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Left: Big Quote */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="section-label">About Me</p>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                            <span className="text-white">Building</span>
                            <br />
                            <span className="gradient-text-main">solutions</span>
                            <br />
                            <span className="text-white">that matter.</span>
                        </h2>

                        {/* Accent stat cards */}
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            {[
                                { label: 'Internships', value: '3+', color: 'violet' },
                                { label: 'Projects Built', value: '10+', color: 'emerald' },
                                { label: 'CGPA', value: '7.8', color: 'gold' },
                                { label: 'Certifications', value: '4+', color: 'violet' },
                            ].map((stat) => (
                                <div
                                    key={stat.label}
                                    className={`glass-card p-4 rounded-xl border ${
                                        stat.color === 'violet' ? 'border-violet-500/20' :
                                        stat.color === 'emerald' ? 'border-emerald-500/20' :
                                        'border-gold-500/20'
                                    }`}
                                >
                                    <p className={`text-2xl font-bold font-mono ${
                                        stat.color === 'violet' ? 'text-violet-400' :
                                        stat.color === 'emerald' ? 'text-emerald-400' :
                                        'text-gold-400'
                                    }`}>{stat.value}</p>
                                    <p className="text-xs text-slate-400 mt-1 font-mono">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Bio paragraphs */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="space-y-5 text-slate-400 leading-relaxed"
                    >
                        <p className="text-lg">
                            Detail-oriented <span className="text-white font-medium">Software Engineer</span> and <span className="text-violet-400 font-medium">AI Data Specialist</span> with hands-on expertise in Full Stack Development, Mobile Architecture, and Generative AI integration.
                        </p>
                        <p>
                            Through my experiences at <span className="text-white font-medium">Deccan AI Experts</span>, <span className="text-white font-medium">Femtosoft Technologies</span>, and <span className="text-white font-medium">Codsoft</span>, I've honed my skills across the entire product lifecycle — from evaluating and fine-tuning generative AI models to architecting highly scalable serverless backends.
                        </p>
                        <p>
                            I am eager to leverage my strong analytical reasoning and <span className="text-emerald-400 font-medium">prompt engineering skills</span> to build impactful software that drives technical excellence and optimal system performance.
                        </p>

                        {/* Certifications */}
                        <div className="pt-4 border-t border-white/5">
                            <p className="section-label mb-3">Certifications</p>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    'Java Concurrency & Multithreading — Scaler',
                                    'Google Data Analytics Professional',
                                    'Spring REST & Spring Data JPA — Infosys',
                                    'Spring 5 Basics with Spring Boot — Infosys',
                                ].map((cert) => (
                                    <span key={cert} className="tag-pill bg-white/5 border border-white/10 text-slate-300 text-xs">
                                        {cert}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
