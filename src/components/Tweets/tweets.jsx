import FooterCard from '../TweetCard/FooterCard/FooterCard';
import HeaderCard from '../TweetCard/HeaderCard/HeaderCard';
import MainCard from '../TweetCard/MainCard/MainCard';
import styles from './tweets.module.css';

const Tweets = () => {
	return (
		<div className={styles.wrapper}>
			<HeaderCard />
			<MainCard />
			<FooterCard />
		</div>
	);
};

export default Tweets;
