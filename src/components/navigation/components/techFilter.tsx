import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {ReactElement, useEffect} from 'react';
import {useStyles} from './techFilter.style';
import {useDispatch} from 'react-redux';
import {changeTech, filterOffers} from '../../../store/actions/offersActions';
import { skills} from '../../../helpers/technology.const';
import {useSelector} from 'react-redux';
import {useTheme} from '@material-ui/core';


const TechFilter = (): ReactElement => {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();


  const selectedTech = useSelector((state: any) => state.offers.tech);
  

  useEffect(() => {
    dispatch(filterOffers());
  }, [selectedTech]);


  return (
    <div className={classes.container}>
      <div className={classes.main}>
        {skills.map(({icon, tech, background, display}, index) => (
          <div
            key={index}
            className={classes.round}
            onClick={() => dispatch(changeTech(tech))}
            style={{
              background:
                tech === selectedTech
                  ? background
                  : 'linear-gradient(-90deg, rgb(145, 147, 170), rgb(125, 130, 168))',
            }}
          >
            {tech === 'all' ? (
              'All'
            ) : (
              <FontAwesomeIcon size="lg" className={classes.icon} icon={icon} fixedWidth />
            )}
          </div>
        ))}
      </div>
      <div className={classes.display}>
      {skills.map(({
         display}, index) => (
          <div
            key={index}
            className={classes.display}
            onClick={() => dispatch(changeTech(display))}
           
          >{display}
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechFilter;
