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
import Navigation from '../../../../components/navigation/navigation';
import {useHistory} from 'react-router-dom';
import {useStyles} from './singleOffer.style';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import EmailIcon from '@material-ui/icons/Email';
import CreateIcon from '@material-ui/icons/Create';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const SingleOffer: React.FC = ({
  location: {
    state: {
      title,
      salary,
      location,
      companyName,
      employmentType,
      companySize,
      experience,
      jobDescription,
      logo,
    },
  },
}: any) => {
  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();

  return (
    <>
      <Navigation />
      <Box className={classes.box}>
        <Button className={classes.btnback} onClick={() => history.push('/')}>
          <ArrowBack />
        </Button>
        <div className={classes.top}>
          <div className={classes.maininfo}>
            <div className={classes.imagebox}>
              <img className={classes.image} src={logo} />
            </div>
            <div>
              <Typography variant="h5">{title}</Typography>
              <Typography>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                {location}
              </Typography>
              <Typography>
                {salary} - {employmentType}
              </Typography>
            </div>
          </div>
        </div>
        <div className={classes.information}>
          <Typography className={classes.infodiv}>
            {companyName}
            <p>Company name</p>
          </Typography>
          <Typography className={classes.infodiv}>
            {companySize} <p>Company size</p>
          </Typography>
          <Typography className={classes.infodiv}>
            {experience}
            <p>EXP.lvl</p>
          </Typography>
        </div>
        <div className={classes.description}>
          <Typography>Description</Typography>
          <Divider />
          <Typography>{jobDescription}</Typography>
        </div>
        <div className={classes.divform}>
          <Typography>Apply for this job</Typography>
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
              <div>
                <input type="file" autoComplete="off" />
              </div>
            </div>
            <div className={classes.thirdform}>
              <Checkbox />
              <span>Privacy notice for recruitment platform </span>
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
