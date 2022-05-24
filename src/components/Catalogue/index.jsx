import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { IconButton } from "@mui/material";
import HorizontalItem from "./StoreItem/horizontal";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


import './catalogue.css';





const Catalogue = () => {



  const [value, setValue] = useState("")
  const [category, setCategory] = React.useState('all');

  const handleChangeCategory = (event, nextView) => {
    setCategory(nextView);
  };
  const handleSearch = (event, newValue) => {
    alert(value);
  }
  const [status, setStatus] = React.useState('all');

  const handleChangeStatus = (event, newStatus) => {
    setStatus(newStatus);
  };

  const [area, setArea] = React.useState('all');

  const handleChangeArea = (event) => {
    setArea(event.target.value);
  };
  function hello() {
    alert(area);
  }

  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const categoryData = ['all', 'grocery', 'butcher', 'baker', 'chemist', 'stationery']
  return (
    <>

      <div className="catalogue-container">
        <Grid container spacing={1}>
          <Grid item md={3} className="main-left">
            <div className="catalogue-filter-container">
              <Paper className="filter-button-group-elevation">
                <ToggleButtonGroup
                  value={status}
                  exclusive
                  className="toggle-button-group"
                  onChange={handleChangeStatus}

                >
                  <ToggleButton className="toggle-button" variant="contained" value='all' color={"primary"}>All</ToggleButton>
                  <ToggleButton className="toggle-button" variant="contained" value="open" color={"success"}>Open</ToggleButton>
                  <ToggleButton className="toggle-button" variant="contained" value="close" color={"error"}>Closed</ToggleButton>
                  <button onClick={hello}>click</button>
                </ToggleButtonGroup>
              </Paper>
              {/* category filter */}
              <div className="filter-store-category">
                <p className="store-category-heading">Category</p>
                <ToggleButtonGroup
                  orientation="vertical"
                  value={category}
                  exclusive
                  onChange={handleChangeCategory}
                  className="store-category-button-group"
                >
                  {categoryData.map((item, index) => (
                    <ToggleButton className="store-category-button" value={item} aria-label="list" key={index}>
                      <p>{item}</p>
                    </ToggleButton>
                  ))}
                </ToggleButtonGroup>
              </div>
              {/* area filter */}
              <div className="filter-store-area">
                {/* <FormControl fullWidth className="filter-store-area-form">
                  <InputLabel id="demo-simple-select-label">Area</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={area}
                    label="Area"
                    onChange={handleChangeArea}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl> */}
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={9}>
            <div className="catalogue-items-container">
              {/* search bar */}
              <div className="catalogue-search-bar">
                <Paper
                  component="form"
                  sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                >
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Stores"
                    onChange={(e) => setValue(e.target.value)}
                  />
                  <IconButton sx={{ p: '10px' }} aria-label="search" onClick={handleSearch}>
                    <SearchIcon />
                  </IconButton>
                </Paper>
              </div>
              {/* all stores  */}
              <div className="catalogue-item-list">
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={{ xs: 2, md: 2 }}>
                    {data.map((_, index) => (
                      <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
                        <HorizontalItem />
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </div>

            </div>
          </Grid>

        </Grid>
      </div>

    </>
  );
}
export default Catalogue;



