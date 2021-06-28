import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import {useStyles} from './searchBar.style';

const Search: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.search}>
      <div className={classes.icon}>
        <SearchIcon />
      </div>
      <InputBase
        margin="dense"
        placeholder="Search…"
        type="search"
        multiline
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{'aria-label': 'search'}}
      />
    </div>
  );
};

export default Search;
