import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../../data/experience';
import { Briefcase, GraduationCap, Bot } from 'lucide-react';

const typeConfig = {
    work: { icon: Bot, color: 'violet', border: 'border-violet-500/40', glow: 'shadow-glow-violet', tag: 'bg-violet-500/10 text-violet-400 border-violet-500/20' },
    internship: { icon: Briefcase, color: 'emerald', border: 'border-emerald-500/40', glow: 'shadow-glow-emerald', tag: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' },
    education: { icon: GraduationCap, color: 'gold', border: 'border-gold-500/40', glow: 'shadow-glow-gold', tag: 'bg-gold-500/10 text-gold-400 border-gold-500/20' },
};

const Experience = () => {
    return (
        <section id="experience" className="py-24 md:py-36 bg-navy-900 grid-lines-bg relative">
            <div className="max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-label">Career Path</p>
                    <h2 className="section-heading">Work & Education</h2>
                </motion.div>

                <div className="space-y-6">
                    {experience.map((item, index) => {
                        const cfg = typeConfig[item.type] || typeConfig.internship;
                        const Icon = cfg.icon;
                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.08 }}
                                className={`glass-card p-6 rounded-2xl border ${cfg.border} hover:${cfg.glow} transition-all duration-300 group`}
                            >
                                {/* Glowing top border accent */}
                                <div className={`absolute top-0 left-6 right-6 h-[1px] ${cfg.color === 'violet' ? 'bg-gradient-to-r from-transparent via-violet-500 to-transparent' : cfg.color === 'emerald' ? 'bg-gradient-to-r from-transparent via-emerald-500 to-transparent' : 'bg-gradient-to-r from-transparent via-gold-500 to-transparent'} opacity-60`} />

                                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                                    {/* Icon */}
                                    <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${cfg.tag} border`}>
                                        <Icon size={18} />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                                            <div>
                                                <h3 className="text-lg font-bold text-white group-hover:text-slate-100">
                                                    {item.title}
                                                </h3>
                                                <p className={`font-mono text-sm font-medium ${
                                                    cfg.color === 'violet' ? 'text-violet-400' :
                                                    cfg.color === 'emerald' ? 'text-emerald-400' : 'text-gold-400'
                                                }`}>
                                                    {item.company || item.institution}
                                                    <span className="text-slate-500 mx-2">·</span>
                                                    <span className="text-slate-400">{item.location}</span>
                                                </p>
                                            </div>
                                            <span className={`font-mono text-xs px-3 py-1 rounded-full border ${cfg.tag} self-start sm:self-auto whitespace-nowrap`}>
                                                {item.period}
                                            </span>
                                        </div>

                                        {item.description && (
                                            <p className="text-slate-400 text-sm mb-3 leading-relaxed">{item.description}</p>
                                        )}

                                        {item.highlights && (
                                            <ul className="space-y-1.5">
                                                {item.highlights.map((h, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-400">
                                                        <span className={`mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full ${
                                                            cfg.color === 'violet' ? 'bg-violet-400' :
                                                            cfg.color === 'emerald' ? 'bg-emerald-400' : 'bg-gold-400'
                                                        }`} />
                                                        <span>{h}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Experience;
