import React, { useState } from "react";
import '../../style.css'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';

export default function Player(props) {
  const [playButtonState, setPlayButtonState] = useState(true);

  return (
    <div className={'fl v-cent h-cent space player'}>
      <div className={'player-action-btn'}>
        <SkipPreviousIcon style={{ fontSize: 40 }}/>
      </div>
       {playButtonState && <div onClick={()=> setPlayButtonState(false)} className={'player-action-btn'}>
       <PlayArrowIcon style={{ fontSize: 70 }}/>
       </div>}
       {!playButtonState && <div onClick={()=> setPlayButtonState(true)} className={'player-action-btn'}>
       <PauseIcon style={{ fontSize: 70 }}/>
       </div>}
      <div className={'player-action-btn'}>
        <SkipNextIcon style={{ fontSize: 40 }}/>
      </div>
    </div>
  );
}