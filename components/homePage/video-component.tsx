import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Player } from "video-react";
import "video-react/dist/video-react.css";
import styles from  "../../styles/Layout.module.css";

class VideoComponent extends Component {
  
  render() {
    return (
      <div>
          <Player
            autoPlay
          >
            <source
              src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
              type="video/mp4"
            />
          </Player>
      </div>
    );
  }
}

export default VideoComponent