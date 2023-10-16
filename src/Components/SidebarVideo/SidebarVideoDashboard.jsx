import React, { useState, useEffect } from "react";
import { Grid, List, Typography } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import { ListItemText } from "@mui/material";
import { Collapse } from "@mui/material";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import ViewListRoundedIcon from "@mui/icons-material/ViewListRounded";

import sidelogo from "../../assets/Iconic Mark Original 1920px 1.png";
import "../../App.css";

import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Sidebar } from "../SidebarVideo/SidebarVideo";
import Module1V from "../ModulesVideo/Module1V";
import Module2V from "../ModulesVideo/Module2V";
import Module3V from "../ModulesVideo/Module3V";
import CourseInfoVideo from "../ModulesVideo/CourseInfoVideo";

export default function SidebarVideoDashboard() {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Introduction");
  const [mykeys, setmykeys] = useState(1);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleMenuItemClick = (item, val) => {
    setSelectedItem(item);
    setmykeys(val);
  };

  return (
    <Grid
      container
      xs={12}
      sm={12}
      md={12}
      lg={12}
      xl={12}
      style={{ display: "flex" }}
    >
      {/*creating static side bar */}
      <Grid item className="sidebarStatic">
        <img src={sidelogo} className="sidebarLogo" />
        <Typography variant="h5" className="sidebarText">
          Credit Risk Management
        </Typography>

        {/*itterating through the list of modules*/}
        <List>
          <ListItem
            button
            // selected={selectedItem === "Introduction"}
            style={{
              color: `${selectedItem === "Introduction" ? "#0093fb" : "white"}`,
            }}
            onClick={() => handleMenuItemClick("Introduction", 1)}
          >
            <ListItemIcon
              sx={{
                color: `${
                  selectedItem === "Introduction"
                    ? "#0093fb !important"
                    : "#ffffff !important"
                }`,
              }}
            >
              <ViewListRoundedIcon />
            </ListItemIcon>
            <ListItemText primary={"Introduction"} />
          </ListItem>
          <ListItem button onClick={handleClick}>
            <ListItemIcon style={{ color: "#ffffff !important" }}>
              <MenuBookRoundedIcon />
            </ListItemIcon>
            <ListItemText
              primary="Course Material"
              style={{
                color: `#ffffff`,
              }}
            />
            {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {Sidebar?.map((item) => (
                <Grid
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <ListItem
                    button
                    style={{
                      //dynamically changing color of selected item
                      color: `${
                        selectedItem === item.title ? "#0093fb" : "white"
                      }`,
                      width: `${
                        (item.title === "Module 1" ||
                          item.title === "Module 2" ||
                          item.title === "Module 3") &&
                        //item.title === "Module 4" ||
                        //item.title === "Module 5" ||
                        //item.title === "Module 6" ||
                        //item.title === "Module 7" ||
                        //item.title === "Module 8" ||
                        //item.title === "Module 9" ||
                        //item.title === "Module 10" ||
                        //item.title === "Module 11" ||
                        //item.title === "Module 12" ||
                        //item.title === "Module 13") &&
                        "11rem"
                      }`,
                    }}
                    onClick={() => handleMenuItemClick(item.title, item.mykey)}
                  >
                    <ListItemIcon style={{ color: "white" }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.title} />
                  </ListItem>
                </Grid>
              ))}
            </List>
          </Collapse>
        </List>
      </Grid>

      {/*creating box to hold content */}
      <Grid style={{ width: "78%" }}>
        {mykeys === 1 && <CourseInfoVideo />}
        {mykeys === 2 && <Module1V />}
        {mykeys === 3 && <Module2V />}
        {mykeys === 4 && <Module3V />}
        {/*{mykeys === 5 && <Module4 />}
        {mykeys === 6 && <Module5 />}
        {mykeys === 7 && <Module6 />}
        {mykeys === 8 && <Module7 />}
        {mykeys === 9 && <Module8 />}
        {mykeys === 10 && <Module9 />}
        {mykeys === 11 && <Module10 />}
        {mykeys === 12 && <Module11 />}
        {mykeys === 13 && <Module12 />}
        {mykeys === 14 && <Module13 />} */}
      </Grid>
    </Grid>
  );
}
