// components/AlbumSong.tsx
"use client";

import Link from "next/link";
import { IoMdPlay } from "react-icons/io";
import { msToTime } from "../../../utils/time";
import { useContext } from "react";
import { playerContext } from "@/app/providers/player-provider";



export default function AlbumSong({ song }) {
  const { setShowPlayer, setCurrentTrack } = useContext(playerContext);

  async function clickHandler(event) {
    setShowPlayer(true);
    setCurrentTrack(song);
  }

  return (
    <div className="album-songs__container">
      <ul className="album-songs__list">
        <li className="album-songs__item" >
          <button onClick={clickHandler} className="album-songs__item-play">
            <IoMdPlay />
          </button>
          <div className="album-songs__item-details">
            <span className="album-songs__item-title">{song.name}</span>
          </div>
          <span className="album-songs__item-duration">
            {msToTime(song.duration_ms)}
          </span>
        </li>
      </ul>
    </div>
  );
}
