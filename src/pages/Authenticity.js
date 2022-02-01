import React from "react";
import Grid from "@mui/material/Grid";
import { useStyles } from "../utils/uiStyles";
import Config from "../config/index.json";
import Certificate from "../utils/collection-1/certificate.jpg";

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
      <Grid item xs={1} sm={2} md={3}></Grid>
      <Grid item xs={10} sm={8} md={6}>
        <div className={classes.authTitle}>{Config.data.certificate.title}</div>
        <div className={classes.aboutText} style={{ margin: "1em 0 1em" }}>
          {Config.data.certificate.text}
        </div>
        <div className={classes.aboutText2}>
          {Config.data.certificate.text2}
        </div>
        <img
          src={Certificate}
          alt="profile"
          className={classes.authenticityImage}
        ></img>
      </Grid>
      <Grid item xs={1} sm={2} md={3}></Grid>
    </Grid>
  );
}

export default Authenticity;
