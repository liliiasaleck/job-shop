import React, {useState} from 'react';
import {Button, List, ListItem, ListItemText, makeStyles, Menu, MenuItem} from '@material-ui/core/';
import {Link} from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import ComputerIcon from '@material-ui/icons/Computer';
import WorkIcon from '@material-ui/icons/Work';

const useStyles = makeStyles({
  textlink: {
    color: 'inherit',
    textDecoration: 'inherit',
    paddingLeft: '30px',
    width: '200px',
  },
});

const DropDownMenu: React.FC = () => {
  const classes = useStyles();
  const [anchorSignInButton, setAnchor] = useState<null | HTMLElement>(null);
  const handleClose = () => {
    setAnchor(null);
  };

  const openMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchor(event.currentTarget);
  };
  return (
    <>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={openMenu}
        endIcon={<Icon>expand_more</Icon>}
        color="secondary"
      >
        Sign in
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorSignInButton}
        keepMounted
        open={Boolean(anchorSignInButton)}
        onClose={handleClose}
      >
        <List>
          <ListItem button>
            <WorkIcon />
            <Link className={classes.textlink} to="/signinemployer">
              <ListItemText>Employer Panel</ListItemText>
            </Link>
          </ListItem>
          <ListItem button>
            <ComputerIcon />
            <Link className={classes.textlink} to="/signin">
              <ListItemText>Developer Panel</ListItemText>
            </Link>
          </ListItem>
        </List>
      </Menu>
    </>
  );
};

export default DropDownMenu;
