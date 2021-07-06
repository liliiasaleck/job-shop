import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {faJs, faHtml5, faPhp, faPython, faJava} from '@fortawesome/free-brands-svg-icons';
import {faGem, faMobile, faSearch, faTasks, faUserCog} from '@fortawesome/free-solid-svg-icons';

type skill = {
  display: string;
  tech: string;
  icon: IconProp;
};

// Porpawic techfilters
export const skills: skill[] = [
  {
    display: 'All',
    tech: 'all',
    icon: faJs,
  },
  {
    display: 'JS',
    tech: 'js',
    icon: faJs,
  },
  {
    display: 'HTML',
    tech: 'html',
    icon: faHtml5,
  },
  {
    display: 'PHP',
    tech: 'php',
    icon: faPhp,
  },
  {
    display: 'Python',
    tech: 'python',
    icon: faPython,
  },
  {
    display: 'Java',
    tech: 'java',
    icon: faJava,
  },
  {
    display: 'Mobile',
    tech: 'mobile',
    icon: faMobile,
  },
  {
    display: 'Testing',
    tech: 'testing',
    icon: faSearch,
  },
  {
    display: 'Admin',
    tech: 'admin',
    icon: faUserCog,
  },

  {
    display: 'PM',
    tech: 'pm',
    icon: faTasks,
  },
  {
    display: 'Ruby',
    tech: 'ruby',
    icon: faGem,
  },
  {
    display: 'Ruby',
    tech: 'ruby',
    icon: faGem,
  },
];
