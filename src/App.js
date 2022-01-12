import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import './App.css';

import Header from "./components/Header"
import ComissionsPage from "./pages/Commissions"
import AboutPage from "./pages/About"
import ContactPage from "./pages/Contact"
import AuthenticityPage from "./pages/Authenticity"

const mainTheme = createTheme({
 
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
