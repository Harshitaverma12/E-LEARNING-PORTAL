import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import crm1 from "../../assets/CRM1.png";
import crm2 from "../../assets/CRM2.png";
import crm3 from "../../assets/Frame 7.png";
import bg from "../../assets/Background (1).png";

function Landing() {
  // const [anchorEl, setAnchorEl] = useState(null);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <Grid style={{ backgroundImage: `url(${bg})` }}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "1rem",
          marginRight: "4rem",
          color: "white",
          fontSize: "1rem",
        }}
      >
        <Link
          to="/#"
          style={{ color: "white", marginRight: "3rem", fontSize: "1.2rem" }}
        >
          {/* <Typography>All</Typography> */}
        </Link>
        <Link to="/#" style={{ color: "white", fontSize: "1.2rem" }}>
          {/* <Typography>New</Typography> */}
        </Link>
      </div>

      <Typography
        variant="h4"
        style={{ color: "white", marginTop: "2rem", marginLeft: "36rem" }}
      >
        COURSES
      </Typography>
      <Grid
        item
        style={{ display: "flex", marginTop: "2rem", marginLeft: "7rem" }}
      >
        {/* <Link to="/dashboard"> */}
        <Card
          sx={{ maxWidth: 345 }}
          style={{
            marginTop: "1rem",
            marginLeft: "2rem",
            width: "21rem",
            background: "#032137",
            borderRadius: "20px",
          }}
        >
          <CardMedia
            sx={{ height: 140 }}
            image={crm1}
            title="credit risk management"
            // onClick={handleClick}  added onClick handler to the CardMedia component
          />
          <CardContent>
            <Link to="/dashboard" style={{ color: "white" }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ color: "white" }}
              >
                Credit Risk Management Training Program
              </Typography>
            </Link>

            <Typography variant="body2" style={{ color: "white" }}>
              Master credit risk management with our online course, equipping
              you with the expertise to assess and mitigate credit risks.
              Enhance your decision-making abilities and safeguard your
              organization's financial well-being.
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>
        <Card
          sx={{ maxWidth: 345 }}
          style={{
            marginTop: "1rem",
            marginLeft: "2rem",
            width: "21rem",
            background: "#032137",
            borderRadius: "20px",
          }}
        >
          <CardMedia
            sx={{ height: 140 }}
            image={crm2}
            title="credit risk management"
            // onClick={handleClick}  added onClick handler to the CardMedia component
          />
          <CardContent>
            <Link to="/dashboardvideo" style={{ color: "white" }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ color: "white" }}
              >
                Credit Risk Management Training Program
              </Typography>
            </Link>

            <Typography variant="body2" style={{ color: "white" }}>
              Master credit risk management with our online course, equipping
              you with the expertise to assess and mitigate credit risks.
              Enhance your decision-making abilities and safeguard your
              organization's financial well-being.
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>

        <Card
          sx={{ maxWidth: 345 }}
          style={{
            marginTop: "1rem",
            marginLeft: "2rem",
            width: "21rem",
            background: "#032137",
            borderRadius: "20px",
          }}
        >
          <CardMedia
            sx={{ height: 140 }}
            image={crm3}
            title="credit risk management"
            // onClick={handleClick}  added onClick handler to the CardMedia component
          />
          <CardContent>
            <Link to="/dashboardhtml" style={{ color: "white" }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ color: "white" }}
              >
                Credit Risk Management Training Program
              </Typography>
            </Link>

            <Typography variant="body2" style={{ color: "white" }}>
              Master credit risk management with our online course, equipping
              you with the expertise to assess and mitigate credit risks.
              Enhance your decision-making abilities and safeguard your
              organization's financial well-being.
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>
        {/* </Link> */}

        {/* <Menu // added Menu component for the dropdown
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Ppt</MenuItem>
          <MenuItem onClick={handleClose}>Video</MenuItem>
          <MenuItem onClick={handleClose}>HTML</MenuItem>
        </Menu> */}
      </Grid>
    </Grid>
  );
}

export default Landing;
