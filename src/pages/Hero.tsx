import { useState } from "react";
import { Github, Linkedin, Instagram } from "lucide-react";
import pfp from "../images/pfp.jpg";
import Tabs from "../components/Tabs";
import SkillTag from "../components/SkillTag";
import FilterTag from "../components/FilterTag";
import { skillCategories } from "../data/skills";

function Hero() {
  const [activeTab, setActiveTab] = useState("bio");
  const [selectedSkillCategory, setSelectedSkillCategory] =
    useState("Languages");

  const tabs = [
    { id: "bio", label: "bio" },
    { id: "education", label: "education" },
    { id: "interests", label: "interests & skills" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "bio":
        return (
          <div
            key="bio"
            className="text-gray leading-loose font-light animate-slideIn text-center md:text-left"
          >
            <p>
              Hey there! I'm a student at Virginia Tech, majoring in data
              science with a minor in computer science. I'm super passionate
              about building full-stack solutions and designing apps that are
              intuitive, interactive, and cool to use. If it involves
              programming, I'm all in! I'm currently on the lookout for SWE and
              analytical roles. Let's connect!
            </p>
          </div>
        );
      case "education":
        return (
          <div
            key="education"
            className="text-gray leading-loose font-light animate-slideIn text-center md:text-left"
          >
            <p>
              Junior at Virginia Tech, majoring in data science with a minor in
              computer science. I have a concentration in Cybersecurity and
              Cryptography! I'm also a lead researcher in the GrayUR's Phased
              Array Microphonics Team, where I spearhead a 5-member team! I'm
              also a part of the Virginia Tech SASE (Society of Asian Scientists
              and Engineers).
            </p>
          </div>
        );
      case "interests":
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
    <div className="min-h-screen flex items-center justify-center bg-white px-4 overflow-x-hidden">
      <div className="w-full max-w-4xl mx-auto">
        {/* Profile Section - Responsive Layout */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-8 md:justify-center items-center text-center md:text-left mb-6 md:mb-12">
          {/* Profile Picture */}
          <div className="mb-4 md:mb-0 flex-shrink-0">
            <img
              src={pfp}
              alt="Joe's profile"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"
            />
          </div>

          {/* Text and Icons Container */}
          <div className="flex flex-col items-center md:items-start">
            {/* Header Text */}
            <h1 className="text-3xl md:text-5xl font-light text-gray-900 mb-4 md:mb-6">
              Hello, I'm Hoang!
            </h1>
            <h2 className="text-lg md:text-xl font-light text-gray-500 mb-4 md:mb-6">
              I also go by Joe :)
            </h2>
            {/* Social Media Icons */}
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://github.com/notjoedo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-[#466EA2] transition-colors duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/hoanglehuydo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-[#466EA2] transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/j03do"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-[#466EA2] transition-colors duration-300"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-300 mb-4 md:mb-8"></div>

        {/* Tabs */}
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Filter Tags Area - Fixed height to prevent shifting */}
        <div className="mt-4 md:mt-8 min-h-[52px] flex items-start justify-center px-4 md:px-8">
          {activeTab === "interests" && (
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
        <div
          className={`px-4 md:px-8 min-h-[200px] w-full ${
            activeTab === "interests" ? "mt-4 md:mt-0" : "mt-3 md:mt-0"
          }`}
        >
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default Hero;
