import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Config from "../config/index.json";
import {
  Grid,
  Button,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";
import { useStyles } from "../utils/uiStyles";

function Contact() {
  const classes = useStyles();
  const form = useRef();
  const [open, setOpen] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "website",
        "template_noeqsv1",
        form.current,
        "user_vtY72WQywcWRl97l9hIwN"
      )
      .then(
        (result) => {
          console.log(result.text);
          handleClickOpen();
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
        <div className={classes.contactText}>{Config.data.contact.text}</div>

        <div className={classes.contaier}>
          <form ref={form} onSubmit={sendEmail}>
            <label for="fname">First Name</label>
            <input
              className={classes.input}
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
            />

            <label for="lname">Last Name</label>
            <input
              className={classes.input}
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
            />

            <label for="lname">Email</label>
            <input
              className={classes.input}
              type="text"
              id="lname"
              name="email"
              placeholder="Your email.."
            />

            <label for="lname">Subject</label>
            <input
              className={classes.input}
              type="text"
              id="lname"
              name="subject"
              placeholder="Whats the subject.."
            />

            <label for="lname">Message</label>
            <input
              className={classes.input}
              type="text"
              id="lname"
              name="message"
              placeholder="What should we talk about.."
            />

            <input className={classes.submit} type="submit" value="Submit" />
            <Dialog open={open} onClose={handleClose}>
              <DialogContent>
                <DialogContentText>
                {Config.data.contact.thankyou}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Close</Button>
              </DialogActions>
            </Dialog>
          </form>
        </div>
      </Grid>
      <Grid item xs={1} sm={2} md={3}></Grid>
    </Grid>
  );
}

export default Contact;
