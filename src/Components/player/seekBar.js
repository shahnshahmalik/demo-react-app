import React, { useState, useEffect } from "react";
import "../../style.css";

export default function SeekBar(props) {
  const [seekStateValue, setSeekStateValue] = useState(props.seekValue);
  const enableSeeking = props.isLoaded === true;
  const changeValue = (value) => {
    setSeekStateValue(value);
  };

  useEffect(() => {
    changeValue(props.seekValue);
  });

  return (
    <div className={"seekBar-outer"}>
      <input
        disabled={!enableSeeking}
        className={"seekBar-track"}
        type={"range"}
        name="seek"
        min="0"
        max="100"
        value={seekStateValue}
        onChange={(e)=> changeValue(e.target.value)}
      />
    </div>
  );
}
