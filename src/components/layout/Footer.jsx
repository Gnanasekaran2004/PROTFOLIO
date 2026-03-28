import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const socialLinks = [
        { icon: <Mail size={18} />, href: "mailto:sgnana238@gmail.com", label: "Email" },
        { icon: <Github size={18} />, href: "https://github.com/Gnanasekaran2004", label: "GitHub", external: true },
        { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/gnana-sekaran-20041025gs", label: "LinkedIn", external: true },
    ];

    return (
        <footer className="bg-navy-950 border-t border-white/5">
            <div className="max-w-6xl mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Left: Brand */}
                    <div>
                        <p className="font-mono text-sm font-semibold gradient-text-violet">Gnanasekaran D</p>
                        <p className="font-mono text-xs text-slate-500 mt-1">© {currentYear} · All rights reserved.</p>
                    </div>

                    {/* Center: Nav shortcuts */}
                    <div className="hidden md:flex items-center gap-6">
                        {['#about', '#experience', '#projects', '#skills', '#contact'].map((href) => (
                            <a key={href} href={href} className="font-mono text-xs text-slate-500 hover:text-violet-400 transition-colors capitalize">
                                {href.slice(1)}
                            </a>
                        ))}
                    </div>

                    {/* Right: Socials */}
                    <div className="flex items-center gap-3">
                        {socialLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target={link.external ? "_blank" : undefined}
                                rel={link.external ? "noopener noreferrer" : undefined}
                                aria-label={link.label}
                                className="w-9 h-9 rounded-xl glass-card flex items-center justify-center text-slate-400 hover:text-violet-400 hover:border-violet-500/30 transition-all duration-200"
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
