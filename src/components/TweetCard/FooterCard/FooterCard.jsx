import styles from './FooterCard.module.css';

const FooterCard = ({ tweets, followers, id, handleClick, subscribed }) => {
	return (
		<footer>
			<div className={styles.container}>
				<p className={styles.subtext}>{tweets} TWEETS</p>
				<p className={[styles.subtext, styles.lastChild].join(' ')}>
					{followers.toLocaleString().replace(/\s/g, ',')} FOLLOWERS
				</p>
				<button
					className={`${styles.button} ${
						subscribed ? styles.buttonSubscribed : ''
					}`}
					onClick={() => {
						handleClick(id);
					}}
				>
					{subscribed ? 'FOLLOWING' : 'FOLLOW'}
				</button>
			</div>
		</footer>
	);
};

export default FooterCard;
