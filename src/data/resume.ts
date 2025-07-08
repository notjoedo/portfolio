export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface Project {
  id: string;
  name: string;
  period: string;
  description: string;
  technologies: string[];
  highlights: string[];
}

export interface Skill {
  category: string;
  icon: string;
  items: string[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

export interface Education {
  institution: string;
  degree: string;
  minor?: string;
  concentration?: string;
  period: string;
  location: string;
}

export const contactInfo: ContactInfo = {
  email: "joedo2910@vt.edu",
  phone: "",
  linkedin: "linkedin.com/in/hoanglehuydo/",
  github: "github.com/notjoedo"
};

export const education: Education = {
  institution: "Virginia Tech",
  degree: "B.S. in Computational Modeling and Data Analytics",
  minor: "Computer Science",
  concentration: "Cybersecurity and Cryptography",
  period: "Aug. 2023 – May 2027",
  location: "Blacksburg, VA"
};

export const experiences: Experience[] = [
  {
    id: "centennial-intern",
    title: "AI Integration & Full-Stack Software Engineering Intern",
    company: "Centennial Technologies",
    location: "Leesburg, VA",
    period: "May 2025 – Present",
    description: [
      "Designed and implemented an end-to-end automation workflow for XFA/PDF manipulation, leveraging Azure services and Python libraries to streamline and accelerate form-filling processes.",
      "Architected full-stack solutions encompassing backend services, frontend clients, databases, and AI services, transforming parsed form data into API-ready JSON and relational formats for optimized cross-platform accessibility and performance.",
      "Outlined UI/UX by designing wireframes and implemented modern frontend stack utilizing React, TypeScript, and Tailwind, with seamless integration to AI-powered backend services and RESTful APIs for real-time data processing."
    ]
  },
  {
    id: "grayur-research",
    title: "Undergraduate Research @ GrayUR",
    company: "Virginia Tech",
    location: "Blacksburg, VA",
    period: "Aug 2024 – May 2025",
    description: [
      "Contributed to the development of a real-time audio processing system for the Phased Array Microphonics research project, building a custom GUI and backend using Python and Qt frameworks.",
      "Designed and developed a scalable GUI application supporting real-time audio processing and recording, with customizable features to enable future extensibility using PySide6 and various other Python libraries.",
      "Contributed to the development and testing of Python algorithms for audio signal manipulation and post-processing to extract meaningful data for research analysis."
    ]
  },
  {
    id: "splunk-developer",
    title: "Splunk Dashboard Developer",
    company: "Virginia Tech Division of Information Technology",
    location: "Blacksburg, VA",
    period: "Aug 2024 – May 2025",
    description: [
      "Built interactive dashboards for various projects using Splunk's Search Processing Language to monitor various metrics such as security events and error logs across the Virginia Tech systems.",
      "Developed a smart alert system on Splunk, notifying admins of security breaches or system errors across university IT infrastructure."
    ]
  }
];

export const projects: Project[] = [
  {
    id: "skillthread",
    name: "SkillThread",
    period: "March 2025 – May 2025",
    description: "Developed a full-stack resume scanning application, SkillThread, utilizing Next.js as frontend development and FastAPI for backend APIs.",
    technologies: ["Python", "Natural Language Processing (NLP)", "Next.js", "FastAPI", "Vercel"],
    highlights: [
      "Applied AI and NLP to optimize PDF parsing in SkillThread, enhancing accuracy in extracting keywords and experience for precise job matching by integrating job site APIs to fetch relevant job listings."
    ]
  },
  {
    id: "gigglebytes",
    name: "Gigglebytes",
    period: "April 2025 – April 2025",
    description: "Collaborated in a 3-member team, Gigglebytes, to compete in a data competition, securing a top 5 placement among all participating teams.",
    technologies: ["Python", "R", "Data Analytics", "Statistical Methodologies"],
    highlights: [
      "Engineered a score-based ranking model in Python to extract and analyze real-world data from various files, employing statistical methods to generate quantifiable reports with visualizations and comprehensive solutions to real problems.",
      "Conducted in-depth analysis and documented key findings, presenting the model with clear explanations of chosen metrics, their significance, and the overall results."
    ]
  }
];

export const skills: Skill[] = [
  {
    category: "Languages",
    icon: "fas fa-code",
    items: ["Java", "JavaScript", "Python", "C", "C#", "HTML/CSS", "R"]
  },
  {
    category: "Frameworks/Libraries",
    icon: "fas fa-layer-group",
    items: ["Next.js", "React", "Node.js", "Tailwind", "Flask", "FastAPI", "Django", "JUnit", "Scikit-learn", "Pandas", "NumPy", "easyOCR"]
  },
  {
    category: "Developer Tools",
    icon: "fas fa-tools",
    items: ["Git", "Docker", "Azure", "VS Code", "Eclipse", "AWS", "Vercel", "Figma"]
  }
]; 