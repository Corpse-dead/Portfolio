
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="scroll-reveal space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold">About Me</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>
            
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                Hi, I'm Pratik Srivastav, an aspiring Data Scientist and a Bachelor’s student in Data Science at IIT Madras. While my academic journey revolves around data, numbers, and machine learning, I also have a strong creative side—especially when it comes to visual storytelling and video editing.
              </p>
              <p>
                Over the past few years, I’ve honed my skills in tools like Adobe Premiere Pro, After Effects, DaVinci Resolve, and Canva, blending technical precision with a creative mindset. Whether it's editing academic content, promotional videos, or creative reels, I enjoy crafting compelling narratives that inform, engage, and inspire.
              </p>
            </div>

            <div className="space-y-4">
              <span className="text-lg font-semibold">Core Skills</span>
              <div className="flex flex-wrap gap-3">
                {['Data Science', 'Video Editing', 'Public Speaking', 'Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Canva'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm hover:bg-white/10 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="scroll-reveal relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-2xl"></div>
              <img 
                alt="Modern workspace setup with creative tools"
                className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
               src="https://images.unsplash.com/photo-1699843526854-250e2aca1a60" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
