import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import Tooltip from '@mui/material/Tooltip'

import "./storeitem.css"


const HorizontalItem = (props) => {
    const { item } = props;
    //todays date
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = yyyy + "-" + mm + "-" + dd;

    function handleDelete() {
        alert("delete");
    }
    var open = "Open";
    if (item.Closedate < today || item.openDate > today) {
        open = "Closed";
    }


    return (
        <Paper elevation={3} className="component-elevation">
            <div className="catalogue-vertical-component-left">
                <Grid container>
                    <Grid item xs={7} md={7}>

                        <div className="catalogue-vertical-component">
                            <h3 className="store-name">{item.name}</h3>
                            <p className={`store-status ${open}`}>{open}</p>
                            <div className="store-type-location-container">
                                <p className="store-data">{item.category} Shop</p>
                                <p className="store-data">Location - {item.area}</p>
                            </div>
                            <div className="store-icon-container">
                                <Tooltip title="Delete">
                                    <IconButton sx={{ p: '8px' }} aria-label="search" onClick={handleDelete}>
                                        <DeleteIcon sx={{ fontSize: 20 }} className="delete-store-icon" />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Update">
                                    <IconButton sx={{ p: '8px' }} aria-label="search" onClick={handleDelete}>
                                        <UpdateIcon sx={{ fontSize: 20 }} className="update-store-icon" />
                                    </IconButton>
                                </Tooltip>

                            </div>

                        </div>

                    </Grid>
                    <Grid item xs={5} md={5}>
                        <div className="catalogue-vertical-component-right">
                            <img src="./images/groceries.png" className="store-image" />
                        </div>
                    </Grid>

                </Grid>
            </div>
        </Paper>
    );
}


export default HorizontalItem;