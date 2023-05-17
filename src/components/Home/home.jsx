import React, { useState, useEffect, useRef } from 'react';
import styles from './home.module.css';
import { useLocation } from 'react-router-dom';
import { Howl } from 'howler';

import morningAudio from '../../audio/morning.mp3';
import dayAudio from '../../audio/day.mp3';
import eveningAudio from '../../audio/evening.mp3';

const Home = () => {
	const [time, setTime] = useState(new Date());
	const location = useLocation();
	const sound = useRef(null);

	useEffect(() => {
		if (location.pathname === '/') {
			window.scrollTo(0, document.body.scrollHeight);
		}
	}, [location.pathname]);

	useEffect(() => {
		const timer = setInterval(() => {
			setTime(new Date());
		}, 60000);

		return () => {
			clearInterval(timer);
		};
	}, []);

	const currentHour = time.getHours();
	let backgroundImage = '';
	let message = '';

	if (currentHour >= 8 && currentHour < 12) {
		backgroundImage =
			'https://cdn.midjourney.com/163adb0d-170c-466a-a1dc-0d3e5e0abfcb/0_2.png';
		message = 'Good morning! Rise and shine, ready to conquer the day!';
		sound.current = new Howl({
			src: [morningAudio],
			volume: 0.2,
			onend: () => sound.current.play()
		});
	} else if (currentHour >= 12 && currentHour < 18) {
		backgroundImage =
			'https://cdn.midjourney.com/ebde6a76-b18b-4f9b-aee8-8d41f4dfd452/0_1.png';
		message = 'Good afternoon! Take a break and enjoy the sunshine!';
		sound.current = new Howl({
			src: [dayAudio],
			volume: 0.2,
			onend: () => sound.current.play()
		});
	} else {
		backgroundImage =
			'https://cdn.midjourney.com/61a54e08-6831-4485-bde2-ad1f83c42fba/0_0.png';
		message = 'Good evening! Time to wind down and relax.';
		sound.current = new Howl({
			src: [eveningAudio],
			volume: 0.2,
			onend: () => sound.current.play()
		});
	}

	useEffect(() => {
		sound.current.play();

		return () => {
			sound.current.stop();
		};
	}, [morningAudio]); //eslint-disable-line

	return (
		<div
			className={styles.background}
			style={{ backgroundImage: `url(${backgroundImage})` }}
		>
			<div className={styles.overlay}>
				<h1 className={styles.message}>{message}</h1>
			</div>
		</div>
	);
};

export default Home;
