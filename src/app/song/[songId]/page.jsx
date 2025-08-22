// import React from "react";
// import Image from "next/image";
// import "@/styles/pages/_musicplayer.scss";
// import { IoPlaySharp } from "react-icons/io5";
// import { TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled } from "react-icons/tb";
// import { IoIosSkipBackward, IoIosSkipForward } from "react-icons/io";
// import Wrapper from "@/components/wrapper";
// import Header from "@/components/header";
// import { cookies } from "next/headers";


// export async function generateMetadata({ params }) {
//     const { songId } = await params;
//     const cookieStore = await cookies();

//     const access_token = cookieStore.get("ipm_access_token");

//     const response = await fetch("https://api.spotify.com/v1/albums/" + songId, {
//         headers: {
//             Authorization: "Bearer " + access_token.value
//         }
//     });

//     const data = await response.json();

//     return {
//         title: data.name
//     }
// }

// export default async function MusicPlayer({ params}) {
//     const { songId } = await params;
//     const cookieStore = await cookies();



//     const access_token = cookieStore.get("ipm_access_token");

//     const response = await fetch(`https://api.spotify.com/v1/tracks/${songId}`, {
//         headers: {
//             "Authorization": `Bearer ${access_token.value}`
//         }
//     });

//     const data = await response.json();
//     console.log("data", data);
//     return (
//         <>
//             <Wrapper>
//                 <Header search heading="PLAYING" color="black" />
//                 <section className="player">
//                     <div className="player__vinyl-container">
//                     <div className="player__vinyl">
//                         <img
//                             className="player__vinyl-image"
//                             src="/musicplayer.png"
//                             alt="Spinning vinyl record"
//                         />
//                     </div>
//                     </div>
//                     <div className="player__waveform"/>
//                     <div className="player__details">
//                         {/* <Image
//                             className="player__image"
//                             src={data.album.images[0].url}
//                             alt={`${data.name} cover`}
//                             width={100}
//                             height={100}
//                         /> */}
//                         <h2 className="player__title">{data.name}</h2>
//                         <p className="player__artist">{data.artists[0].name}</p>
//                         <p className="player__album">{data.album.name}</p>
//                     </div>
//                 <section className="player__progress">
//                     <input
//                         type="range"
//                         className="player__slider"
//                         min="0"
//                         max="220"
//                         value="0"
//                     />
//                     <div className="player__time">
//                         <span className="player__current-time">0:00</span>
//                         <span className="player__duration">3:30</span>
//                     </div>
//                 </section>

//                 <section className="player__controls">
//                     <button className="player__control player__control--skipprev"><IoIosSkipBackward /></button>
//                     <button className="player__control player__control--prev"><TbPlayerTrackPrevFilled /></button>
//                     <button className="player__control player__control--play"><IoPlaySharp /></button>
//                     <button className="player__control player__control--next"><TbPlayerTrackNextFilled /></button>
//                     <button className="player__control player__control--skipprev"><IoIosSkipForward /></button>
//                 </section>
//                 </section>
//             </Wrapper>
//         </>
//     );
// }
