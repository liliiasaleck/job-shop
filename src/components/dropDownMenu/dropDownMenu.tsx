import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';

const DropDownMenu: React.FC = () => {
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
        <Link to="/signin">
          <MenuItem onClick={handleClose}>Sign in as a developer</MenuItem>
        </Link>
        <Link to="/signinemployer">
          <MenuItem onClick={handleClose}>Sign in to Employer Panel</MenuItem>
        </Link>
      </Menu>
    </>
  );
};

export default DropDownMenu;
