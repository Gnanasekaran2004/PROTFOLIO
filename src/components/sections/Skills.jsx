import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data/skills';

const categoryConfig = {
    'Languages': { color: 'violet', pill: 'bg-violet-500/10 text-violet-300 border-violet-500/20 hover:bg-violet-500/20 hover:border-violet-400/40 hover:shadow-glow-violet' },
    'Frameworks & Libraries': { color: 'emerald', pill: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20 hover:bg-emerald-500/20 hover:border-emerald-400/40 hover:shadow-glow-emerald' },
    'Databases & Cloud': { color: 'gold', pill: 'bg-gold-500/10 text-gold-300 border-gold-500/20 hover:bg-gold-500/20 hover:border-gold-400/40 hover:shadow-glow-gold' },
    'Tools & DevOps': { color: 'violet', pill: 'bg-violet-500/10 text-violet-300 border-violet-500/20 hover:bg-violet-500/20 hover:border-violet-400/40 hover:shadow-glow-violet' },
    'Specialized Skills': { color: 'emerald', pill: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20 hover:bg-emerald-500/20 hover:border-emerald-400/40 hover:shadow-glow-emerald' },
};

const borderTopMap = {
    violet: 'bg-gradient-to-r from-transparent via-violet-500 to-transparent',
    emerald: 'bg-gradient-to-r from-transparent via-emerald-500 to-transparent',
    gold: 'bg-gradient-to-r from-transparent via-gold-500 to-transparent',
};

// Bento grid: first card spans 2 columns on large screens
const bentoClasses = ['lg:col-span-2', '', '', 'lg:col-span-2', ''];

const Skills = () => {
    const entries = Object.entries(skills);
    return (
        <section id="skills" className="py-24 md:py-36 bg-navy-800 relative overflow-hidden">
            <div className="absolute w-80 h-80 rounded-full bg-violet-600/8 blur-3xl bottom-0 left-1/4 pointer-events-none" />
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-label">Tech Stack</p>
                    <h2 className="section-heading">Technical Expertise</h2>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {entries.map(([category, skillList], index) => {
                        const cfg = categoryConfig[category] || categoryConfig['Languages'];
                        const spanClass = bentoClasses[index] || '';
                        return (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.07 }}
                                className={`relative glass-card p-6 rounded-2xl overflow-hidden group hover:bg-white/8 transition-all duration-300 ${spanClass}`}
                            >
                                {/* Top glow line */}
                                <div className={`absolute top-0 left-4 right-4 h-[1px] ${borderTopMap[cfg.color]} opacity-50 group-hover:opacity-100 transition-opacity`} />

                                <h3 className="font-mono text-xs font-semibold tracking-widest uppercase text-slate-400 mb-4">
                                    {category}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {skillList.map((skill, idx) => (
                                        <span
                                            key={idx}
                                            className={`tag-pill border ${cfg.pill} cursor-default`}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
