import styles from './MainCard.module.css';

const MainCard = ({ imageUrl }) => {
	return (
		<section className={styles.section}>
			<div className={styles.backImg}></div>
			<div className={styles.divWithLine}></div>
			<div className={styles.userPhoto}>
				<img src={imageUrl} alt="User avatar" className={styles.photo} />
			</div>
		</section>
	);
};

export default MainCard;
