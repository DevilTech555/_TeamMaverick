import React from 'react'
import "./index.css";
import SimpleAppBar from "./Components/AppBar";
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles,ThemeProvider,createMuiTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
  root:{
    display:'flex'
  },
  content: {
    flexGrow: 1,
    width:"100%",
    height:"100%",
    padding: theme.spacing(3),
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }
}));

export default function App() {

  const classes = useStyles();
 
   const theme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#2196F3",
      },
      secondary: {
        main: "#2196F3",
      },
    },
  });

  return (
    
    <React.Fragment>
    <ThemeProvider theme={theme}> 
     
      <CssBaseline />
     <div className={classes.root}>
         <SimpleAppBar/>
      
        <div className={classes.content}>
       
          </div>
          </div> 
      </ThemeProvider>
    </React.Fragment>
  );
}
