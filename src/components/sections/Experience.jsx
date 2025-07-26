import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const experiences = [
  {
    id: 1,
    company: 'AIEV (AI Enhanced Videos)',
    position: 'Video Editor & Content Creator',
    duration: '2023 - Present',
    responsibilities: [
      'Edited and produced over 100 high-quality videos, enhancing storytelling and visual appeal.',
      'Managed content creation pipelines, from ideation to final delivery, ensuring brand consistency.',
      'Collaborated with teams to develop engaging video concepts for various platforms.',
      'Utilized AI tools to streamline editing workflows and improve content performance.'
    ],
    technologies: ['Adobe Premiere Pro', 'After Effects', 'Canva', 'AI Video Tools']
  },
  {
    id: 2,
    company: 'IIT Madras BS Degree',
    position: 'Public Speaker & Event Host',
    duration: '2023 - Present',
    responsibilities: [
      'Hosted and moderated multiple Paradox events, engaging audiences of over 500 students.',
      'Delivered compelling presentations on various tech and academic topics.',
      'Developed strong communication and stage presence skills.',
      'Facilitated interactive sessions and panel discussions.'
    ],
    technologies: ['Public Speaking', 'Event Management', 'Audience Engagement']
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="scroll-reveal text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold">Experience & Certifications</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            My professional journey and key achievements
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="experience-card rounded-2xl p-8"
            >
              <div className="grid lg:grid-cols-4 gap-8">
                <div className="lg:col-span-1 space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Briefcase className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{exp.company}</h3>
                    <p className="text-gray-400 flex items-center mt-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      {exp.duration}
                    </p>
                  </div>
                </div>
                
                <div className="lg:col-span-3 space-y-6">
                  <div>
                    <h4 className="text-2xl font-semibold mb-4">{exp.position}</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-gray-300 flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <span className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
                      Skills & Tools
                    </span>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="experience-card rounded-2xl p-8"
          >
            <div className="grid lg:grid-cols-4 gap-8 items-center">
              <div className="lg:col-span-1 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Certification</h3>
                  <p className="text-gray-400">Verified Achievement</p>
                </div>
              </div>
              <div className="lg:col-span-3 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex-grow">
                  <h4 className="text-2xl font-semibold">Video Editing & VFX</h4>
                  <p className="text-gray-400 mt-1">Issued by Internshala</p>
                </div>
                <Button 
                  variant="outline"
                  onClick={() => window.open('https://drive.google.com/file/d/1PQKhh5qaNet-1BOD94MNrUHrClXuAV2X/view?usp=sharing', '_blank', 'noopener,noreferrer')}
                  className="border-white/20 hover:bg-white/10 w-full sm:w-auto"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Certificate
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="experience-card rounded-2xl p-8"
          >
            <div className="grid lg:grid-cols-4 gap-8 items-center">
              <div className="lg:col-span-1 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Documents</h3>
                  <p className="text-gray-400">Resume & Certificates</p>
                </div>
              </div>
              <div className="lg:col-span-3 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex-grow">
                  <h4 className="text-2xl font-semibold">Resume & Additional Documents</h4>
                  <p className="text-gray-400 mt-1">Download my latest resume and certificates</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <Button 
                    variant="outline"
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/RESUME 2.0.pdf';
                      link.download = 'RESUME 2.0.pdf';
                      link.click();
                    }}
                    className="border-white/20 hover:bg-white/10 w-full sm:w-auto"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Download Resume
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/PRDX2500476.pdf';
                      link.download = 'PRDX2500476.pdf';
                      link.click();
                    }}
                    className="border-white/20 hover:bg-white/10 w-full sm:w-auto"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Download Certificate
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;