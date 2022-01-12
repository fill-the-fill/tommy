import React from 'react'
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { useStyles } from "../utils/uiStyles";

function Contact() {

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
                <Typography variant="h3">Contact</Typography>
                <div className={classes.contactText}>For all pricing and booking inquiries , please fill out the form below. Please include as much relevant information as possible, for example, the location of the project, amount of images needed, intended usage of the images, and timeframe for project completion. I look forward to hearing from you.
                </div>

                <div className={classes.contaier}>
                    <form>
                        <label for="fname">First Name</label>
                        <input className={classes.input} type="text" id="fname" name="firstname" placeholder="Your name.." />

                        <label for="lname">Last Name</label>
                        <input className={classes.input} type="text" id="lname" name="lastname" placeholder="Your last name.." />

                        <label for="lname">Email</label>
                        <input className={classes.input} type="text" id="lname" name="email" placeholder="Your email.." />

                        <label for="lname">Subject</label>
                        <input className={classes.input} type="text" id="lname" name="subject" placeholder="Whats the subject.." />

                        <label for="lname">Message</label>
                        <input className={classes.input} type="text" id="lname" name="message" placeholder="What should we talk about.." />

                        <input className={classes.submit} type="submit" value="Submit" />
                    </form>
                </div>

            </Grid>
            <Grid item xs={1} sm={2} md={3}></Grid>
        </Grid>
    )
}

export default Contact
