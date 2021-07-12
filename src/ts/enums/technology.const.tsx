import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {faJs, faHtml5, faPhp, faPython, faJava} from '@fortawesome/free-brands-svg-icons';
import {faGem, faMobile, faSearch, faTasks, faUserCog} from '@fortawesome/free-solid-svg-icons';

type skill = {
  display: string;
  tech: string;
  icon: IconProp;
  backgroundColor: string;
};

// Porpawic techfilters
export const skills: skill[] = [
  {
    display: 'All',
    tech: 'all',
    icon: faJs,
    backgroundColor: 'rgb(255, 125, 80)',
  },
  {
    display: 'JS',
    tech: 'js',
    icon: faJs,
    backgroundColor: 'rgb(255, 199, 6)',
  },
  {
    display: 'HTML',
    tech: 'html',
    icon: faHtml5,
    backgroundColor: 'rgb(239, 83, 80)',
  },
  {
    display: 'PHP',
    tech: 'php',
    icon: faPhp,
    backgroundColor: 'rgb(65, 173, 250)',
  },
  {
    display: 'Python',
    tech: 'python',
    icon: faPython,
    backgroundColor: 'rgb(31, 123, 196)',
  },
  {
    display: 'Java',
    tech: 'java',
    icon: faJava,
    backgroundColor: 'rgb(249, 89, 122)',
  },
  {
    display: 'Mobile',
    tech: 'mobile',
    icon: faMobile,
    backgroundColor: 'rgb(150, 70, 163)',
  },
  {
    display: 'Testing',
    tech: 'testing',
    icon: faSearch,
    backgroundColor: 'rgb(248, 100, 104)',
  },
  {
    display: 'Admin',
    tech: 'admin',
    icon: faUserCog,
    backgroundColor: 'rgb(65, 173, 250)',
  },

  {
    display: 'PM',
    tech: 'pm',
    icon: faTasks,
    backgroundColor: 'rgb(255, 199, 6)',
  },
  {
    display: 'Ruby',
    tech: 'ruby',
    icon: faGem,
    backgroundColor: 'rgb(255, 125, 80)',
  },
];
