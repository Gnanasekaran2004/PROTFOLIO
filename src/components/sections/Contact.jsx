import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';
import GlareHover from '../ui/GlareHover';

const Contact = () => {
    return (
        <section id="contact" className="py-20 md:py-32 bg-white dark:bg-primary-950">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Section Label */}
                    <p className="text-sm font-medium text-accent mb-4 tracking-wide uppercase">
                        Contact
                    </p>

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-bold text-primary-900 dark:text-white mb-6">
                        Let's work together
                    </h2>

                    {/* Description */}
                    <p className="text-xl text-primary-700 dark:text-primary-300 mb-12 leading-relaxed">
                        I'm currently open to internship opportunities and freelance projects.
                        If you're looking for a developer who values clean code, security, and
                        user experience, let's connect.
                    </p>

                    {/* Contact Methods */}
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        {/* Email - Interactive */}
                        <a href="mailto:sgnana238@gmail.com">
                            <GlareHover
                                className="flex items-start gap-4 p-6 bg-primary-50 dark:bg-primary-900 rounded-xl hover:bg-primary-100 dark:hover:bg-primary-800 transition-all duration-300 hover:shadow-md group"
                                glareOpacity={0.2}
                                glareAngle={-20}
                                glareSize={200}
                                transitionDuration={600}
                                playOnce={false}
                            >
                                <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                                    <Mail className="text-accent" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-primary-900 dark:text-white mb-1">
                                        Email
                                    </h3>
                                    <p className="text-primary-700 dark:text-primary-300">
                                        sgnana238@gmail.com
                                    </p>
                                </div>
                            </GlareHover>
                        </a>

                        {/* Location - Non-interactive (no glare) */}
                        <div className="flex items-start gap-4 p-6 bg-primary-50 dark:bg-primary-900 rounded-xl">
                            <div className="p-3 bg-accent/10 rounded-lg">
                                <MapPin className="text-accent" size={24} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-primary-900 dark:text-white mb-1">
                                    Location
                                </h3>
                                <p className="text-primary-700 dark:text-primary-300">
                                    Vellore, India
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-primary-900 dark:text-white mb-4">
                            Find me online
                        </h3>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="https://github.com/Gnanasekaran2004"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-900 dark:bg-white text-white dark:text-primary-900 font-medium rounded-lg hover:bg-primary-800 dark:hover:bg-primary-100 transition-colors"
                            >
                                <Github size={20} />
                                GitHub
                            </a>
                            <a
                                href="https://www.linkedin.com/in/gnana-sekaran-20041025gs"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0077B5] text-white font-medium rounded-lg hover:bg-[#006399] transition-colors"
                            >
                                <Linkedin size={20} />
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
