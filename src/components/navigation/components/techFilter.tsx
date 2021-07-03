import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import {skills} from '../../../ts/enums/technology.const';
import {useStyles} from './techFilter.style';
import {useDispatch} from 'react-redux';
import {filterOffersByTech} from '../../../store/actions/actions';

const TechFilter: React.FC = () => {
  const classes = useStyles();
  console.log(skills);

  const dispatch = useDispatch();

  return (
    <div className={classes.main}>
      {skills.map(({icon, tech}, index) => (
        <div
          key={index}
          className={classes.round}
          onClick={() => dispatch(filterOffersByTech(tech))}
        >
          {tech === 'all' ? (
            'All'
          ) : (
            <FontAwesomeIcon size="1x" className={classes.icon} icon={icon} fixedWidth />
          )}
        </div>
      ))}
    </div>
  );
};

export default TechFilter;
