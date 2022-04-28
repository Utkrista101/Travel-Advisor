import useStyles from "./style";
import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";

export default function Header({ setCoordinates }) {
  const classes = useStyles();
  const [autocomplete, setAutocomplete] = useState(null);

  const onLoadHandler = (autoC) => {
    setAutocomplete(autoC);
  };

  const onPlaceChangedHandler = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    setCoordinates({ lat, lng });
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h5" className={classes.title}>
            Travel Advisor
          </Typography>
          <Box display="flex">
            <Typography variant="h6" className={classes.title}>
              Explore New Places
            </Typography>
            <Autocomplete
              onLoad={onLoadHandler}
              onPlaceChanged={onPlaceChangedHandler}
            >
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search..."
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                />
              </div>
            </Autocomplete>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
