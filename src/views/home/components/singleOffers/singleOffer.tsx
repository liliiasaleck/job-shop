import {
  Box,
  Button,
  Checkbox,
  Divider,
  InputAdornment,
  TextField,
  Typography,
  useTheme,
} from '@material-ui/core';
import {PermIdentity, ArrowBack} from '@material-ui/icons';
import React from 'react';
import Navigation from '../../../../components/navigation/navigationFilters';
import {useHistory} from 'react-router-dom';
import {useStyles} from './singleOffer.style';
import {faIdCard, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import EmailIcon from '@material-ui/icons/Email';
import CreateIcon from '@material-ui/icons/Create';
import {useDispatch} from 'react-redux';
import {selectOffer} from '../../../../store/actions/offersActions';

const SingleOffer: React.FC = ({
  location: {
    state: {
      title,
      salaryFrom,
      salaryTo,
      location,
      companyName,
      companySize,
      experience,
      jobDescription,
      logo,
      employmentType,
      aboutCompany,
    },
  },
}: any) => {
  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();

  const dispatch = useDispatch();

  const handleGoBack = () => {
    dispatch(selectOffer({}));

    history.push('/');
  };

  return (
    <>
      <Navigation />

      <Box className={classes.box}>
        <Button className={classes.btnback} onClick={handleGoBack}>
          <ArrowBack />
        </Button>
        <div className={classes.top}>
          <div className={classes.maininfo}>
            <div className={classes.imagebox}>
              <img className={classes.image} src={logo?.url} />
            </div>
            <div>
              <Typography className={classes.title}>{title}</Typography>
              <Typography className={classes.subTitle}>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                {" "}
                {location}
              
              </Typography>
              <Typography className={classes.subTitle}>
              <FontAwesomeIcon icon={faIdCard} />
              {" "}
                {employmentType}
              </Typography>
            </div>
          </div>
        </div>
        <div className={classes.information}>
          <Typography className={classes.infodiv}>
            {companyName}
            <p className={classes.smallTitle}>Company name</p>
          </Typography>
          <Typography className={classes.infodiv}>
            {companySize} <p className={classes.smallTitle}>Company size</p>
          </Typography>
          <Typography className={classes.infodiv}>
            {experience}
            <p className={classes.smallTitle}>EXP.lvl</p>
          </Typography>
          <Typography className={classes.infodiv}>
            {salaryFrom}-{salaryTo}PLN
            <p className={classes.smallTitle}>Salary</p>
          </Typography>
        </div>
        <div className={classes.description}>
          <Typography className={classes.descriptionText}>Brand story</Typography>
          <Typography className={classes.aboutCompany}>{aboutCompany}</Typography>
        </div>
        <div className={classes.description}>
          <Typography className={classes.descriptionText}>Description</Typography>
          <Typography className={classes.aboutCompany}>{jobDescription}</Typography>
        </div>
        <div className={classes.divform}>
          <Typography className={classes.descriptionText}>Apply for this job</Typography>
          <Divider />
          <form className={classes.form} noValidate autoComplete="off">
            <div className={classes.firstform}>
              <TextField
                className={classes.textfield}
                label="First and last name"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PermIdentity className={classes.icon} />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                className={classes.textfield}
                label="Email"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon className={classes.icon} />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div className={classes.secondform}>
              <TextField
                className={classes.textarea}
                label="Introduce yourself"
                multiline
                rows={6}
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CreateIcon className={classes.icon} />
                    </InputAdornment>
                  ),
                }}
              />
              <Button className={classes.uploadBtn} variant="contained" component="label">
                Upload Logo
                <input type="file" hidden />
              </Button>
            </div>
            <Button variant="contained" color="secondary" className={classes.signbtn}>
              Apply
            </Button>
          </form>
        </div>
      </Box>
    </>
  );
};

export default SingleOffer;
