export interface SkillCategory {
  id: string;
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: '1',
    category: 'Languages',
    skills: ['Python', 'Java', 'JavaScript/TypeScript', 'C', 'C#', 'HTML/CSS', 'R', 'SQL'],
  },
  {
    id: '2',
    category: 'Frameworks',
    skills: [
      'React',
      'Next.js',
      'Node.js',
      'FastAPI',
      'Django',
      'Flask',
      'Tailwind CSS',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'spaCY',
      'Splunk',
      'EasyOCR',
    ],
  },
  {
    id: '3',
    category: 'Developer Tools',
    skills: ['Git', 'GitHub', 'Docker', 'AWS', 'Azure', 'PostgreSQL', 'Vercel', 'Figma'],
  },
  {
    id: '4',
    category: 'Additional Skills',
    skills: ['Project Management', 'Agile Development', 'Scrum', 'Kanban'],
  },
];

