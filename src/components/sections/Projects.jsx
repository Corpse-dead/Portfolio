import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink, Video } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Creative Video Edit Reel',
    description: 'A dynamic and engaging video reel showcasing my editing skills, blending various techniques to create a compelling visual narrative.',
    tech: ['Premiere Pro', 'After Effects', 'Storytelling'],
    category: 'video',
    featured: true,
    link: 'https://drive.google.com/file/d/1skUel6fEVXmIGpHbFJIOGl-wohHcUpwd/view?usp=sharing',
    image: 'https://images.unsplash.com/photo-1572177812156-58036aae439c'
  },
  {
    id: 2,
    title: 'Anime Edit Reel',
    description: 'A high-energy anime music video (AMV) showcasing precise synchronization, creative transitions, and dynamic visual effects.',
    tech: ['After Effects', 'Sync Editing', 'VFX'],
    category: 'video',
    featured: false,
    link: 'https://drive.google.com/file/d/1J3JZkLao9YQ4XgncDIq6PCSpWbwEwBBM/view?usp=sharing',
    image: 'https://images.unsplash.com/photo-1613376023733-0a73315d9b06'
  }
];

const Projects = ({ handleSocialClick }) => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-transparent to-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="scroll-reveal text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold">Featured Projects</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of my video editing and creative storytelling work.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="project-card rounded-2xl p-6 flex flex-col"
            >
              <div className="space-y-6 flex flex-col flex-grow">
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    alt={project.title}
                    className="w-full h-64 object-cover"
                    src={project.image} 
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Video className="h-16 w-16 text-white/70" />
                  </div>
                </div>
                
                <div className="space-y-4 flex flex-col flex-grow">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    {project.featured && (
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-400 leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4 pt-4">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleSocialClick(project.link)}
                      className="border-white/20 hover:bg-white/10"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Watch Video
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;