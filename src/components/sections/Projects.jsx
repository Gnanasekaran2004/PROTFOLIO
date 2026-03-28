import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../data/projects';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const accentCycle = ['violet', 'emerald', 'gold'];
const accentMap = {
    violet: {
        border: 'border-violet-500/30 hover:border-violet-500/60',
        glow: 'hover:shadow-glow-violet',
        tag: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
        dot: 'bg-violet-400',
        line: 'bg-gradient-to-r from-transparent via-violet-500 to-transparent',
        label: 'text-violet-400',
        btn: 'bg-violet-600 hover:bg-violet-500 text-white shadow-glow-violet',
    },
    emerald: {
        border: 'border-emerald-500/30 hover:border-emerald-500/60',
        glow: 'hover:shadow-glow-emerald',
        tag: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
        dot: 'bg-emerald-400',
        line: 'bg-gradient-to-r from-transparent via-emerald-500 to-transparent',
        label: 'text-emerald-400',
        btn: 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-glow-emerald',
    },
    gold: {
        border: 'border-gold-500/30 hover:border-gold-500/60',
        glow: 'hover:shadow-glow-gold',
        tag: 'bg-gold-500/10 text-gold-300 border-gold-500/20',
        dot: 'bg-gold-400',
        line: 'bg-gradient-to-r from-transparent via-gold-500 to-transparent',
        label: 'text-gold-400',
        btn: 'bg-gold-600 hover:bg-gold-500 text-white shadow-glow-gold',
    },
};

const Projects = () => {
    return (
        <section id="projects" className="py-24 md:py-36 bg-navy-900 mesh-bg relative">
            <div className="absolute w-80 h-80 rounded-full bg-emerald-500/6 blur-3xl top-1/3 right-0 pointer-events-none" />
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-label">Portfolio</p>
                    <h2 className="section-heading">Featured Work</h2>
                </motion.div>

                <div className="space-y-8">
                    {projects.map((project, index) => {
                        const accentKey = accentCycle[index % accentCycle.length];
                        const cfg = accentMap[accentKey];
                        return (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`relative glass-card p-8 rounded-2xl border ${cfg.border} ${cfg.glow} transition-all duration-300 group overflow-hidden`}
                            >
                                {/* Top glow accent line */}
                                <div className={`absolute top-0 left-0 right-0 h-[2px] ${cfg.line} opacity-60 group-hover:opacity-100 transition-opacity`} />

                                {/* Header row */}
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-slate-100">{project.title}</h3>
                                        <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">{project.solution}</p>
                                    </div>
                                    {/* Links */}
                                    <div className="flex gap-3 flex-shrink-0">
                                        {project.githubUrl && project.githubUrl !== '#' && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all"
                                            >
                                                <Github size={18} />
                                            </a>
                                        )}
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all"
                                            >
                                                <ExternalLink size={18} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Highlights */}
                                {project.highlights && (
                                    <ul className="space-y-2 mb-6">
                                        {project.highlights.map((h, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-sm text-slate-400">
                                                <span className={`mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
                                                <span>{h}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech, idx) => (
                                        <span key={idx} className={`tag-pill border ${cfg.tag}`}>
                                            {tech}
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

export default Projects;
