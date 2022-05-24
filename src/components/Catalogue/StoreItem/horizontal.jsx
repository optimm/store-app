import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import Tooltip from '@mui/material/Tooltip'

import "./storeitem.css"
import { pink } from "@mui/material/colors";

const HorizontalItem = (props) => {

    function handleDelete() {
        alert("delete");
    }



    return (
        <Paper elevation={1} className="component-elevation">
            <div className="catalogue-vertical-component-left">
                <Grid container>
                    <Grid item xs={7} md={7}>

                        <div className="catalogue-vertical-component">
                            <h3 className="store-name">Shop name</h3>
                            <p className="store-status">Open</p>
                            <div className="store-type-location-container">
                                <p className="store-data">Chemist Store</p>
                                <p className="store-data">Location - Thane</p>
                            </div>
                            <div className="store-icon-container">
                                <Tooltip title="Delete">
                                    <IconButton sx={{ p: '8px' }} aria-label="search" onClick={handleDelete}>
                                        <DeleteIcon sx={{ fontSize: 20 }} className="delete-store-icon" />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Delete">
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