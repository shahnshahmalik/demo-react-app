import React, { useState } from "react";
import "../../style.css";

export default function SeekBar(props) {
  const [seekStateValue, setSeekStateValue] = useState(props.seekValue);
  const showSeekhandle = () => {
    return seekStateValue > 0;
  };

  const changeValue = (value) => {
    setSeekStateValue(value);
    
  }

  return (
    <div className={"seekBar-outer"}>
      <input
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
