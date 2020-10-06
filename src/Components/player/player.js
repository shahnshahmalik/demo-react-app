import React, { useState } from "react";
import "../../style.css";
import SeekBar from './seekBar';
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";

export default function Player(props) {
  const [playButtonState, setPlayButtonState] = useState(true);

  return (
    <div className={"fl v-cent h-cent space fd-column"}>
      <div className={"seekBar-container"}>
        <SeekBar seekValue={45} isLoaded={false}/>
      </div>
      <div className={"fl v-cent h-cent space player"}>
        <div className={"player-action-btn default"}>
          <SkipPreviousIcon style={{ fontSize: 20 }} />
        </div>
        {playButtonState && (
          <div
            onClick={() => setPlayButtonState(false)}
            className={"player-action-btn accent"}
          >
            <PlayArrowIcon style={{ fontSize: 50 }} />
          </div>
        )}
        {!playButtonState && (
          <div
            onClick={() => setPlayButtonState(true)}
            className={"player-action-btn secondary"}
          >
            <PauseIcon style={{ fontSize: 50 }} />
          </div>
        )}
        <div className={"player-action-btn default"}>
          <SkipNextIcon style={{ fontSize: 20 }} />
        </div>
      </div>
    </div>
  );
}
