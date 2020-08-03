import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography } from "@material-ui/core";
import HeatMap from "./Charts/HeatMap";
import '../index.css'

const useStyles = makeStyles((theme) => ({
  paper_lg: {
    margin: theme.spacing(1),
    width: "70%",
    height: "70%",
    padding: "10px"
  },
  sticky: {
    position: "fixed",
    height: "11.4%",
    width: "100%",
    backgroundColor: "#424242",
    top: "6.5%",
    right: "0",
    zIndex: 2,
  },
}));

export default function Page() {
  const classes = useStyles();

  return (
    <React.Fragment>
      
      <div className="i-data">
      <div className="i-1"><HeatMap/></div>
      <div className="i-1"><HeatMap/></div>
      </div>
    </React.Fragment>
  );
}
