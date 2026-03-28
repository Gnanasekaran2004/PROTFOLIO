import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { threshold: 0.4 }
        );
        document.querySelectorAll('section[id]').forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    const navLinks = [
        { href: '#about', label: 'About' },
        { href: '#experience', label: 'Experience' },
        { href: '#projects', label: 'Projects' },
        { href: '#skills', label: 'Skills' },
        { href: '#contact', label: 'Contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-4">
            <div
                className={`transition-all duration-500 ${
                    scrolled
                        ? 'bg-navy-900/80 backdrop-blur-xl border border-white/10 shadow-glass'
                        : 'bg-navy-900/20 backdrop-blur-sm border border-white/5'
                } rounded-full px-6 py-3 flex items-center gap-8`}
            >
                {/* Logo */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="font-mono text-sm font-semibold cursor-pointer bg-transparent border-none"
                >
                    <span className="gradient-text-violet">GD</span>
                    <span className="text-white/40 mx-1">/</span>
                    <span className="text-white/70 text-xs">portfolio</span>
                </button>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href.slice(1);
                        return (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`relative font-mono text-xs font-medium tracking-wide transition-all duration-200 ${
                                    isActive ? 'text-violet-400' : 'text-slate-400 hover:text-white'
                                }`}
                            >
                                {isActive && (
                                    <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-violet-400" />
                                )}
                                {link.label}
                            </a>
                        );
                    })}
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-1.5 rounded-full bg-white/10 text-slate-300 hover:text-white transition"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="absolute top-20 left-4 right-4 bg-navy-800/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 space-y-2 md:hidden">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block font-mono text-sm font-medium text-slate-300 hover:text-violet-400 transition-colors px-3 py-2 rounded-lg hover:bg-white/5"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navigation;
