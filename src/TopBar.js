import React from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles(theme => ({
    root:{
      maxHeight: "100%",
      maxWidth: "100%",
      display: "flex"
    },
    paper: {
        padding: theme.spacing(0),
        margin: 0,
        minWidth: "100%",
        minHeight: "100%",
    }
}))


export default function TopBar() {
    const classes = useStyles();
    return (
        // <AppBar position="static" className={classes.root}>
        //     <Toolbar className={classes.root}>
       
                <Grid container className={classes.root} alignItems="center" justify="space-between">
                    <Grid item >
                        <Typography variant="h6" color="secondary" className={classes.root}>
                            Street Skitch'N
                        </Typography>
                    </Grid>
                           
                    <Grid item>
                        <Button color="secondary" className="button" >Login</Button>
                    </Grid> 
                </Grid>
              
        //     </Toolbar> 
        // </AppBar>
    )
}
