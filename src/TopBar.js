import React from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
const useStyles = makeStyles(theme => ({
    root:{
      minHeight: "100%",
      minWidth: "auto",
      display: "flex",
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
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        // <AppBar position="static" className={classes.root}>
        //     <Toolbar className={classes.root}>
       
                <Grid container className={classes.root} alignItems="center" justify="space-between">
                    <Grid item >
                        <Typography variant="h6" color="secondary" >
                            Street Skitch'N
                        </Typography>
                    </Grid>
                    
                    <Grid item >
                        <Button color="secondary" className="button" onClick={handleClickOpen} >Login</Button>
                        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                            <DialogTitle id="form-dialog-title">
                            <ButtonGroup disableElevation variant="contained" color="primary">
                                <Button>Login</Button>
                                <Button>Sign-Up</Button>
                            </ButtonGroup>
                            </DialogTitle>
                            <DialogContent>
                            <DialogContentText>
                                Please enter email address and password to log in.
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Email Address"
                                type="email"
                                fullWidth
                            />
                            <TextField
                                margin="dense"
                                id="password"
                                label="Password"
                                type="password"
                                fullWidth
                            />
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Submit
                            </Button>
                            <Button onClick={handleClose} color="primary">
                                Cancel
                            </Button>
                            
                            </DialogActions>
                        </Dialog>
                    </Grid> 
                </Grid>
              
        //     </Toolbar> 
        // </AppBar>
    )
}
