import React, {useState, useEffect, ReactElement} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import {useStyles} from './search-bar.style';
import {useDispatch} from 'react-redux';
import {searchOfferByName} from '../../../store/actions/offers-actions';
import {useDebounce} from '../../../hooks/use-debounce';


const SearchBar = (): ReactElement => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [searchInputValue, setInputValue] = useState<string>('');
  const debouncedSearchTerm: string = useDebounce<string>(searchInputValue, 500);

  useEffect((): void => {
    dispatch(searchOfferByName(searchInputValue));
  }, [debouncedSearchTerm]);

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
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{'aria-label': 'search'}}
      />
    </div>
  );
};

export default SearchBar;
