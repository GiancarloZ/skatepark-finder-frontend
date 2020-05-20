import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from '@material-ui/core/Box';
import SearchIcon from "@material-ui/icons/Search";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import MessageIcon from "@material-ui/icons/Message";
import HomeIcon from "@material-ui/icons/Home";
import CameraIcon from "@material-ui/icons/Camera";
import PersonPinIcon from "@material-ui/icons/PersonPin";

import PropTypes from 'prop-types';
import Main from "./Main";
const useStyles = makeStyles(theme => ({
  root:{
    maxHeight: "100%",
    maxWidth: "100%",
    display: "flex"
  },

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

export default function BotBar() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

   
    return (
        <div className={classes.root}>
             <TabPanel value={value} index={0}>
                Page One
            </TabPanel>
            <TabPanel value={value} index={1}>
                Page Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Page Three
            </TabPanel>
        <br></br>
        <AppBar position="static" color="primary" className={classes.grid}>
            <Toolbar  className={classes.grid}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="standard"
                    indicatorColor="secondary"
                    textColor="inherit"                              
                    aria-label="icon tabs example"
                    className={classes.grid}
                >
                    <Tab icon={<HomeIcon  />} aria-label="home" {...a11yProps(0)}/>
                    <Tab icon={<SearchIcon />} aria-label="search" {...a11yProps(1)}/>
                    <Tab icon={<CameraIcon />} aria-label="camera" {...a11yProps(2)}/>
                    <Tab icon={<PersonPinIcon />} aria-label="person" {...a11yProps(3)}/>
                    <Tab icon={<MessageIcon />} aria-label="message" {...a11yProps(4)}/>
                </Tabs>
            </Toolbar>    
        </AppBar>
       
        </div>
        
    )
}
