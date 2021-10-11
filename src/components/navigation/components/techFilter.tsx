import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import {useStyles} from './techFilter.style';
import {useDispatch} from 'react-redux';
import {filterOffersByTech} from '../../../store/actions/offersActions';
import {skills} from '../../../helpers/technology.const';
import {useSelector} from 'react-redux';
import {useTheme} from '@material-ui/core';

const TechFilter: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();

  const selectedTech = useSelector((state: any) => state.offers.tech);

  const dispatch = useDispatch();

  return (
    <div className={classes.main}>
      {skills.map(({icon, tech, backgroundColor, display}, index) => (
        <div
          key={index}
          className={classes.round}
          onClick={() => dispatch(filterOffersByTech(tech))}
          style={{backgroundColor: tech === selectedTech ? backgroundColor : 'rgb(145, 147, 170)'}}
        >
          {tech === 'all' ? (
            'All'
          ) : (
            <FontAwesomeIcon size="lg" className={classes.icon} icon={icon} fixedWidth />
          )}
        </div>
        
      ))
      }
    </div>
  );
};

export default TechFilter;
