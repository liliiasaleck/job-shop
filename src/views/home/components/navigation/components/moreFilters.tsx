import React from 'react';
import {
  makeStyles,
  Theme,
  createStyles,
  Modal,
  Typography,
  Fade,
  Button,
  Divider,
  Icon,
} from '@material-ui/core';
import {useState} from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(2, 4, 3),
    },
    main: {
      width: '100%',
      marginLeft: '15rem',
      color: 'grey',
      border: '1px solid lightgrey',
      borderRadius: '40px',
    },
  })
);

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
            <Typography>More filters</Typography>
            <Divider />
            <p>More filters</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default MoreFilter;
