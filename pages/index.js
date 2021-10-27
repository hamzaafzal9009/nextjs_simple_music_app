import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import Player from "../components/Player";

export default function Home() {
  const [songs, setsongs] = useState([
    {
      title: "song 1",
      artist: "artist 1",
      img_src: "./images/sample.jpeg",
      src: "./songs/sample4.mp3",
    },
    {
      title: "song 2",
      artist: "artist 2",
      img_src: "./images/sample.jpeg",
      src: "./songs/sample3.mp3",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);
  return (
    <div>
      <Head>
        <title>Music Application</title>
        <meta name="description" content="music, streaming, entertainment" />
        <meta name="keywords" content="music, streaming, entertainment"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Components Here</h1>
        <Player
          song={songs[currentSongIndex]}
          nextSong={songs[nextSongIndex]}
        />
      </main>
    </div>
  );
}
