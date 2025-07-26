
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';
import Layout from '@/components/Layout';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Portfolio from '@/components/sections/Portfolio';
import Contact from '@/components/sections/Contact';

function App() {
  const [theme, setTheme] = useState('dark');
  const { toast } = useToast();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleSocialClick = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      toast({
        title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Pratik Kumar Srivastav - Future Data Scientist & Content Creator</title>
        <meta name="description" content="Portfolio of Pratik Kumar Srivastav, an aspiring Data Scientist, Video Editor, Public Speaker, and AI & Tech Content Creator." />
      </Helmet>
      
      <Layout theme={theme} toggleTheme={toggleTheme} handleSocialClick={handleSocialClick}>
        <Hero />
        <About />
        <Projects handleSocialClick={handleSocialClick} />
        <Experience />
        <Portfolio />
        <Contact handleContactSubmit={handleContactSubmit} />
      </Layout>

      <Toaster />
    </>
  );
}

export default App;
