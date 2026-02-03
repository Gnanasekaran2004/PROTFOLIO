import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white dark:bg-primary-950 border-t border-primary-200 dark:border-primary-800">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Copyright */}
                    <p className="text-sm text-primary-600 dark:text-primary-400">
                        © {currentYear} Gnanasekaran D. All rights reserved.
                    </p>

                    {/* Social Links */}
                    <div className="flex items-center gap-6">
                        <a
                            href="mailto:sgnana238@gmail.com"
                            className="text-primary-600 dark:text-primary-400 hover:text-accent dark:hover:text-accent transition-colors"
                            aria-label="Email"
                        >
                            <Mail size={20} />
                        </a>
                        <a
                            href="https://github.com/Gnanasekaran2004"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 dark:text-primary-400 hover:text-accent dark:hover:text-accent transition-colors"
                            aria-label="GitHub"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/gnana-sekaran-20041025gs"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 dark:text-primary-400 hover:text-accent dark:hover:text-accent transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
