import React from 'react'
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { useStyles } from "../utils/uiStyles";

function About() {

    const classes = useStyles();

    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            className={classes.aboutPagePadding}
        >
            <Grid item xs={1} sm={2} md={3}></Grid>
            <Grid item xs={10} sm={8} md={6}>
                <Typography variant="h3" className={classes.aboutTitle}>About</Typography>
                <img src={image[0].img} alt="profile" className={classes.aboutImage}></img>
                <div className={classes.aboutText} style={{ margin: '1em 0 1em' }}>I'm a photographer based in Los Angeles, California who specializes in photographing architecture; I also have a mild airplane obsession.
                </div>
                <div className={classes.aboutText}>I grew up in Ipswich, Massachusetts: a small coastal town that's one part postcard and one part dramatic Boston movie.  Here I was lucky enough to meet a number of amazing teachers who opened my eyes to the world of art and design; this would alter the path of my life in more ways than I could ever imagine.
                </div>
                <div className={classes.aboutText}>After studying studio art and environmental science at the University of Vermont,  I moved to Lake Tahoe, California, in hopes of becoming a professional snowboarder (graduating right after the '08 recession made this seem like a great idea). A couple of years and too many injuries later, I found myself taking up an offer to photograph a few homes for a client I'd met while recuperating. What started by chance turned out to be the perfect mix of technical challenge and creative outlet, and I decided right there and then that it absolutely must be my career.
                </div>
                <div className={classes.aboutText}>In 2018, I founded the Architectural Photography Almanac, a resource for architecture photographers and those in the architecture industry seeking to learn about the craft and theory of architectural photography.
                </div>
                <div className={classes.aboutText2}>Advertising clients include:</div>
                <div className={classes.aboutText3}>Tesla Motors</div>
                <div className={classes.aboutText3}>FedEx</div>
                <div className={classes.aboutText3}>Discovery Networks</div>
                <div className={classes.aboutText3}>HGTV</div>
                <div className={classes.aboutText3}>Nest Cameras</div>
                <div className={classes.aboutText3}>Bernhardt Design</div>

            </Grid>
            <Grid item xs={1} sm={2} md={3}></Grid>
        </Grid>
    )
}

const image = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
]

export default About
