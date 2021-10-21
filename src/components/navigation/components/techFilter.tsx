import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {useEffect} from 'react';
import {useStyles} from './techFilter.style';
import {useDispatch} from 'react-redux';
import {changeTech, filterOffers, filterOffersByTech} from '../../../store/actions/offersActions';
import {skills} from '../../../helpers/technology.const';
import {useSelector} from 'react-redux';
import {useTheme} from '@material-ui/core';

const TechFilter: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();

  const selectedTech = useSelector((state: any) => state.offers.tech);

  useEffect(() => {
    dispatch(filterOffers());
  }, [selectedTech]);

  const dispatch = useDispatch();

  return (
    <div className={classes.main}>
      {skills.map(({icon, tech, background}, index) => (
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
  );
};

export default TechFilter;
