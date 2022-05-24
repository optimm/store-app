import React, { useEffect, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { IconButton, SwipeableDrawer, ToggleButtonGroup, ToggleButton, Box, InputBase, Paper, Grid, Button, InputLabel, FormControl, Select, MenuItem } from "@mui/material";
import HorizontalItem from "./StoreItem/horizontal";

import './catalogue.css';

const Catalogue = () => {

  //states
  const [value, setValue] = useState("")
  const [category, setCategory] = useState('all');
  const [area, setArea] = useState('all');
  const [open, setOpen] = useState(false);

  //handling  click functions
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



  function hello() {
    // alert(area);
    setOpen(true);
  }
  function bello() {
    alert(status);
    alert(category);
    alert(area);
  }

  //menu arrays
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const categoryData = ['all', 'grocery', 'butcher', 'baker', 'chemist', 'stationery']
  const areas = ['all', 'pune', 'thane', 'mumbai suburban', 'nashik', 'nagpur', 'ahmednagar']
  return (
    <>
      {/* main container */}
      <div className="catalogue-container">
        <Grid container spacing={1}>
          {/* left filter container */}
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
                  {/* <button onClick={hello}>click</button> */}
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
                <p className="store-category-heading">Area</p>
                <Paper elevation={2} className="area-paper">
                  <select className="filter-store-area-menu" onChange={(e) => { setArea(e.target.value) }}>
                    {
                      areas.map((item, index) => (
                        <option value={item} key={index} className="area-item">{item}</option>
                      ))
                    }
                  </select>
                </Paper>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={9}>
            <div className="catalogue-items-container">

              <Grid container spacing={1}>
                <Grid item xs={12} md={9}>
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
                </Grid>
                <Grid item md={3}>
                  <div className="catalogue-add-store-container">
                    <Button variant="contained" size="large" endIcon={<AddBusinessIcon />} className="add-store-button">
                      Add Store
                    </Button>
                  </div>
                </Grid>
                <div className="small-screen-add-store-container">
                  <Button variant="contained" size="medium" color="secondary" endIcon={<FilterAltIcon />} className="add-store-button filter-button" onClick={hello}>
                    Filters
                  </Button>
                  <Button variant="contained" size="medium" endIcon={<AddBusinessIcon />} className="add-store-button" onClick={bello}>
                    Add Store
                  </Button>


                </div>
              </Grid>

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

        </Grid >
      </div >

      <SwipeableDrawer anchor="bottom" open={open} onClose={() => setOpen(false)} className="drawer-menu" >
        <div className="drawer-store-status">
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
            </ToggleButtonGroup>
          </Paper>
        </div>
        <div className="drawer-dropdowns">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <div className="drawer-dropdown-indv">

                <FormControl fullWidth className="drawer-dropdown-content">

                  <InputLabel id="demo-simple-select-label">Category</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    onChange={(e) => { setCategory(e.target.value) }}
                    label="Category"

                  >
                    {categoryData.map((item, index) => (
                      <MenuItem value={item} style={{ textTransform: "capitalize" }}>{item}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="drawer-dropdown-indv">

                <FormControl fullWidth className="drawer-dropdown-content">
                  <InputLabel id="demo-simple-select-label">Area</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    onChange={(e) => { setArea(e.target.value) }}
                    label="Area"

                  >
                    {areas.map((item, index) => (
                      <MenuItem value={item} style={{ textTransform: "capitalize" }}>{item}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </Grid>
          </Grid>

        </div>
      </SwipeableDrawer>

    </>
  );
}
export default Catalogue;



