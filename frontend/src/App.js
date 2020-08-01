import React from "react";
import CustomAppBar from "./Components/Appbar/CustomAppBar";
//css styles for app
import "./css/App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";

//Main app for page
function App() {
    //selecting the theme to dark
  const theme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });

  return (
    <React.Fragment>
        <ThemeProvider theme={theme}>
        <CssBaseline/>
          <CustomAppBar />
        </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
