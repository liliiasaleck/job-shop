import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {faJs, faHtml5, faPhp, faPython, faJava} from '@fortawesome/free-brands-svg-icons';
import {faGem, faMobile, faSearch, faTasks, faUserCog} from '@fortawesome/free-solid-svg-icons';

type skill = {
  display: string;
  tech: string;
  icon: IconProp;
  background: string;
};

export const skills: skill[] = [
  {
    display: 'All',
    tech: 'all',
    icon: faJs,
    background: 'linear-gradient(-90deg, rgb(186, 104, 200), rgb(156, 39, 176))',
  },
  {
    display: 'JS',
    tech: 'js',
    icon: faJs,
    background: 'linear-gradient(-90deg, rgb(255, 199, 6), rgb(255, 175, 0))',
  },
  {
    display: 'HTML',
    tech: 'html',
    icon: faHtml5,
    background: 'linear-gradient(-90deg, rgb(255, 125, 80), rgb(253, 93, 33))',
  },
  {
    display: 'PHP',
    tech: 'php',
    icon: faPhp,
    background: 'linear-gradient(-90deg, rgb(65, 173, 250), rgb(21, 124, 252))',
  },
  {
    display: 'Python',
    tech: 'python',
    icon: faPython,
    background: 'linear-gradient(-90deg, rgb(31, 94, 182), rgb(31, 123, 196))',
  },
  {
    display: 'Java',
    tech: 'java',
    icon: faJava,
    background: 'linear-gradient(-90deg, rgb(250, 101, 107), rgb(249, 89, 122))',
  },
  {
    display: 'Mobile',
    tech: 'mobile',
    icon: faMobile,
    background: 'linear-gradient(-90deg, rgb(224, 79, 134), rgb(186, 74, 141))',
  },
  {
    display: 'Testing',
    tech: 'testing',
    icon: faSearch,
    background: 'linear-gradient(-90deg, rgb(0, 150, 136), rgb(0, 121, 107))',
  },
  {
    display: 'Admin',
    tech: 'admin',
    icon: faUserCog,
    background: 'linear-gradient(-90deg, rgb(212, 104, 222), rgb(82, 77, 225))',
  },

  {
    display: 'PM',
    tech: 'pm',
    icon: faTasks,
    background: 'linear-gradient(-90deg, rgb(128, 203, 196), rgb(77, 182, 172))',
  },
  {
    display: 'Ruby',
    tech: 'ruby',
    icon: faGem,
    background: 'linear-gradient(-90deg, rgb(239, 83, 80), rgb(244, 67, 54))',
  },
];
