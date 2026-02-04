import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
const Footer = () => {
    const currentYear = new Date().getFullYear();
    const socialLinks = [
        { icon: <Mail size={20} />, href: "mailto:sgnana238@gmail.com", label: "Email" },
        { icon: <Github size={20} />, href: "https://github.com/Gnanasekaran2004", label: "GitHub", external: true },
        { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/gnana-sekaran-20041025gs", label: "LinkedIn", external: true }
    ];
    return (
        <footer className="bg-white dark:bg-primary-950 border-t border-primary-200 dark:border-primary-800">
            <div className="max-w-6xl mx-auto px-6 py-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-primary-600 dark:text-primary-400">
                        © {currentYear} Gnanasekaran D. All rights reserved.
                    </p>
                    <div className="relative w-64 overflow-hidden h-10 flex items-center">
                        <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white dark:from-primary-950 to-transparent z-10 pointer-events-none"></div>
                        <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white dark:from-primary-950 to-transparent z-10 pointer-events-none"></div>
                        <div className="flex gap-10 animate-scroll-loop hover:[animation-play-state:paused]">
                            {socialLinks.map((link, index) => (
                                <a key={`first-${index}`} href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noopener noreferrer" : undefined} className="flex-shrink-0 text-primary-600 dark:text-primary-400 hover:text-accent dark:hover:text-accent transition-all duration-300 hover:scale-110" aria-label={link.label}>
                                    {link.icon}
                                </a>
                            ))}
                            {socialLinks.map((link, index) => (
                                <a key={`second-${index}`} href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noopener noreferrer" : undefined} className="flex-shrink-0 text-primary-600 dark:text-primary-400 hover:text-accent dark:hover:text-accent transition-all duration-300 hover:scale-110" aria-label={link.label}>
                                    {link.icon}
                                </a>
                            ))}
                            {socialLinks.map((link, index) => (
                                <a key={`third-${index}`} href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noopener noreferrer" : undefined} className="flex-shrink-0 text-primary-600 dark:text-primary-400 hover:text-accent dark:hover:text-accent transition-all duration-300 hover:scale-110" aria-label={link.label}>
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
                @keyframes scroll-loop {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.333%); }
                }
                .animate-scroll-loop {
                    animation: scroll-loop 15s linear infinite;
                    display: flex;
                    width: max-content;
                }
            `}</style>
        </footer>
    );
};
export default Footer;
