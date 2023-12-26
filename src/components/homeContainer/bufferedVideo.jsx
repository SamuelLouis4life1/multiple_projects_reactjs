import { useEffect, useState, useRef } from "react";
import { GoMute, GoUnmute } from "react-icons/go";
import "./bufferedVideo.css";

const PLAYING_DEBOUNCE_TIME = 50;
const WAITING_DEBOUNCE_TIME = 200;

export default function Video({
	src,
	className,
	muted,
	audioButton,
	cover,
	removeLoading,
	audioButtonRight="1%",
	audioButtonBottom="2%",
	...props
}) {
	const [isPlaying, setIsPlaying] = useState(false);
	const [isWaiting, setIsWaiting] = useState(false);
	const [isMuted, setIsMuted] = useState(muted);

	const isWaitingTimeout = useRef(null);
	const isPlayingTimeout = useRef(null);

	const videoElementRef = useRef();

	useEffect(() => {
		if (!videoElementRef.current) {
			return;
		}

		const waitingHandler = () => {
			clearTimeout(isWaitingTimeout.current);

			isWaitingTimeout.current = setTimeout(() => {
				setIsWaiting(true);
			}, WAITING_DEBOUNCE_TIME);
		};

		const playHandler = () => {
			clearTimeout(isWaitingTimeout.current);
			clearTimeout(isPlayingTimeout.current);

			isPlayingTimeout.current = setTimeout(() => {
				setIsPlaying(true);
				setIsWaiting(false);
			}, PLAYING_DEBOUNCE_TIME);
		};

		const pauseHandler = () => {
			clearTimeout(isWaitingTimeout.current);
			clearTimeout(isPlayingTimeout.current);

			isPlayingTimeout.current = setTimeout(() => {
				setIsPlaying(false);
				setIsWaiting(false);
			}, PLAYING_DEBOUNCE_TIME);
		};

		const element = videoElementRef.current;

		element.addEventListener("waiting", waitingHandler);
		element.addEventListener("play", playHandler);
		element.addEventListener("playing", playHandler);
		element.addEventListener("pause", pauseHandler);

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					videoElementRef.current.play();
				} else {
					videoElementRef.current.pause();
				}
			},
			{
				root: null,
				rootMargin: "0px",
				threshold: 0.1,
			}
		);

		if (videoElementRef.current) {
			observer.observe(videoElementRef.current);
		}

		// clean up
		return () => {
			clearTimeout(isWaitingTimeout.current);
			clearTimeout(isPlayingTimeout.current);

			element.removeEventListener("waiting", waitingHandler);
			element.removeEventListener("play", playHandler);
			element.removeEventListener("playing", playHandler);
			element.removeEventListener("pause", pauseHandler);

			observer.disconnect();
		};
	}, [videoElementRef]);

	const changeMuted = () => {
		setIsMuted((state) => !state);
	};

	return (
		<div className={`video-wrapper ${className || ""}`}>
			<video {...props} className={cover ? "video-cover ": "" } ref={videoElementRef} src={src} muted={isMuted} />
			{audioButton && (
				<button class="video-mute-btn" onClick={changeMuted} style={{right: audioButtonRight, bottom: audioButtonBottom}}>
					{isMuted ? <GoMute /> : <GoUnmute />}
				</button>
			)}
			{(isWaiting && !removeLoading) && <div className="video-loader">Buffering</div>}
		</div>
	);
}