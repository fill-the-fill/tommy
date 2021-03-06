import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  navbar: {
    height: '8vh',
    background: 'transparent !important',
    boxShadow: 'none !important',
    [theme.breakpoints.down("sm")]: {
      color: '#000 !important'
    },
  },
  logo: {
    color: '#000',
    [theme.breakpoints.down("sm")]: {
      marginLeft: 5,
    },
  },
  mobileLinks: {
    textDecoration: 'none',
    color: '#000'
  },
  headerLinks: {
    fontFamily: "Lato, sans-serif !important",
    color: '#000 !important',
    textDecoration: 'none !important'
  },
  navigation: {
    justifyContent: 'center'
  },
  pagePadding: {
    padding: '0px 40px',
    [theme.breakpoints.down("sm")]: {
      padding: '0px 20px',
    },
  },
  socials: {
    color: '#696969',
    padding: 1
  },
  socials1: {
    paddingTop: 1,
    marginTop: 2,
    width: '20px'
  },
  socials2: {
    width: '22px'
  },
  slider: {
    objectFit: "contain",
    width: "100%",
    height: "80vh",
    marginBottom: 15,
    [theme.breakpoints.down("sm")]: {
      height: "60vh",
    },
  },
  aboutPagePadding: {
    padding: '20px 0px'
  },
  imageList: {
    overflowY: 'unset !important',
    marginTop: 20,
  },
  comissionTitle: {
    textAlign: 'center',
    padding: '20px',
    [theme.breakpoints.down("sm")]: {
      marginTop: 20,
      fontSize: 20,
    },
  },
  openseaText: {
    textAlign: 'center',
    paddingTop: '10px',
    color: '#217EE5',
    textDecoration:'none',
    display: 'block',
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
    },
  },
  imgRadius: {
    borderRadius: 5
  },
  aboutTitle: {
    [theme.breakpoints.down("md")]: {
      paddingBottom: 10
    },
  },
  aboutImage: {
    float: 'right',
    width: 300,
    borderRadius: 5,
    margin: '1em 0 1em 1em' ,
    [theme.breakpoints.down("md")]: {
      float: 'unset',
      width: '100%',
      margin: 0 ,
    },
  },
  homeText: {
    marginTop: 20,
    fontWeight: 300,
    fontStyle: 'normal',
    lineHeight: '1.5em',
    textTransform: 'none',
    fontSize: '1.1rem',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  aboutText: {
    fontWeight: 300,
    fontStyle: 'normal',
    lineHeight: '1.5em',
    textTransform: 'none',
    letterSpacing: '0em',
    fontSize: 'inherit',
    margin: '0 0 1em',
  },
  aboutText2: {
    fontWeight: 600,
    fontStyle: 'normal',
    lineHeight: '1.5em',
    textTransform: 'none',
    letterSpacing: '0em',
    fontSize: 'inherit',
    margin: '0 0 1em',
  },
  aboutText3: {
    fontWeight: 300,
    fontStyle: 'normal',
    textTransform: 'none',
    letterSpacing: '0em',
    fontSize: 'inherit',
  },
  contactText: {
    fontWeight: 300,
    fontStyle: 'normal',
    lineHeight: '1.5em',
    textTransform: 'none',
    letterSpacing: '0em',
    fontSize: 'inherit',
    margin: '1em 0 1em',
  },
  input: {
    width: '100%',
    padding: 12,
    border: '1px solid #ccc',
    borderRadius: 4,
    boxSizing: 'border-box',
    marginTop: 6,
    marginBottom: 16,
    resize: 'vertical',
  },
  submit: {
    backgroundColor: '#000',
    color: 'white',
    padding: '12px 20px',
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer',
  },
  container: {
    borderRadius: 5,
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  authenticityImage: {
    width: '100%',
    borderRadius: 5,
  },
  authTitle: {
    fontSize: '3rem',
    [theme.breakpoints.down("sm")]: {
      fontSize: '1.7rem',
    },
  },
  commissionImg: {
    overflow: 'hidden',
    transition: 'transform .5s ease',
    height: '300',
  }
}))