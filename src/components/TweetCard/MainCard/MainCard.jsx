import styles from './MainCard.module.css';

const MainCard = ({ imageUrl }) => {
	return (
		<section className={styles.section}>
			<div className={styles.backImg}></div>
			<div className={styles.divWithLine}></div>
			<div className={styles.userPhoto}>
				<img
					src={require('../../../image/Hansel.png')}
					alt="User"
					className={styles.photo}
				/>
			</div>
			{/* <div>
				<svg width="80" height="80">
					<use xlinkHref={avatar}></use>
				</svg>
			</div> */}
		</section>
	);
};

export default MainCard;
