import { useTheme } from '@material-ui/core';
import { skills } from '../../../helpers/technology.const';
import Typography from 'material-ui/styles/typography';
import React from 'react';
import { useStyles } from './techDisplay.style';


const TechDisplay: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();


  return (
    <div>
     {skills.map(({display}, index) => (
        <div
          key={display}
        >
        </div>
        
      ))}
    </div>
  );
};

export default TechDisplay;