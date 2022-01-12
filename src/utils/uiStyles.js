import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  navbar: {
      background: 'transparent !important',
      boxShadow: 'none !important',
  },
  logo: {
    color: '#000'
  },
  navigation: {
      justifyContent: 'center'
  },
  pagePadding: {
    padding: '0px 10px'
  },
  aboutPagePadding: {
      paddingTop: 40
  },
  aboutImage: {
    float: 'right',
    width: 300,
    marginLeft: 10
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
    backgroundColor: '#04AA6D',
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
    width: '100%'
  }
}))