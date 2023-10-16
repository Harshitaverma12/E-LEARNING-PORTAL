import React from "react";
import { Checkbox, Grid, Link, TextField, Typography } from "@mui/material";
import "../../App.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import loginimg from "../../assets/g8.png";
import logo from "../../assets/Full Logo Original 1920px 3.png";

const Login = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/home");
  }

  return (
    <Grid
      container
      xs={12}
      sm={12}
      md={12}
      lg={8}
      xl={8}
      spacing={0}
      className="loginCard"
    >
      {/*image block*/}
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6} className="loginImageDiv">
        {/*logo*/}
        <img className="loginLogo" src={logo} alt="logo" />
        {/*iamge*/}
        <img className="loginImage" src={loginimg} alt="image" />
        {/*text*/}
        <Typography variant="h6" className="loginText">
          Credit Risk Management Program
        </Typography>
        {/*details block*/}
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6} className="loginInputDiv">
        {/*text*/}
        <Typography variant="h4" className="loginWelText">
          Welcome!
        </Typography>
        <Grid className="loginInputText">
          <Typography variant="h6" className="loginAcc">
            Don't have an account yet?
          </Typography>
          <Link className="loginSignUp" href="http://localhost:3000/signUp">
            Sign Up
          </Link>
        </Grid>
        {/*inputs*/}
        <Grid className="loginInputBox">
          <TextField id="username" label="User Name" className="loginInput1" />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            className="loginInput2"
            autoComplete="current-password"
          />
        </Grid>

        <Grid className="loginCheckStatus">
          <Grid className="loginCheckBox">
            <Checkbox size="small" className="loginCheckboxStyle" />
            <p className="loginLogText">Keep me logged in</p>
          </Grid>
          <Link className="loginForgetText" href="#">
            Forgot Password
          </Link>
        </Grid>
        {/*button for login*/}
        <Button
          variant="outlined"
          className="loginButton"
          onClick={handleClick}
        >
          Login
        </Button>
      </Grid>
    </Grid>
  );
};

export default Login;
