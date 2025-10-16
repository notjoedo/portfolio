// Import project images
import harborImage from '../images/harbor.jpg';
import atlasImage from '../images/atlas.jpg';

export interface Project {
  id: string;
  title: string;
  description: string;
  projectName: string;
  image?: string;
  link?: string;
  isInternal?: boolean;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Harbor',
    description: 'AI-Powered Housing Agent',
    projectName: 'VTHacks13 Project',
    image: harborImage,
    link: 'https://devpost.com/software/harbor-dc63ey',
  },
  {
    id: '2',
    title: 'Atlas',
    description: 'Creative Trip Planning',
    projectName: 'CodeFest w/ Marriott Project',
    image: atlasImage,
    link: '/atlas',
    isInternal: true,
  },
];

