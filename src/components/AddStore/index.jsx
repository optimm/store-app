import React, { useEffect, useState } from "react";
import { Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, } from "@mui/material";
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import "./addstore.css";

const AddStore = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [area, setArea] = useState("");
  const [openDate, setOpenDate] = useState("");
  const [closeDate, setCloseDate] = useState("");
  //todays date
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();

  today = yyyy + "-" + mm + "-" + dd;
  function bello() {
    //clearing
    // setCategory("");
    // setArea("");
    // setName("");
    // alert(today);

    //date comparison
    // alert(openDate);
    // alert(closeDate);
    // if (closeDate < openDate) {
    //   alert("hehfjsf");
    // }
    //test for alphabets only
    // if (!/[^a-zA-Z]/.test(name)) {
    //   alert(name);
    // }
    // else {
    //   alert("galat naam!");
    // }
  }

  const categoryData = ["all", "grocery", "butcher", "baker", "chemist", "stationery"];
  const areas = ["all", "pune", "thane", "mumbai suburban", "nashik", "nagpur", "ahmednagar"];
  return (
    <>
      <div className="add-store-container">
        <img src="./images/addstore.png" className="add-store-icon"></img>
        <p className="add-store-header">Add Store</p>
        <div className="add-store-inputs">
          <Grid container spacing={1} className="add-store-input-container">
            <Grid item xs={12} className="add-store-alpha-inputs">
              <TextField id="" label="Outlined" variant="outlined" fullWidth onChange={(e) => { setName(e.target.value) }} />
            </Grid>
            <Grid item xs={12} sm={12} md={6} className="add-store-alpha-inputs">
              <FormControl fullWidth className="drawer-dropdown-content">
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Category"
                  value={category}
                  onChange={(e) => { setCategory(e.target.value) }}
                >
                  {categoryData.map((item, index) => (
                    <MenuItem
                      value={item}
                      style={{ textTransform: "capitalize" }}
                      key={index}
                    >
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} className="add-store-alpha-inputs">
              <FormControl fullWidth className="drawer-dropdown-content">
                <InputLabel id="demo-simple-select-label">Area</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Area"
                  value={area}
                  onChange={(e) => { setArea(e.target.value) }}
                >
                  {areas.map((item, index) => (
                    <MenuItem
                      value={item}
                      style={{ textTransform: "capitalize" }}
                      key={index}


                    >
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} className="add-store-alpha-inputs">
              <TextField
                id="date"
                label="Open Date"
                type="date"
                defaultValue={today}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => { setOpenDate(e.target.value) }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} className="add-store-alpha-inputs">
              <TextField
                id="date"
                label="Close Date"
                type="date"
                defaultValue={today}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => { setCloseDate(e.target.value) }}
              />
            </Grid>
          </Grid>
          <div className="add-store-button">
            <Button variant="contained" size="large" color="secondary" endIcon={<AddBusinessIcon />} className="add-store-button" onClick={bello}>
              Add Store
            </Button>
          </div>

        </div>

      </div>
    </>
  );
};

export default AddStore;
