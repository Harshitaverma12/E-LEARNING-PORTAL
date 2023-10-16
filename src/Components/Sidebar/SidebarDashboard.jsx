import React, { useState, useEffect } from "react";
import { Grid, List, Typography } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import { ListItemText } from "@mui/material";
import { Collapse } from "@mui/material";
import { Sidebar } from "../Sidebar/Sidebar";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import ViewListRoundedIcon from "@mui/icons-material/ViewListRounded";
import { Document, Page, pdfjs } from "react-pdf";
import CourseInfo from "../Modules/CourseInfo";
import Module1 from "../Modules/Module1";
import Module2 from "../Modules/Module2";
import Module3 from "../Modules/Module3";
import Module4 from "../Modules/Module4";
import Module5 from "../Modules/Module5";
import Module6 from "../Modules/Module6";
import Module7 from "../Modules/Module7";
import Module8 from "../Modules/Module8";
import Module9 from "../Modules/Module9";
import Module10 from "../Modules/Module10";
import Module11 from "../Modules/Module11";
import Module12 from "../Modules/Module12";
import Module13 from "../Modules/Module13";
import sidelogo from "../../assets/building-business-company-logo-vector-19953138.jpg";
import "../../App.css";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import pdf1 from "../../assets/SQL NOTES.pdf";
import pdf2 from "../../assets/Module 2.pdf";
import pdf3 from "../../assets/Module 3.pdf";
import pdf4 from "../../assets/Module 4.pdf";
import pdf5 from "../../assets/Module 5.pdf";
import pdf6 from "../../assets/Module 6.pdf";
import pdf7 from "../../assets/Module 7.pdf";
import pdf8 from "../../assets/Module 8.pdf";
import pdf9 from "../../assets/Module 9.pdf";
import pdf10 from "../../assets/Module 10.pdf";
import pdf11 from "../../assets/Module 11.pdf";
import pdf12 from "../../assets/Module 12.pdf";
import pdf13 from "../../assets/Module 13.pdf";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default function SidebarDashboard() {
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

  //function for downloading the content
  function handleDownload(file, number) {
    const pdfUrl = file;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("download", `Module${number}.pdf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
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
                          item.title === "Module 3" ||
                          item.title === "Module 4" ||
                          item.title === "Module 5" ||
                          item.title === "Module 6" ||
                          item.title === "Module 7" ||
                          item.title === "Module 8" ||
                          item.title === "Module 9" ||
                          item.title === "Module 10" ||
                          item.title === "Module 11" ||
                          item.title === "Module 12" ||
                          item.title === "Module 13") &&
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
                  {item.title !== "Introduction" &&
                    item.title === "Module 1" && (
                      <FileDownloadOutlinedIcon
                        onClick={() => handleDownload(pdf1, 1)}
                        style={{ color: "white" }}
                      />
                    )}
                  {item.title !== "Introduction" &&
                    item.title === "Module 2" && (
                      <FileDownloadOutlinedIcon
                        onClick={() => handleDownload(pdf2, 2)}
                        style={{ color: "white" }}
                      />
                    )}
                  {item.title !== "Introduction" &&
                    item.title === "Module 3" && (
                      <FileDownloadOutlinedIcon
                        onClick={() => handleDownload(pdf3, 3)}
                        style={{ color: "white" }}
                      />
                    )}
                  {item.title !== "Introduction" &&
                    item.title === "Module 4" && (
                      <FileDownloadOutlinedIcon
                        onClick={() => handleDownload(pdf4, 4)}
                        style={{ color: "white" }}
                      />
                    )}
                  {item.title !== "Introduction" &&
                    item.title === "Module 5" && (
                      <FileDownloadOutlinedIcon
                        onClick={() => handleDownload(pdf5, 5)}
                        style={{ color: "white" }}
                      />
                    )}
                  {item.title !== "Introduction" &&
                    item.title === "Module 6" && (
                      <FileDownloadOutlinedIcon
                        onClick={() => handleDownload(pdf6, 6)}
                        style={{ color: "white" }}
                      />
                    )}
                  {item.title !== "Introduction" &&
                    item.title === "Module 7" && (
                      <FileDownloadOutlinedIcon
                        onClick={() => handleDownload(pdf7, 7)}
                        style={{ color: "white" }}
                      />
                    )}
                  {item.title !== "Introduction" &&
                    item.title === "Module 8" && (
                      <FileDownloadOutlinedIcon
                        onClick={() => handleDownload(pdf8, 8)}
                        style={{ color: "white" }}
                      />
                    )}
                  {item.title !== "Introduction" &&
                    item.title === "Module 9" && (
                      <FileDownloadOutlinedIcon
                        onClick={() => handleDownload(pdf9, 9)}
                        style={{ color: "white" }}
                      />
                    )}

                  {item.title !== "Introduction" &&
                    item.title === "Module 10" && (
                      <FileDownloadOutlinedIcon
                        onClick={() => handleDownload(pdf10, 10)}
                        style={{ color: "white" }}
                      />
                    )}
                  {item.title !== "Introduction" &&
                    item.title === "Module 11" && (
                      <FileDownloadOutlinedIcon
                        onClick={() => handleDownload(pdf11, 11)}
                        style={{ color: "white" }}
                      />
                    )}
                  {item.title !== "Introduction" &&
                    item.title === "Module 12" && (
                      <FileDownloadOutlinedIcon
                        onClick={() => handleDownload(pdf12, 12)}
                        style={{ color: "white" }}
                      />
                    )}
                  {item.title !== "Introduction" &&
                    item.title === "Module 13" && (
                      <FileDownloadOutlinedIcon
                        onClick={() => handleDownload(pdf13, 13)}
                        style={{ color: "white" }}
                      />
                    )}
                </Grid>
              ))}
            </List>
          </Collapse>
        </List>
      </Grid>

      {/*creating box to hold content */}
      <Grid style={{ width: "78%" }}>
        {mykeys === 1 && <CourseInfo />}
        {mykeys === 2 && <Module1 />}
        {mykeys === 3 && <Module2 />}
        {mykeys === 4 && <Module3 />}
        {mykeys === 5 && <Module4 />}
        {mykeys === 6 && <Module5 />}
        {mykeys === 7 && <Module6 />}
        {mykeys === 8 && <Module7 />}
        {mykeys === 9 && <Module8 />}
        {mykeys === 10 && <Module9 />}
        {mykeys === 11 && <Module10 />}
        {mykeys === 12 && <Module11 />}
        {mykeys === 13 && <Module12 />}
        {mykeys === 14 && <Module13 />}
      </Grid>
    </Grid>
  );
}
