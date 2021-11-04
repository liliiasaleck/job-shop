import React, {ReactElement, useState} from 'react';
import {Modal, Typography, Fade, Button, Divider, Icon, MenuItem, Slider} from '@material-ui/core';
import {employmentType} from '../../../helpers/employment-type.const';
import {experienceLvl} from '../../../helpers/experience-lvl.const';
import {useStyles} from './advanced-filter.style';
import {useDispatch, useSelector} from 'react-redux';
import {
  changeEmploymentType,
  changeExperience,
  changeSalary,
  filterOffers,
  resetFilters,
} from '../../../store/actions/offers-actions';
import {
  FILTER_TITLE_TEXT,
  SALARY_TEXT,
  SALARY_FROM_TEXT,
  CURRENCY_TEXT,
  SALARY_TO_TEXT,
  EMPLOYMENT_TYPE_TEXT,
  SENIORITY_TYPE_TEXT,
  CLEAR_BUTTON_TEXT,
  SHOW_BUTTON_TEXT,
  ALL_TEXT
} from '../components/filters.const';
import { StoreInterface } from '../../../store/store.interface';

const AdvancedFilter = (): ReactElement => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);
  const [selectedEmploymentType, setSelectedEmploymentType] = useState<string>(ALL_TEXT);
  const [selectedExperienceLvl, setSelectedExperienceLvl] = useState<string>(ALL_TEXT);

  const [employmentTypeArray, setEmploymentTypeArray] = useState([...employmentType]);
  const [experienceLvlArray, setExperienceLvlArray] = useState([...experienceLvl]);

  const salary = useSelector((state: StoreInterface) => state.offers.salary);

  const dispatch = useDispatch();

  const handleChange = (event: any, newValue: number | number[]) => {
    dispatch(changeSalary(newValue));
  };

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const handleAdvancedFilter = () => {
    dispatch(filterOffers());
  };

  const handleReset = (): void => {
    handleEmploymentTypeSelected(ALL_TEXT);
    handleExperienceLvlSelected(ALL_TEXT);
    dispatch(resetFilters());
    handleClose();
  };

  const handleEmploymentTypeSelected = (type) => {
    const employmentTypeArrayWithSelectedType = employmentTypeArray.map((employment) =>
      employment.type === type
        ? {
            ...employment,
            isSelected: true,
          }
        : {
            ...employment,
            isSelected: false,
          }
    );
    setSelectedEmploymentType(type);
    dispatch(changeEmploymentType(type));
    setEmploymentTypeArray([...employmentTypeArrayWithSelectedType]);
  };

  const handleExperienceLvlSelected = (type) => {
    const experienceLvlArrayWithSelectedType = experienceLvlArray.map((experience) =>
      experience.type === type
        ? {
            ...experience,
            isSelected: true,
          }
        : {
            ...experience,
            isSelected: false,
          }
    );
    setSelectedExperienceLvl(type);
    dispatch(changeExperience(type));
    setExperienceLvlArray([...experienceLvlArrayWithSelectedType]);
  };

  return (
    <div className={classes.dropdown}>
      <Button
        className={classes.main}
        onClick={handleOpen}
        endIcon={<Icon>expand_more</Icon>}
        startIcon={<Icon>tune</Icon>}
      >
       {FILTER_TITLE_TEXT}
      </Button>
      <Modal className={classes.modal} open={open} onClose={handleClose}>
        <Fade in={open}>
          <div className={classes.paper}>
            <div className={classes.filtersContainer}>
              <Typography className={classes.text}>{FILTER_TITLE_TEXT}</Typography>
              <Button
                className={classes.close}
                aria-controls="simple-menu"
                aria-haspopup="true"
                endIcon={<Icon>close</Icon>}
                onClick={handleClose}
              />
            </div>
            <Divider />
            <div>
              <Typography className={classes.text}>{SALARY_TEXT}</Typography>
              <Slider
                className={classes.slider}
                value={salary}
                onChange={handleChange}
                aria-labelledby="range-slider"
                min={0}
                max={100000}
                step={1000}
              />
              <div className={classes.sliderbox}>
                <div className={classes.slidervalue}>
                  <div>{SALARY_FROM_TEXT}</div>
                  <div>
                    {salary[0]} {CURRENCY_TEXT}
                  </div>
                </div>
                <div className={classes.slidervalue}>
                  <div>{SALARY_TO_TEXT}</div>
                  <div>
                    {salary[1]} {CURRENCY_TEXT}
                  </div>
                </div>
              </div>
            </div>
            <div></div>
            <div>
              <Typography className={classes.text}>{EMPLOYMENT_TYPE_TEXT}</Typography>
            </div>
            <div className={classes.box}>
              {employmentTypeArray.map(({type, isSelected}, index) => (
                <MenuItem
                  key={index}
                  className={isSelected ? classes.itemSelected : classes.item}
                  onClick={() => handleEmploymentTypeSelected(type)}
                >
                  {type}
                </MenuItem>
              ))}
            </div>
            <div>
              <Typography className={classes.text}>{SENIORITY_TYPE_TEXT}</Typography>
            </div>
            <div className={classes.box}>
              {experienceLvlArray.map(({type, isSelected}, index) => (
                <MenuItem
                  key={index}
                  className={isSelected ? classes.itemSelected : classes.item}
                  onClick={() => handleExperienceLvlSelected(type)}
                >
                  {type}
                </MenuItem>
              ))}
            </div>
            <div className={classes.buttons}>
              <Button className={classes.clearBtn} onClick={handleReset}>
                {CLEAR_BUTTON_TEXT}
              </Button>
              <Button
                className={classes.showBtn}
                onClick={() => {
                  handleAdvancedFilter();
                  handleClose();
                }}
              >
                {SHOW_BUTTON_TEXT}
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default AdvancedFilter;
