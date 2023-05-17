import styles from './FooterCard.module.css';

const FooterCard = () => {
	return (
		<footer>
			<div className={styles.container}>
				<p className={styles.subtext}>777 TWEETS</p>
				<p className={[styles.subtext, styles.lastChild].join(' ')}>
					100,500 FOLLOWERS
				</p>
				<button className={styles.button}>FOLLOW</button>
			</div>
		</footer>
	);
};

export default FooterCard;
