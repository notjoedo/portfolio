import { useState } from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';
import pfp from '../images/pfp.jpg';
import Tabs from './Tabs';

function Hero() {
  const [activeTab, setActiveTab] = useState('bio');

  const tabs = [
    { id: 'bio', label: 'bio' },
    { id: 'education', label: 'education' },
    { id: 'interests', label: 'interests & skills' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'bio':
        return (
          <div className="text-gray-800">
            <p>
              Bio bio bio Bio bio bio Bio bio bio Bio bio bio Bio bio bio Bio bio bio
              Bio bio bio Bio bio bio Bio bio bio Bio bio bio Bio bio bio Bio bio bio
              Bio bio bio Bio bio bio Bio bio bio Bio bio bio Bio bio bio Bio bio bio
              Bio bio bio Bio bio bio Bio bio bio Bio bio bio Bio bio bio Bio bio bio
            </p>
          </div>
        );
      case 'education':
        return (
          <div className="text-gray-800">
            <p>Education information will go here...</p>
          </div>
        );
      case 'interests':
        return (
          <div className="text-gray-800">
            <p>Interests and skills information will go here...</p>
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
                className="text-gray-700 hover:text-[#466EA2] transition-colors duration-300"
              >
                <Github size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/hoanglehuydo/"
                target="_blank"
                className="text-gray-700 hover:text-[#466EA2] transition-colors duration-300"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="https://www.instagram.com/j03do"
                target="_blank"
                className="text-gray-700 hover:text-[#466EA2] transition-colors duration-300"
              >
                <Instagram size={28} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-300 mb-8"></div>

        {/* Tabs */}
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Content Area */}
        <div className="mt-8 px-8 min-h-[200px]">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default Hero;

