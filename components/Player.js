import React from "react";
import style from "../styles/player.module.css";
import PlayerDetail from "./PlayerDetail";
import PlayerControls from "./PlayerControls";

const Player = (props) => {
  return (
    <div className={style.cplayer}>
      <audio></audio>
      <h4>Playing now</h4>
      <PlayerDetail song={props.song} />
      <PlayerControls song={props.song} />
      <p>
        <strong>Next up: </strong>
        {props.nextSong.title} by {props.nextSong.artist}
      </p>
    </div>
  );
};

export default Player;
