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

export interface GitHubActivity {
  id: string;
  type: 'commit' | 'pull-request' | 'issue' | 'repository' | 'contribution';
  title: string;
  description: string;
  repository?: string;
  date: string;
  language?: string;
  stars?: number;
  forks?: number;
  url?: string;
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
    period: "May 2025 – July 2025",
    description: [
      "Designed and implemented an automation workflow for XFA/PDF manipulation using Azure and Python, reducing manual form-filling effort by 95% and accelerating enterprise document processing.",
      "Architected full-stack solutions (backend, frontend, databases, AI services) that transformed raw form data into API-ready JSON and relational formats, improving cross-platform accessibility completely.",
      "Outlined UI/UX by designing wireframes and implementing a modern frontend stack (React, TypeScript, Tailwind) with seamless integration to agentic AI-powered backend services and RESTful APIs, enabling autonomous document processing and real-time enterprise data flows"
    ]
  },
  {
    id: "grayur-research",
    title: "SWE Undergraduate Research @ GrayUR",
    company: "Virginia Tech",
    location: "Blacksburg, VA",
    period: "Aug 2024 – May 2025",
    description: [
      "Developed a real-time audio processing system for the Phased Array Microphonics project using Python and Qt, enabling faster analysis of acoustic signals for experimental research.",
      "Designed a scalable GUI application with PySide6, supporting real-time audio visualization and recording, and ensuring extensibility for future research modules.",
      " Designed and conducted testing for signal manipulation algorithms that improved data extraction and provided clearer insights for research teams."
    ]
  },
  {
    id: "splunk-developer",
    title: "Data Analytics Splunk Developer",
    company: "Virginia Tech Division of Information Technology",
    location: "Blacksburg, VA",
    period: "Aug 2024 – Present",
    description: [
      "Built analytical dashboards for various projects using Splunk’s Search Processing Language to monitor various metrics such as security events and error logs across the Virginia Tech systems.",
      "Developed a smart alert system on Splunk, identifying over 100 faulty system errors, security breaches, or other suspicious activities daily across the entire university’s IT infrastructure."
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
      "Designed and deployed a full-stack resume scanning platform with a Next.js frontend and FastAPI backend, enabling seamless user interaction and scalable API performance.",
      "Integrated AI/NLP pipelines to improve PDF parsing accuracy by 25%, enhancing keyword extraction and candidate-job matching precision."
    ]
  },
  {
    id: "gigglebytes",
    name: "Gigglebytes",
    period: "April 2025 – April 2025",
    description: "Collaborated in a 3-member team, Gigglebytes, to compete in a data competition, securing a top 5 placement among all participating teams.",
    technologies: ["Python", "R", "Data Analytics", "Statistical Methodologies"],
    highlights: [
      "Collaborated in a 3-member team to achieve a Top 5 finish in a national-level data competition.",
      "Developed a statistical ranking model in Python to evaluate real estate opportunities, equipping real companies with actionable insights on where to best establish office complexes, and improving site selection accuracy by 50%.",
      "Generated visual reports and presented findings with clear metric explanations, enabling stakeholders to make data-driven decisions."
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