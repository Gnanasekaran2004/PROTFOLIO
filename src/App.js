import React, { useEffect } from 'react';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import ClickSpark from './components/ui/ClickSpark';
function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);
  return (
    <ClickSpark sparkColor='#3b82f6' sparkSize={12} sparkRadius={20} sparkCount={8} duration={500}>
      <div className="min-h-screen bg-primary-950 transition-colors">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </ClickSpark>
  );
}
export default App;
