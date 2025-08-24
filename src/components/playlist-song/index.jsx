

"use client";

import Link from "next/link";
import { IoMdPlay } from "react-icons/io";
import { msToTime } from "../../../utils/time";
import { useContext } from "react";
import { playerContext } from "@/app/providers/player-provider";



export default function PlaylistSong({ song }) {
  const { setShowPlayer, setCurrentTrack } = useContext(playerContext);

  async function clickHandler(event) {
    setShowPlayer(true);
    setCurrentTrack(song);
  }

  return (
    <div className="playlist-songs__container">
      <ul className="playlist-songs__list">
        <li className="playlist-songs__item" >
          <button onClick={clickHandler} className="playlist-songs__item-play">
            <IoMdPlay />
          </button>
          <div className="playlist-songs__item-details">
            <span className="playlist-songs__item-title">{song.name}</span>
            <span className="playlist-songs__item-artist">{song.artists.map(artist => artist.name).join(", ")}</span>
          </div>
          <span className="playlist-songs__item-duration">
            {msToTime(song.duration_ms)}
          </span>
        </li>
      </ul>
    </div>
  );
}
