import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {ReactElement, useEffect} from 'react';
import {useStyles} from './technology-filter.style';
import {useDispatch} from 'react-redux';
import {changeTech, filterOffers} from '../../../store/actions/offers-actions';
import { skills} from '../../../helpers/technology.const';
import {useSelector} from 'react-redux';
import {useTheme} from '@material-ui/core';
import {ALL_TEXT,ALL_FILTER_TEXT} from '../components/filters.const';
import { StoreInterface } from '../../../store/store.interface';


const TechnologyFilter = (): ReactElement => {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();


  const selectedTech = useSelector((state: StoreInterface) => state.offers.tech);
  

  useEffect(() => {
    dispatch(filterOffers());
  }, [selectedTech]);


  return (
    <div>
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
            {tech === ALL_FILTER_TEXT ? (
              ALL_TEXT
            ) : (
              <FontAwesomeIcon size="lg" icon={icon} fixedWidth />
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

export default TechnologyFilter;
