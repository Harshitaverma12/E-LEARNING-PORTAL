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
import Module1Html from "./Module1Html";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SpeakerNotesRoundedIcon from "@mui/icons-material/SpeakerNotesRounded";
import "../../App.css";

function Module1V() {
  const [showComponent2, setShowComponent2] = useState(false);
  const [showComponent3, setShowComponent3] = useState(false);

  //function to switch to ppt
  const handleClick = () => {
    setShowComponent2(true);
  };

  const handleClickTest = () => {
    setShowComponent3(true);
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
                      Describe the Retail Banking (RB) product cycle from a
                      customer’s perspective​
                    </ListItem>
                    <ListItem>
                      Define the RB Credit Cycle of a facility​​
                    </ListItem>
                    <ListItem>
                      Understand the design elements of Retail Banking
                      Products​​
                    </ListItem>
                    <ListItem>
                      Identify product design elements as they relate to risk
                      mitigation​
                    </ListItem>
                  </List>
                </CardContent>
              )}
              {showComponent2 && (
                /* conditional rendering to module ppt webpage and passing functions to it*/
                <Module1Html />
              )}
            </div>
            {!showComponent2 && (
              <>
                <Button
                  //button to navigate to ppt webpage
                  onClick={() => handleClick()}
                  variant="contained"
                  className="moduleButton"
                >
                  <PlayArrowIcon />
                  Start Learning
                </Button>
                {/* <Button
                  //button to navigate to ppt webpage
                  onClick={() => handleClickTest()}
                  variant="contained"
                  className="moduleButton"
                >
                  <PlayArrowIcon />
                  Skip to Test
                </Button> */}
              </>
              //conditional rendering to module into webpage and putting functionality on buttons
            )}
            <Button
              variant="contained"
              className="moduleButton"
              onClick={() => handleClickTest()}
            >
              <SpeakerNotesRoundedIcon />
              Move To Test
            </Button>
          </Card>

          {/* {!showComponent2 && (
              //conditional rendering to module into webpage and putting functionality on buttons
              <>
                <Button
                  //button to navigate to ppt webpage
                  onClick={() => handleClick()}
                  variant="contained"
                  className="moduleButton"
                >
                  <PlayArrowIcon />
                  Start Learning
                </Button>
  
                <Button variant="contained" className="moduleButton">
                  <SpeakerNotesRoundedIcon />
                  Skip To Test
                </Button>
              </>
            )} */}
        </Grid>
      </Grid>
    </>
  );
}

export default Module1V;
