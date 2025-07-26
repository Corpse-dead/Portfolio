import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Linkedin, Send, Github } from 'lucide-react';

const Contact = ({ handleContactSubmit }) => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="scroll-reveal text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold">Get In Touch</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to collaborate or have a question? Let's create something amazing together.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            className="scroll-reveal space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <Mail className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:24f2005917@ds.study.iitm.ac.in" className="text-gray-400 hover:text-white transition-colors">24f2005917@ds.study.iitm.ac.in</a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                  <Phone className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href="tel:+918303769916" className="text-gray-400 hover:text-white transition-colors">+91 83037 69916</a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <Linkedin className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <p className="font-semibold">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/pratik-srivastav-b8a830348/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">/pratik-srivastav</a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-500/20 rounded-xl flex items-center justify-center">
                  <Github className="h-6 w-6 text-gray-400" />
                </div>
                <div>
                  <p className="font-semibold">GitHub</p>
                  <a href="https://github.com/Pratik-CodeForge" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">/Pratik-CodeForge</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="scroll-reveal"
          >
            <form onSubmit={handleContactSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    className="floating-label-input w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-transparent focus:outline-none focus:border-blue-500 peer"
                    placeholder="Your Name"
                    required
                  />
                  <label
                    htmlFor="name"
                    className="floating-label absolute left-4 top-4 text-gray-400"
                  >
                    Your Name
                  </label>
                </div>
                
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    className="floating-label-input w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-transparent focus:outline-none focus:border-blue-500 peer"
                    placeholder="Your Email"
                    required
                  />
                  <label
                    htmlFor="email"
                    className="floating-label absolute left-4 top-4 text-gray-400"
                  >
                    Your Email
                  </label>
                </div>
              </div>
              
              <div className="relative">
                <input
                  type="text"
                  id="subject"
                  className="floating-label-input w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-transparent focus:outline-none focus:border-blue-500 peer"
                  placeholder="Subject"
                  required
                />
                <label
                  htmlFor="subject"
                  className="floating-label absolute left-4 top-4 text-gray-400"
                >
                  Subject
                </label>
              </div>
              
              <div className="relative">
                <textarea
                  id="message"
                  rows={5}
                  className="floating-label-input w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-transparent focus:outline-none focus:border-blue-500 peer resize-none"
                  placeholder="Your Message"
                  required
                ></textarea>
                <label
                  htmlFor="message"
                  className="floating-label absolute left-4 top-4 text-gray-400"
                >
                  Your Message
                </label>
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;