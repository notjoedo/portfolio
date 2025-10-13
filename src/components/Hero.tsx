import { useState } from 'react';
import { Github, Linkedin, Instagram, Download } from 'lucide-react';
import pfp from '../images/pfp.jpg';
import resume from '../images/Joe_Do_Resume.pdf';
import Tabs from './Tabs';
import SkillTag from './SkillTag';
import FilterTag from './FilterTag';
import { skillCategories } from '../data/skills';

function Hero() {
  const [activeTab, setActiveTab] = useState('bio');
  const [selectedSkillCategory, setSelectedSkillCategory] = useState('Languages');

  const tabs = [
    { id: 'bio', label: 'bio' },
    { id: 'education', label: 'education' },
    { id: 'interests', label: 'interests & skills' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'bio':
        return (
          <div key="bio" className="text-gray leading-loose font-light animate-slideIn">
            <p>
            Hey there! I'm a student at Virginia Tech, majoring in data science with a minor in computer science. 
            I'm super passionate about building full-stack solutions and designing apps that are intuitive, interactive, 
            and cool to use. If it involves programming, I'm all in! I'm currently on the lookout for SWE and 
            analytical roles. Let's connect!
            </p>
          </div>
        );
      case 'education':
        return (
          <div key="education" className="text-gray leading-loose font-light animate-slideIn">
            <p>Junior at Virginia Tech, majoring in data science with a minor in computer science. I have a concentration in Cybersecurity and Cryptography!
              I'm a lead researcher in the GrayUR's Phased Array Microphonics Team, where I spearhead a 5-member team! All in all, I love coding and building!
            </p>
          </div>
        );
      case 'interests':
        const selectedCategory = skillCategories.find(
          (cat) => cat.category === selectedSkillCategory
        );
        
        return (
          <div>
            {selectedCategory && (
              <div 
                key={selectedSkillCategory}
                className="flex flex-wrap gap-2 justify-center animate-slideIn"
              >
                {selectedCategory.skills.map((skill, index) => (
                  <SkillTag key={index} skill={skill} />
                ))}
              </div>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-4xl">
        {/* Profile Section */}
        <div className="flex items-center justify-center gap-12 mb-12">
          {/* Profile Picture */}
          <div className="flex-shrink-0">
            <img
              src={pfp}
              alt="Joe's profile"
              className="w-40 h-40 rounded-full object-cover"
            />
          </div>

          {/* Header Text and Icons */}
          <div>
            <h1 className="text-5xl font-light text-gray-900 mb-4">
              Hello, I'm Joe!
            </h1>
            <div className="flex gap-4">
              <a
                href="https://github.com/notjoedo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-[#466EA2] transition-colors duration-300"
              >
                <Github size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/hoanglehuydo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-[#466EA2] transition-colors duration-300"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="https://www.instagram.com/j03do"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-[#466EA2] transition-colors duration-300"
              >
                <Instagram size={28} />
              </a>
              <a
                href={resume}
                download="Joe_Do_Resume.pdf"
                className="text-gray-700 hover:text-[#466EA2] transition-colors duration-300"
              >
                <Download size={28} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-300 mb-8"></div>

        {/* Tabs */}
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Filter Tags Area - Fixed height to prevent shifting */}
        <div className="mt-8 min-h-[52px] flex items-start justify-center px-8">
          {activeTab === 'interests' && (
            <div className="flex flex-wrap gap-3 justify-center">
              {skillCategories.map((category) => (
                <FilterTag
                  key={category.id}
                  label={category.category}
                  isActive={selectedSkillCategory === category.category}
                  onClick={() => setSelectedSkillCategory(category.category)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content Area */}
        <div className="px-8 min-h-[200px]">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default Hero;

