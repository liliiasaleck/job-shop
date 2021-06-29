import React from 'react';
import {Modal, Typography, Fade, Button, Divider, Icon, MenuItem, Slider} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {useStyles} from './moreFilters.style';

const MoreFilter: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        className={classes.main}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleOpen}
        endIcon={<Icon>expand_more</Icon>}
      >
        More Filters
      </Button>
      <Modal className={classes.modal} open={open} onClose={handleClose}>
        <Fade in={open}>
          <div className={classes.paper}>
            <Typography className={classes.text}>More filters</Typography>
            <Divider />
            <div>
              <Typography className={classes.text}>Employment Type</Typography>
            </div>
            <div className={classes.box}>
              <MenuItem className={classes.item}>All</MenuItem>
              <MenuItem className={classes.item}>B2B</MenuItem>
              <MenuItem className={classes.item}>Permanent</MenuItem>
              <MenuItem className={classes.item}>Mandate contract</MenuItem>
            </div>
            <Divider />
            <div>
              <Typography className={classes.text}>Seniority</Typography>
            </div>
            <div className={classes.box}>
              <MenuItem className={classes.item}>All</MenuItem>
              <MenuItem className={classes.item}>Junior</MenuItem>
              <MenuItem className={classes.item}>Mid</MenuItem>
              <MenuItem className={classes.item}>Senior</MenuItem>
            </div>
            <div className={classes.buttons}>
              <Button className={classes.button} aria-controls="simple-menu" aria-haspopup="true">
                Clear filter
              </Button>
              <Button className={classes.button} aria-controls="simple-menu" aria-haspopup="true">
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
