import React from "react";
import style from "../styles/player.module.css";

const Player = (props) => {
  return (
    <div className={style.cplayer}>
      <audio></audio>
      <h4>Playing now</h4>
      <p>
      <p><strong>Next up: </strong>{props.nextSong.title} by {props.nextSong.artist}</p>
      </p>
    </div>
  );
};

export default Player;
