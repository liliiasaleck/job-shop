import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      width: "30%",
      height: "35px",
      display: "flex",
      alignItems: "center",
      backgroundColor: "whitesmoke",
      borderRadius: "40px",
    },
    inputRoot: {},
    inputInput: {
      color: "grey",
      margin: "0px 0px 0px 0px",
    },
    icon: {
      paddingLeft: "5%",
      color: "grey",
    },
  })
);
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
        inputProps={{ "aria-label": "search" }}
      />
    </div>
  );
};

export default Search;
