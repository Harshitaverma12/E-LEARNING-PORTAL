import { ContentCopy, ContentCut } from "@mui/icons-material";
import {
  CardContent,
  CardMedia,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Typography,
} from "@mui/material";
import React from "react";
import { Card, Dropdown, DropdownButton } from "react-bootstrap";
import { Link } from "react-router-dom";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import CodeIcon from "@mui/icons-material/Code";

function FirstPage() {
  return (
    <div>
      <Typography
        variant="h4"
        style={{ color: "white", textAlign: "center", paddingTop: "2%" }}
      >
        ADMIN
      </Typography>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card
          sx={{ maxWidth: 345 }}
          style={{
            marginTop: "4rem",
            marginLeft: "2rem",
            width: "21rem",
            height: "20rem",
            background: "#032137",
            borderRadius: "20px",
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              style={{ color: "white", textAlign: "center" }}
            >
              ADD CONTENT
            </Typography>
          </CardContent>
          <MenuList style={{ color: "white" }}>
            <MenuItem>
              <ListItemIcon>
                <PictureAsPdfIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>PDF FORMAT</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <VideoLibraryIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>VIDEO FORMAT</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <CodeIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>HTML FORMAT</ListItemText>
            </MenuItem>
          </MenuList>
        </Card>
        <Card
          sx={{ maxWidth: 345 }}
          style={{
            marginTop: "4rem",
            height: "20rem",
            marginLeft: "2rem",
            width: "21rem",
            background: "#032137",
            borderRadius: "20px",
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              style={{ color: "white", textAlign: "center" }}
            >
              ADD TEST
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default FirstPage;
