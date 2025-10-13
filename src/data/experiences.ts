export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'AI Integration & Full-Stack Software Engineering Intern',
    company: 'Centennial Technologies',
    location: 'Leesburg, VA',
    period: 'May 2025 – Jul 2025',
    bullets: [
      'Eliminated tedious data entry tasks by designing and implementing automation workflow using Azure and Flask for the backend, successfully reducing manual form-filling efforts by 95%, and accelerated enterprise document processing for individuals and organizations.',
      'Solved data incompatibility by architecting a full-stack data pipeline, transforming over 1000 raw documents into API-ready formats for efficient integration across enterprise systems.',
      'Designed UI/UX from wireframes and developed a modern frontend (React, TypeScript, Tailwind) that provided an intuitive and accessible interface, passing WCAG tests for the AI-powered document processing system.',
    ],
  },
  {
    id: '2',
    title: 'Lead SWE Undergraduate Researcher',
    company: "GrayUR's Phased Array Microphonics Team",
    location: 'Blacksburg, VA',
    period: 'Aug 2024 – Present',
    bullets: [
      'Spearhead a 5-member team by delegating algorithm and hardware integration tasks, concurrently researching and developing core visualization GUI using Python and PySide6, decreasing analysis time by 80%.',
      'To enhance the project\'s analytical capabilities, I researched, developed, and integrated a custom PyTorch model that improved data prediction accuracy by 55% and automated a previously manual analysis process.',
      'Lead code reviews to improve code quality and consistency, providing feedback that reduced production bugs by an estimated 80% and fostered a collaborative environment.',
    ],
  },
  {
    id: '3',
    title: 'Splunk Dashboard Data Analytics Developer Intern',
    company: 'Virginia Tech Division of Information Technology',
    location: 'Blacksburg, VA',
    period: 'Aug 2024 – Present',
    bullets: [
      'Enhance system monitoring by translating stakeholder needs into 15+ analytical dashboards using Splunk SPL, which reduced the identification time for critical security events by 90%.',
      'Detect system vulnerabilities in real-time by developing a smart alert system in Splunk that successfully identified over 100 critical errors and security breaches daily, leading to 50% decreased incident response time.',
    ],
  },
];

