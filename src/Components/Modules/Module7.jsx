import {
  Button,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Module7Ppt from "./Module7Ppt";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SpeakerNotesRoundedIcon from "@mui/icons-material/SpeakerNotesRounded";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ZoomInRoundedIcon from "@mui/icons-material/ZoomInRounded";
import FullscreenRoundedIcon from "@mui/icons-material/FullscreenRounded";
import "../../App.css";
import ZoomOutRoundedIcon from "@mui/icons-material/ZoomOutRounded";

function Module7() {
  const [showComponent2, setShowComponent2] = useState(false);

  const [showNext, setshowNext] = useState(0);
  const [showPrevious, setshowPrevious] = useState(0);
  const [zoomIn, setzoomIn] = useState(0);
  const [zoomOut, setzoomOut] = useState(0);
  const [fullScreen, setfullScreen] = useState(0);

  //function to switch to ppt
  const handleClick = () => {
    setShowComponent2(true);
  };

  return (
    <>
      <Grid container xs={12} sm={12} md={12} lg={12} xl={12}>
        <Grid>
          <Card className="courseInfoCardbox">
            <div className="cardHeight">
              {/*
                conditional rendering between module intro webpage and module ppt webpage
                */}
              {!showComponent2 && (
                <CardContent>
                  <Typography
                    variant="h5"
                    component="h5"
                    className="moduleIntro"
                  >
                    Introduction
                  </Typography>
                  <Typography
                    variant="h6"
                    component="h6"
                    className="moduleDesc"
                  >
                    At the end of this session, you will be able to:
                  </Typography>

                  <List
                    sx={{
                      listStyleType: "disc",
                      pl: 4,
                      "& .MuiListItem-root": {
                        display: "list-item",
                      },
                    }}
                    className="moduleList"
                  >
                    {/*
                      using list to display content
                      */}
                    <ListItem style={{}}>
                      The Risk Decision Framework (RDF) and the key return
                      metrics to consider while evaluating business
                      decisions​​​​
                    </ListItem>
                    <ListItem>
                      How the RDF influences and aligns the country credit
                      strategy to the Group’s Risk Appetite and return
                      expectations.​​ ​​
                    </ListItem>
                    <ListItem>
                      The opportunities and challenges that the framework
                      creates.
                    </ListItem>
                  </List>
                </CardContent>
              )}
              {showComponent2 && (
                /* conditional rendering to module ppt webpage and passing functions to it*/
                <Module7Ppt
                  showNext={showNext}
                  showPrevious={showPrevious}
                  zoomIn={zoomIn}
                  zoomOut={zoomOut}
                  fullScreen={fullScreen}
                />
              )}
            </div>
            {!showComponent2 && (
              //conditional rendering to module into webpage and putting functionality on buttons
              <Button
                //button to navigate to ppt webpage
                onClick={() => handleClick()}
                variant="contained"
                className="moduleButton"
              >
                <PlayArrowIcon />
                Start Learning
              </Button>
            )}
            <Button variant="contained" className="moduleButton">
              <SpeakerNotesRoundedIcon />
              Skip To Test
            </Button>
          </Card>

          {showComponent2 && (
            /*conditional rendering to module ppt webpage and putting icons at the bottom for next, previous, 
                zoom in, zoom out, full screen and providing the functionalities to it*/
            <>
              <Grid style={{ display: "flex" }}>
                <Grid style={{ display: "flex", marginLeft: "23rem" }}>
                  <ArrowBackIosRoundedIcon
                    //function calling for previous slide functionality
                    style={{ marginRight: "4rem" }}
                    onClick={() => setshowPrevious(showPrevious + 1)}
                    className="modulePptIcon"
                  />
                  <ZoomInRoundedIcon
                    //function calling for zoom in functionality
                    style={{ fontSize: "1.8rem", marginRight: "1rem" }}
                    onClick={() => setzoomIn(zoomIn + 1)}
                    className="modulePptIcon"
                  />

                  <ZoomOutRoundedIcon
                    //function calling for zoom out functionality
                    style={{ fontSize: "1.8rem" }}
                    onClick={() => setzoomOut(zoomOut + 1)}
                    className="modulePptIcon"
                  />
                  <ArrowForwardIosRoundedIcon
                    //function calling for next slide functionality
                    style={{ marginLeft: "4rem" }}
                    onClick={() => setshowNext(showNext + 1)}
                    className="modulePptIcon"
                  />
                  {/* <FullscreenRoundedIcon
                    //function calling for full screen functionality
                    onClick={() => setfullScreen(fullScreen + 1)}
                    className="modulePptIcon"
                  /> */}
                </Grid>
                <Grid>
                  <FullscreenRoundedIcon
                    //function calling for full screen functionality
                    style={{ marginLeft: "22rem" }}
                    onClick={() => setfullScreen(fullScreen + 1)}
                    className="modulePptIcon"
                  />
                </Grid>
              </Grid>
            </>
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default Module7;
