import React, {useState} from 'react';
import {Modal, Typography, Fade, Button, Divider, Icon, MenuItem, Slider} from '@material-ui/core';
import {employmentType} from '../../../helpers/employmentType.cons';
import {experienceLvl} from '../../../helpers/experienceLvl.const';
import {useStyles} from './moreFilters.style';
import {useDispatch} from 'react-redux';
import {advancedFilter} from '../../../store/actions/offersActions';


function valuetext(value: number) {
  return `${value}PLN`;
}

const MoreFilter: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [salary, setSalary] = useState<number[]>([0, 100000]);
  const [selectedEmploymentType, setSelectedEmploymentType] = useState('All');
  const [selectedExperienceLvl, setSelectedExperienceLvl] = useState('All');

  const [employmentTypeArray, setEmploymentTypeArray] = useState([...employmentType]);
  const [experienceLvlArray, setExperienceLvlArray] = useState([...experienceLvl]);

  const dispatch = useDispatch();

  const handleChange = (event: any, newValue: number | number[]) => {
    setSalary(newValue as number[]);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdvancedFilter = () => {
    dispatch(advancedFilter(salary[0], salary[1], selectedEmploymentType, selectedExperienceLvl));
  };

  // const handleFilterOffersByExpEmplSalary = () => {
  //   let selectedEmploymentType;
  //   employmentTypeArray.forEach((item) => {
  //     if (item.isSelected) {
  //       selectedEmploymentType = item.type;
  //     }
  //   });

  //   if (selectedEmploymentType !== 'All') {
  //     const filteredOffers = offers.filter(
  //       (offer) =>
  //         offer.employmentType === selectedEmploymentType &&
  //         offer.salaryFrom >= salary[0] &&
  //         offer.salaryTo <= salary[1]
  //     );
  //     console.log(filteredOffers);
  //   }

  //   console.log(selectedEmploymentType);
  // };
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
    setExperienceLvlArray([...experienceLvlArrayWithSelectedType]);
  };

  return (
    <div className={classes.dropdown}>
      <Button className={classes.main} onClick={handleOpen} endIcon={<Icon>expand_more</Icon>}>
        More Filters
      </Button>
      <Modal className={classes.modal} open={open} onClose={handleClose}>
        <Fade in={open}>
          <div className={classes.paper}>
            <div className={classes.filtersContainer}>
            <Typography className={classes.text}>More filters</Typography>
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
              <Typography className={classes.text}>Salary expectations?</Typography>
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
                  <div>Min. amount</div>
                  <div>{salary[0]} PLN</div>
                </div>
                <div className={classes.slidervalue}>
                  <div>Max. amount</div>
                  <div>{salary[1]} PLN</div>
                </div>
              </div>
            </div>
            <div></div>
            <div>
              <Typography className={classes.text}>Employment Type</Typography>
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
              <Typography className={classes.text}>Seniority</Typography>
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
              <Button className={classes.clearBtn} onClick={handleClose}>
                Clear filter
              </Button>
              <Button
                className={classes.showBtn}
                onClick={() => {
                  handleAdvancedFilter();
                  handleClose();
                }}
              >
                Show offers
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default MoreFilter;
