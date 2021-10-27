import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useState} from 'react';

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
      </main>
    </div>
  )
}
