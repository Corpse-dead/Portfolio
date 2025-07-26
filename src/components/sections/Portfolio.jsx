
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const portfolioItems = [
  {
    title: 'Video Editing',
    description: 'Crafting compelling stories through professional video editing for academic, promotional, and creative content.',
    icon: 'Video'
  },
  {
    title: 'Public Speaking',
    description: 'Engaging and inspiring audiences through well-crafted speeches and presentations at events and conferences.',
    icon: 'Mic'
  },
  {
    title: 'Content Creation',
    description: 'Developing high-quality AI and tech-focused content that educates and informs a growing audience.',
    icon: 'PenTool'
  },
  {
    title: 'Data Science Projects',
    description: 'Applying machine learning and data analysis techniques to solve real-world problems and extract valuable insights.',
    icon: 'Database'
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-black/20 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="scroll-reveal text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold">My Portfolio</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A glimpse into my diverse skill set and the services I offer.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-filter backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
