import styles from './HeaderCard.module.css';
import { ReactComponent as Logo } from '../../../image/vector.svg';

const HeaderCard = () => {
	return (
		<>
			<header className={styles.headerWrapper}>
				<div className={styles.headerContainer}>
					<nav>
						<a href="/">
							<Logo width={76} heigth={22} className={styles.logo} />
						</a>
					</nav>
				</div>
			</header>
		</>
	);
};

export default HeaderCard;
