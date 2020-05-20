import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TopBar from "./TopBar";
import SearchIcon from "@material-ui/icons/Search";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import MessageIcon from "@material-ui/icons/Message";
import HomeIcon from "@material-ui/icons/Home";
import CameraIcon from "@material-ui/icons/Camera";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

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
  },

  appBar: {
    top: "auto",
    width: "100%",
    bottom: 0,
    padding: 0,
    justify: "space-between"
  },
  tabs:{
    minWidth: "100%",
    minHeight: "100%",
    
  },
  grid:{
    padding: 0,
    height: "100%",
    maxWidth: "100%",
  },
  topBar: {
    padding:0,
    alignItems: "center",
    minWidth: "100%",
    alignContent: "flex-end",
    height: "10%"
  },
  botBar: {
    height: "100%",
    top: "auto",
    width: "100%",
    justify: "flex-end",
    bottom:0,
    textColor: "blue"
    // width: "100%",
  },
  background:{
    background: "blue" ,
    padding: theme.spacing(0),
    margin: 0,
    minWidth: "100%",
    minHeight: "100%",
  }

}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      
    >
      {value === index && (
        <Box p={0} >
            {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
return {
  id: `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`,
};
}

export default function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
      <Grid container className={classes.grid}>
        <Grid item xs={12} className={classes.grid}>
        
        <Grid
          container
          direction="column"
          // justify="center"
          alignItems="stretch"
          spacing={0.5}
          className={classes.grid}
        >
          <Grid item xs={1} sm={1} container justify="space-between"  className={classes.topBar}>
                <Grid item xs={12}  className={classes.grid} >
                  <Paper className={classes.background} elevation={5}>
                    <TopBar />
                  </Paper>
                </Grid>
                
          </Grid>

          <Grid item xs={10} sm={10} container className={classes.grid} >  
                    <Grid item xs={12} >
                      <Paper className={classes.paper}>
                      <TabPanel value={value} index={0} className={classes.grid}>
                        <Paper className={classes.paper}>
                          Home Page
                          {/* <Home/> */}
                        </Paper>
                      </TabPanel>
                      <TabPanel value={value} index={1}>
                        <Paper className={classes.paper}>
                          Search a Spot
                          {/* <Search/> */}
                        </Paper>
                      </TabPanel>
                      <TabPanel value={value} index={2}>
                        <Paper className={classes.paper}>
                          Post a Spot
                          {/* <Post/> */}
                        </Paper>
                      </TabPanel>
                      <TabPanel value={value} index={3}>
                        <Paper className={classes.paper}>
                          Profile/Notification
                          {/* <Profile/> */}

                        </Paper>
                      </TabPanel>
                      <TabPanel value={value} index={4}>
                        <Paper className={classes.paper}>
                            Messages
                            {/* <Messages/> */}
                        </Paper>
                      </TabPanel>
                      </Paper>
                    </Grid>
          </Grid>

          <Grid item xs={1} sm={1} container  className={classes.grid} >
                    
                    <Grid item xs={12}  >
                    <Paper className={classes.background} elevation={5}>
                              <Tabs
                                  value={value}
                                  onChange={handleChange}
                                  variant="fullWidth"
                                  indicatorColor="secondary"
                                  textColor="secondary"                              
                                  aria-label="icon tabs example"
                                  className={classes.botBar}
                                  justify="flex-end"
                                  alignItems="baseline"
                              >
                                  <Tab icon={<HomeIcon  />} aria-label="home" {...a11yProps(0)}/>
                                  <Tab icon={<SearchIcon />} aria-label="search" {...a11yProps(1)}/>
                                  <Tab icon={<CameraIcon />} aria-label="camera" {...a11yProps(2)}/>
                                  <Tab icon={<PersonPinIcon />} aria-label="person" {...a11yProps(3)}/>
                                  <Tab icon={<MessageIcon />} aria-label="message" {...a11yProps(4)}/>
                              </Tabs>
                          </Paper>
                      </Grid>
          </Grid>
        </Grid>
        </Grid>   
        </Grid>
        </Paper>
            
    </div>
  );
}
