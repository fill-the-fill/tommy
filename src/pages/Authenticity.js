import React from 'react'
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { useStyles } from "../utils/uiStyles";

function Authenticity() {

    const classes = useStyles();

    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            className={classes.aboutPagePadding}
        >
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
                <Typography variant="h3">Certificate Of Authenticity</Typography>
                <div className={classes.aboutText}>After studying studio art and environmental science at the University of Vermont,  I moved to Lake Tahoe, California, in hopes of becoming a professional snowboarder (graduating right after the '08 recession made this seem like a great idea). A couple of years and too many injuries later, I found myself taking up an offer to photograph a few homes for a client I'd met while recuperating. What started by chance turned out to be the perfect mix of technical challenge and creative outlet, and I decided right there and then that it absolutely must be my career.
                </div>
                <div className={classes.aboutText2}>Image of the certificate:</div>
                <img src={image[0].img} alt="profile" className={classes.authenticityImage}></img>
            </Grid>
            <Grid item xs={3}></Grid>
        </Grid>
    )
}

const image = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
]

export default Authenticity
