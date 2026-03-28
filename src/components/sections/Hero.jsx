import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import profileImg from '../assest/unnamed.jpg';
import PixelCard from '../ui/PixelCard';
import TextType from '../ui/TextType';

const Hero = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const handleCardClick = () => setIsExpanded(!isExpanded);
    const handleBackgroundClick = () => { if (isExpanded) setIsExpanded(false); };

    return (
        <section
            className="min-h-screen flex items-center justify-center bg-navy-900 mesh-bg grid-lines-bg pt-20 relative overflow-hidden"
            onClick={handleBackgroundClick}
        >
            {/* Ambient glow orbs */}
            <div className="absolute w-96 h-96 rounded-full bg-violet-600/10 blur-3xl top-1/4 left-1/4 pointer-events-none" />
            <div className="absolute w-80 h-80 rounded-full bg-emerald-500/8 blur-3xl bottom-1/4 right-1/3 pointer-events-none" />

            {/* Profile Card */}
            <motion.div
                className="hidden lg:block absolute z-50 cursor-pointer"
                initial={{ left: '2.5rem', top: '50%', translateY: '-50%', translateX: '0%' }}
                animate={{
                    left: isExpanded ? '50%' : '2.5rem',
                    top: '50%',
                    translateY: '-50%',
                    translateX: isExpanded ? '-50%' : '0%',
                    scale: isExpanded ? 1.3 : 1,
                }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                onClick={(e) => { e.stopPropagation(); handleCardClick(); }}
                style={{ opacity: isExpanded ? 1 : 0.6 }}
            >
                <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.5 }}>
                    <PixelCard variant="pink" className="w-[280px] h-[420px]">
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/60 to-navy-950/80 rounded-3xl overflow-hidden z-10">
                            {/* Glowing top border */}
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                            <div className="absolute top-0 left-0 right-0 z-20 p-6 text-center bg-gradient-to-b from-black/40 to-transparent">
                                <h3 className="text-xl font-bold text-white mb-1 drop-shadow-lg font-sans">Gnanasekaran D</h3>
                                <p className="text-xs text-violet-300 font-mono">Software Engineer · AI Specialist</p>
                            </div>
                            <div className="relative h-full">
                                <img src={profileImg} alt="Gnanasekaran D" className="w-full h-full object-cover object-center opacity-50" />
                                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy-900/80 to-transparent z-10" />
                            </div>
                        </div>
                    </PixelCard>
                </motion.div>
            </motion.div>

            {/* Main Content */}
            <motion.div
                className="max-w-4xl mx-auto px-6 text-center relative z-10 pointer-events-none"
                animate={{ opacity: isExpanded ? 0 : 1, scale: isExpanded ? 0.95 : 1 }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            >
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 mb-8"
                    >
                        <Sparkles size={12} className="text-violet-400" />
                        <span className="font-mono text-xs text-violet-300 tracking-widest uppercase">
                            <TextType
                                text={["Software Engineer", "AI Data Specialist", "Full Stack Developer", "Mobile Architect"]}
                                typingSpeed={75} deletingSpeed={50} pauseDuration={2000}
                                showCursor={true} cursorCharacter="_"
                                cursorClassName="text-violet-400" loop={true}
                            />
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                        <span className="text-white">Building</span>{' '}
                        <span className="gradient-text-main">secure & scalable</span>
                        <br />
                        <span className="text-white">software solutions</span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto leading-relaxed">
                        With a focus on <span className="text-emerald-400 font-medium">clean architecture</span>, <span className="text-violet-400 font-medium">AI integration</span>, and exceptional user experience.
                    </p>

                    {/* Info Row */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm mb-12">
                        <div className="flex items-center gap-2 glass-card px-4 py-2">
                            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                            <span className="font-mono text-xs text-slate-300">CSE @ Abdul Hakeem College</span>
                        </div>
                        <div className="flex items-center gap-2 glass-card px-4 py-2">
                            <span className="w-2 h-2 bg-gold-500 rounded-full" />
                            <span className="font-mono text-xs text-slate-300">ex-AI Annotator @ Deccan AI</span>
                        </div>
                    </div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto"
                    >
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-glow-violet hover:shadow-glow-violet hover:scale-105"
                        >
                            View My Work
                            <ArrowDown size={16} />
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-8 py-4 glass-card text-slate-300 hover:text-white font-semibold rounded-xl transition-all duration-200 hover:border-violet-500/40"
                        >
                            Get In Touch
                        </a>
                    </motion.div>

                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
