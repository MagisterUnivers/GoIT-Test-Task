import styles from './FooterCard.module.css';

const FooterCard = ({ tweets, followers, id, handleClick }) => {
	return (
		<footer>
			<div className={styles.container}>
				<p className={styles.subtext}>{tweets} TWEETS</p>
				<p className={[styles.subtext, styles.lastChild].join(' ')}>
					{followers} FOLLOWERS
				</p>
				<button
					className={styles.button}
					onClick={() => {
						handleClick(id);
					}}
				>
					FOLLOW
				</button>
			</div>
		</footer>
	);
};

export default FooterCard;
