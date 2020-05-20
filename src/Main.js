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
import BotBar from "./BotBar";
import PropTypes from 'prop-types';


const useStyles = makeStyles(theme => ({
  root:{
    display: "flex"
  },

}));

// function TabPanel(props) {
//     const { children, value, index, ...other } = props;
  
//     return (
//       <div
//         role="tabpanel"
//         hidden={value !== index}
//         id={`simple-tabpanel-${index}`}
//         aria-labelledby={`simple-tab-${index}`}
//         {...other}
        
//       >
//         {value === index && (
//           <Box p={0} >
//             {children}
//           </Box>
//         )}
//       </div>
//     );
// }
  
// TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.any.isRequired,
//     value: PropTypes.any.isRequired,
// };


export default function Main(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(props)
    

    console.log(props)
    console.log("here")
    return (
        <div>
            {/* // <TabPanel value={value} index={0} className={classes.paper}>
            // Item One
            // </TabPanel>

            // <TabPanel value={value} index={1} className={classes.paper}>
            // Item 2
            // </TabPanel>
            // <TabPanel value={value} index={2} className={classes.paper}>
            // Item 3
            // </TabPanel>
            // <TabPanel value={value} index={3} className={classes.paper}>
            // Item 4
            // </TabPanel>
            // <TabPanel value={value} index={4} className={classes.paper}>
            // Item 5
            // </TabPanel> */}
        </div>
    )
}
