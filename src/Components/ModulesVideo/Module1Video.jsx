import React, { useState } from "react";
import { useEffect } from "react";
import ReactPlayer from "react-player";
import video2 from "../../assets/VID_20190416_155452.mp4";
import video1 from "../../assets/VID_20190416_155452.mp4";
import video3 from "../../assets/VID_20190416_155452.mp4";
import { Button } from "react-bootstrap";

export default function Module3Video({}) {
  const videos = [video1, video2, video3];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [showTestButton, setShowTestButton] = useState(false);

  const handleNextVideo = () => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    } else {
      setShowTestButton(true);
    }
  };

  const handlePreviousVideo = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
    }
  };

  const currentVideo = videos[currentVideoIndex];

  return (
    <div className="OneShowVideo">
      <>
        <ReactPlayer className="Video" url={currentVideo} controls={true} />

        {currentVideoIndex < videos.length - 1 && (
          <Button className="moduleButtonVideo" onClick={handleNextVideo}>
            Next Video
          </Button>
        )}

        {currentVideoIndex > 0 && (
          <Button className="moduleButtonVideo" onClick={handlePreviousVideo}>
            Previous Video
          </Button>
        )}

        {currentVideoIndex === videos.length - 1 && !showTestButton && (
          <Button
            className="moduleButtonVideo"
            onClick={() => setShowTestButton(true)}
          >
            Move to Test
          </Button>
        )}
      </>
    </div>
  );
}
