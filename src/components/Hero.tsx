import React from 'react';
import { Mail, Github, ExternalLink, Linkedin, Download } from 'lucide-react';
import { contactInfo, education } from '../data/resume';
import pfp from '../images/pfp.jpg';
import cv from '../images/Joe_s_Resume.pdf';

const Hero = () => {
  return (
    <section id="about" className="pt-24 pb-16 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <div className="mb-8">
            <img 
              src={pfp}
              alt="Professional headshot of Hoang (Joe) Do" 
              className="w-56 h-56 rounded-full mx-auto mb-6 shadow-lg object-cover object-center border-4 border-white dark:border-gray-700" 
              style={{ objectPosition: 'center 30%' }}
            />
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-black dark:text-white">
            Hoang (Joe) Do
          </h1>
          
          <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl max-w-2xl mx-auto transition-colors duration-300">
            <p className="text-lg font-medium text-black dark:text-white mb-1">
              {education.degree}
            </p>
            {education.minor && (
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                Minor in {education.minor}
              </p>
            )}
            {education.concentration && (
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                Concentration: {education.concentration}
              </p>
            )}
            <p className="text-sm text-black dark:text-white font-medium">
              {education.institution} • {education.period}
            </p>
          </div>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Aspiring Software Engineer and CMDA Student at Virginia Tech
          </p>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Computational Modeling & Data Analytics (CMDA) student at Virginia Tech with expertise in AI integration, full-stack development, and data analytics. 
            Passionate about creating innovative solutions that bridge technology and real-world problems.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href={`mailto:${contactInfo.email}`}
              className="apple-button-primary"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </a>
            
            <a 
              href={`https://${contactInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="apple-button-secondary"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>

            <a 
              href={`https://${contactInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="apple-button-secondary"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>

            <a 
              href={cv}
              download="Joe_Do_Resume.pdf"
              className="apple-button-secondary"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 