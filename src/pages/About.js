import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Config from "../config/index.json";
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
        <Typography variant="h3" className={classes.aboutTitle}>
          {Config.data.about.title}
        </Typography>
        <div className={classes.aboutText} style={{ margin: "1em 0 1em" }}>
          {Config.data.about.text}
        </div>
        <div className={classes.aboutText}>
          {Config.data.about.text2}
        </div>
        <div className={classes.aboutText}>
          {Config.data.about.text3}
        </div>
        <div className={classes.aboutText}>
          {Config.data.about.text4}
        </div>
        <div className={classes.aboutText}>
          {Config.data.about.text5}
        </div>
        <div className={classes.aboutText}>
          {Config.data.about.text6}
        </div>
      </Grid>
      <Grid item xs={1} sm={2} md={3}></Grid>
    </Grid>
  );
}

export default About;
