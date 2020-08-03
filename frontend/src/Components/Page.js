import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid,
	Paper,
	Typography
} from '@material-ui/core';
import HeatMap from "./Charts/HeatMap";

const useStyles = makeStyles((theme) => ({
	
	  root:{
        paddingTop:'11%',
        paddingBottom:'1%',
        paddingRight:'0.5%',
        display:'flex',
        flexWrap: 'wrap',
        height:'51vw'
    },
    paper_lg:{
        margin: theme.spacing(1),
        width: '98%',
        height:'70%',

    },
     sticky:{
        position:'fixed',
        height:'11.4%',
        width:'100%',
        backgroundColor:'#424242',
        top:'6.5%',
        right:'0',
        zIndex:2
    },
	}));

export default function Page() {

  const classes = useStyles();

  return (
   <React.Fragment> 
   <div className={classes.sticky}> 
    <Typography variant="h3" style={{textAlign:'center',paddingTop:'2%'}}>Airport</Typography>
     </div>  
  <div className={classes.root}>
                
                <Grid item xs={6}>
                <Paper elevation={3} className={classes.paper_lg}>
                <HeatMap/>
                </Paper>
                </Grid>
                <Grid item xs={6}>
                 <Paper elevation={3} className={classes.paper_lg}>
                          
                 </Paper>
                 </Grid>
               
               
                </div>
    </React.Fragment>    
     );
}
