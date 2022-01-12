import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
// import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
import './App.css';

import Header from "./components/Header"
import ComissionsPage from "./pages/Commissions"
import AboutPage from "./pages/About"
import ContactPage from "./pages/Contact"
import AuthenticityPage from "./pages/Authenticity"

// const breakpoints = createBreakpoints({})

const mainTheme = createTheme({
  shadows: ["none"],
  typography: {
    fontFamily: [`futura`],
    h1: {
      color: "#FFFFFF",
      fontSize: 40,
      // [breakpoints.down('sm')]: {
      //   fontSize: 35,
      // },
    },
    h2: {
      fontSize: 10,
      color: "#FFFFFF",
    },
    h3: {
      color: "#FFFFFF",
      textAlign: "center",
      fontSize: 32,
      marginBottom: 20,
    },
    h4: {
      fontSize: 20,
      color: "#707070",
      textAlign: 'initial'
    },
    h5: {
      fontSize: 22,
      color: "#C3B96C",
      textAlign: 'initial'
    },
    h6: {
      color: "#C3B96C",
      fontSize: 34,
      marginTop: 20,
    },
    subtitle1: {
      color: "#ffff",
      fontSize: 22,
      marginTop: 16,
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <Header/>
      <Router>
        <Routes>
          <Route exact path="/" element={<ComissionsPage/>} />
          <Route exact path="/Comissions" element={<ComissionsPage/>} />
          <Route exact path="/about" element={<AboutPage/>} />
          <Route exact path="/contact" element={<ContactPage/>} />
          <Route exact path="/Certificate%20Of%20Authenticity" element={<AuthenticityPage/>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
