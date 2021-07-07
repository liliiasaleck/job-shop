import React, {useState} from 'react';
import {Button, List, ListItem, ListItemText, Menu} from '@material-ui/core/';
import {Link} from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import ComputerIcon from '@material-ui/icons/Computer';
import WorkIcon from '@material-ui/icons/Work';
import {useStyles} from './dropDown.style';
import {routes} from '../../helpers/routes';

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
        className={classes.button}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={openMenu}
        endIcon={<Icon>expand_more</Icon>}
        variant="contained"
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
            <WorkIcon color="secondary" />
            <Link className={classes.textlink} to={routes.signInEmployer}>
              <ListItemText>Employer Panel</ListItemText>
            </Link>
          </ListItem>
          <ListItem button>
            <ComputerIcon color="secondary" />
            <Link className={classes.textlink} to={routes.signIn}>
              <ListItemText>Developer Panel</ListItemText>
            </Link>
          </ListItem>
        </List>
      </Menu>
    </>
  );
};

export default DropDownMenu;
