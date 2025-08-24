"use client";

import { IoMdPlay } from "react-icons/io";
import { playerContext } from "../../app/providers/player-provider";
import { useContext, useEffect, useReducer, useRef, useState } from "react";
import Image from "next/image";
import { IoPauseSharp } from "react-icons/io5";
import { msToTime } from "../../../utils/time";
import "@/styles/components/_player.scss";

function useDebounce(value, delay) {
	const [debounceValue, setDebounceValue] = useState(value);

	useEffect(function () {
		const timer = setTimeout(function () {
			setDebounceValue(value);
		}, delay);

		return () => clearTimeout(timer);

	}, [value, delay]);

	return debounceValue;
}

function reducer(state, action) {

	switch (action.type) {
		case "setController":
			return {
				...state,
				controller: action.controller
			}
		case "setDuration":
			return {
				...state,
				duration: action.duration
			}
		case "setPosition":
			return {
				...state,
				position: action.position
			}
		case "setLocalPosition":
			return {
				...state,
				localPosition: action.localPosition
			}
		case "setPaused":
			return {
				...state,
				isPaused: action.isPaused
			}
		case "seekingTrue":
			return {
				...state,
				isSeeking: true
			}
		case "seekingFalse":
			return {
				...state,
				isSeeking: false
			}
		case "setDurationAndPosition":
			return {
				...state,
				duration: action.duration,
				position: action.position,
			}
	}

	throw new Error("Unknown action: " + action.type);
}

export default function Player() {
	const { showPlayer, currentTrack, albumCover } = useContext(playerContext);
	const controlRef = useRef();
	const [playerState, dispatch] = useReducer(reducer, {
		controller: null,
		isPaused: false,
		duration: 0,
		position: 0,
		localPosition: 0,
		isSeeking: false,
	});
	const debouncedPosition = useDebounce(playerState.localPosition);

	useEffect(function () {
		if (!playerState.isSeeking) {
			dispatch({ type: "setLocalPosition", localPosition: playerState.position });
		}
	}, [playerState.position, playerState.isSeeking]);

	useEffect(function () {
		if (playerState.isSeeking && debouncedPosition !== playerState.position) {
			playerState.controller.seek(Math.floor(debouncedPosition / 1000));
			dispatch({ type: "seekingFalse" });
		}
	}, [debouncedPosition, playerState.position]);

	useEffect(function () {
		window.onSpotifyIframeApiReady = function (IFrameAPI) {
			const options = {
				uri: currentTrack.uri,
				width: 0,
				height: 0,
			};
			const callback = (EmbedController) => {
				EmbedController.play();
				dispatch({ type: "setController", controller: EmbedController });
				EmbedController.addListener("playback_update", function (event) {
					dispatch({ type: "setDurationAndPosition", duration: event.data.duration, position: event.data.position });
					if (event.data.isPaused) dispatch({ type: "setPaused", isPaused: true });
					else dispatch({ type: "setPaused", isPaused: false });
				});
			};
			IFrameAPI.createController(controlRef.current, options, callback);

		};
	}, [currentTrack]);

	function changeHandler(event) {
		dispatch({ type: "seekingTrue" });
		dispatch({ type: "setLocalPosition", localPosition: event.target.value });
	}



	return showPlayer ? (
		<div className="player">
			<section className="player__section">
				<div id="embed-iframe" ref={controlRef}></div>
				<script src="https://open.spotify.com/embed/iframe-api/v1" async></script>
				<div>
					<button className="player__button" onClick={() => playerState.controller.togglePlay()}>
						{playerState.isPaused ? <IoMdPlay /> : <IoPauseSharp />}
					</button>
					<p className="player__track-name">{currentTrack.name}</p>
				</div>
				<input
					className="player__seek-bar"
					type="range"
					value={playerState.localPosition}
					max={playerState.duration}
					onChange={changeHandler}
				/>
				<span className="player__time-remaining">{msToTime(playerState.duration - playerState.position)}</span>
			</section>
		</div>

	) : null;
}