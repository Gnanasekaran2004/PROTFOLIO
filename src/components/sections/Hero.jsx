import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import PixelCard from '../ui/PixelCard';
import TextType from '../ui/TextType';
const Hero = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const handleCardClick = () => {
        setIsExpanded(!isExpanded);
    };
    const handleBackgroundClick = () => {
        if (isExpanded) {
            setIsExpanded(false);
        }
    };
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-primary-50 dark:from-primary-950 dark:to-primary-900 pt-20 relative overflow-hidden" onClick={handleBackgroundClick}>
            <motion.div className="hidden lg:block absolute z-50 cursor-pointer" initial={{ left: '2.5rem', top: '50%', translateY: '-50%', translateX: '0%' }} animate={{ left: isExpanded ? '50%' : '2.5rem', top: '50%', translateY: '-50%', translateX: isExpanded ? '-50%' : '0%', scale: isExpanded ? 1.3 : 1 }} transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }} onClick={(e) => { e.stopPropagation(); handleCardClick(); }} style={{ opacity: isExpanded ? 1 : 0.4 }}>
                <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.5 }}>
                    <PixelCard variant="pink" className="w-[280px] h-[420px]">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-800/60 to-primary-950/60 dark:from-primary-900/50 dark:to-black/50 rounded-3xl overflow-hidden z-10">
                            <div className="absolute top-0 left-0 right-0 z-20 p-6 text-center bg-gradient-to-b from-black/30 to-transparent">
                                <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-lg">Gnanasekaran D</h3>
                                <p className="text-sm text-primary-200 font-medium drop-shadow-md">Full-Stack Developer</p>
                            </div>
                            <div className="relative h-full">
                                <img src={require('../assest/unnamed.jpg')} alt="Gnanasekaran D" className="w-full h-full object-cover object-center opacity-60" />
                                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                            </div>
                        </div>
                    </PixelCard>
                </motion.div>
            </motion.div>
            <motion.div className="max-w-4xl mx-auto px-6 text-center relative z-10 pointer-events-none" animate={{ opacity: isExpanded ? 0 : 1, scale: isExpanded ? 0.95 : 1 }} transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <div className="text-sm font-medium text-accent mb-4 tracking-wide uppercase">
                        <TextType text={["Full-Stack Developer", "React & Node.js Expert", "Cloud Solutions Architect", "UI/UX Enthusiast"]} typingSpeed={75} deletingSpeed={50} pauseDuration={2000} showCursor={true} cursorCharacter="_" cursorClassName="text-accent" loop={true} />
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-900 dark:text-white mb-6 leading-tight">Building secure, scalable<br />web applications</h1>
                    <p className="text-xl md:text-2xl text-primary-700 dark:text-primary-300 mb-8 max-w-2xl mx-auto leading-relaxed">with a focus on clean architecture and user experience.</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-primary-600 dark:text-primary-400">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                            <span>Currently: Computer Science @ Abdul Hakeem College of Engineering</span>
                        </div>
                        <span className="hidden sm:block">•</span>
                        <span>Previously: Full-Stack Intern @ Femtosoft Technologies</span>
                    </div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }} className="mt-12 pointer-events-auto">
                        <a href="#projects" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-medium rounded-lg hover:bg-accent-600 transition-colors shadow-lg hover:shadow-xl">
                            View My Work
                            <ArrowDown size={18} />
                        </a>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};
export default Hero;
