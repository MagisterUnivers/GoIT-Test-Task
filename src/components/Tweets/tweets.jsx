import { useEffect, useState } from 'react';
import { getUsers, updateUser } from '../../services/API';
import FooterCard from '../TweetCard/FooterCard/FooterCard';
import HeaderCard from '../TweetCard/HeaderCard/HeaderCard';
import MainCard from '../TweetCard/MainCard/MainCard';
import styles from './tweets.module.css';

const Tweets = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const users = await getUsers();
				setData(users);
			} catch (error) {
				console.log('Error fetching data:', error);
			}
		};

		fetchData();
	}, []);

	const handleFollowClick = async (id) => {
		const updatedData = data.map((item) => {
			if (item.id === id) {
				return {
					...item,
					followers: item.followers + (item.subscribed ? -1 : 1),
					subscribed: !item.subscribed
				};
			}
			return item;
		});

		try {
			await updateUser(
				id,
				updatedData.find((item) => item.id === id)
			);
			setData(updatedData);
			console.log(updatedData);
		} catch (error) {
			console.log('Error updating user:', error);
		}
	};

	return (
		<>
			{data.map((item) => (
				<div className={styles.wrapper} key={item.id}>
					<HeaderCard />
					<MainCard imageUrl={item.avatar} />
					<FooterCard
						tweets={item.tweets}
						followers={item.followers}
						id={item.id}
						handleClick={handleFollowClick}
						subscribed={item.subscribed}
					/>
				</div>
			))}
		</>
	);
};

export default Tweets;
