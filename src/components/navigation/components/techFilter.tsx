import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import {skills} from '../../../ts/enums/technology.const';
import {useStyles} from './techFilter.style';

const TechFilter: React.FC = () => {
  const classes = useStyles();
  console.log(skills);

  return (
    <div className={classes.main}>
      <div className={classes.round}>All</div>

      {skills.map((skill, index) => (
        <div key={index} className={classes.round}>
          <FontAwesomeIcon size="1x" className={classes.icon} icon={skill.icon} fixedWidth />
        </div>
      ))}
    </div>
  );
};

export default TechFilter;
