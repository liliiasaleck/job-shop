import React, {useState, useEffect} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import {useStyles} from './searchBar.style';
import {useDispatch} from 'react-redux';
import {searchOfferByName} from '../../../store/actions/actions';

const Search: React.FC = () => {
  const classes = useStyles();

  const [searchInputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchOfferByName(searchInputValue));
  }, [searchInputValue]);

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        margin="dense"
        placeholder="Search…"
        type="search"
        value={searchInputValue}
        onChange={(e) => setInputValue(e.target.value)}
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
