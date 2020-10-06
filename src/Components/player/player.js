import React, { useState, useRef } from "react";
import "../../style.css";
import SeekBar from "./seekBar";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import $ from 'jquery';

export default function Player(props) {
  const audioEl = useRef(null);
  const [audioSource, setAudioSource] = useState('');
  const [playButtonState, setPlayButtonState] = useState(true);
  const [currentSeekValue, setCurrentSeekValue] = useState(0);
  const onPlayStateChange = state => {
    var player = document.getElementById("player");
    setPlayButtonState(state);
    if (state === false) {
      player.play();
    } else {
      player.pause();
    }
  };
  const onTimeUpdate = event => {
    console.log(event);
  };

  const onTrackChange = (source) => {
    setAudioSource(source);
    audioEl.current.pause();
    audioEl.current.load();
    audioEl.current.play();
  };

 $('#player').on('timeupdate',(e) => {
      setCurrentSeekValue(e.target.currentTime / e.target.duration * 100);
  });

  return (
    <div className={"fl v-cent h-cent space fd-column"}>
      <div className={"seekBar-container"}>
        <SeekBar seekValue={currentSeekValue} isLoaded={true} />
      </div>
      <div className={"fl v-cent h-cent space player"}>
        <div className={"player-action-btn default"}>
          <SkipPreviousIcon style={{ fontSize: 20 }} />
        </div>
        {playButtonState && (
          <div
            onClick={() => onPlayStateChange(false)}
            className={"player-action-btn accent"}
          >
            <PlayArrowIcon style={{ fontSize: 50 }} />
          </div>
        )}
        {!playButtonState && (
          <div
            onClick={() => onPlayStateChange(true)}
            className={"player-action-btn secondary"}
          >
            <PauseIcon style={{ fontSize: 50 }} />
          </div>
        )}
        <div className={"player-action-btn default"}>
          <SkipNextIcon style={{ fontSize: 20 }} />
        </div>
      </div>
      <audio id="player" ref={audioEl}>
        <source
          src={
            "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
          }
          type="audio/mpeg"
        />
      </audio>
    </div>
  );
}
