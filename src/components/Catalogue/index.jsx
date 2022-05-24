import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import { IconButton } from "@mui/material";
import HorizontalItem from "./StoreItem/horizontal";


import './catalogue.css';





const Catalogue = () => {
  const [value, setValue] = useState("")

  const handleSearch = (event, newValue) => {
    alert(value);
  }

  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>

      <div className="catalogue-container">
        <Grid container spacing={1}>
          <Grid item md={3}>
            <div className="catalogue-filter-container">

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



