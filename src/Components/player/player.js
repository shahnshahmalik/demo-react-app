import React from "react";
import '../../style.css'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';

export default function Player() {
  return (
    <div className={'fl v-cent h-cent start player'}>
      <SkipPreviousIcon />
    </div>
  );
}