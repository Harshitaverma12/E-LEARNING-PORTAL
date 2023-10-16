import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import AdbIcon from "@mui/icons-material/Adb";
import { TextField } from "@mui/material";
import logo from "../../assets/Full Logo White 1920px 3.png";
import avatar from "../../assets/Group 310.png";
import "../../App.css";

function Header() {
  const [searchValue, setsearchValue] = useState("");
  return (
    <AppBar
      position="static"
      sx={{
        background: "#0093fb",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          {/* <img src={logo} alt="logo" /> */}

          <div style={{ display: "flex", marginLeft: "30rem" }}>
            <TextField
              type={"search"}
              id="mysearch"
              value={searchValue}
              onChange={(e) => setsearchValue(e.target.value)}
              label="Search in course"
              placeholder="Search in course"
              size="small"
              style={{ width: "20rem" }}
            ></TextField>
            <Button
              variant="contained"
              style={{
                background: "#ffffff",
                marginLeft: "-1rem",
                height: "2.46rem",
                color: "#0093fb",
                textTransform: "capitalize",
              }}
            >
              Search
            </Button>
          </div>

          <Box sx={{ flexGrow: 0 }}>
            {/* <Tooltip title="Open settings"> */}
            <IconButton sx={{ p: 0 }}>
              <Avatar alt="p" src={avatar} />
            </IconButton>
            {/* </Tooltip> */}
            <a
              style={{
                textDecoration: "none",
                marginLeft: "1rem",
                marginRight: "1rem",
                fontWeight: "600",
                fontSize: "16px",
                color: "#ffffff",
              }}
              href="http://localhost:3000/login"
            >
              Logout
            </a>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
