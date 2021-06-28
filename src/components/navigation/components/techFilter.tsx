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
        <div key={index} color="green" className={classes.round}>
          <FontAwesomeIcon icon={skill.icon} />
        </div>
      ))}
    </div>
  );
};

export default TechFilter;
