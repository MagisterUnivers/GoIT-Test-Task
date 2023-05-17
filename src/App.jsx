import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router';
import { NavLink } from 'react-router-dom';
import styles from './App.module.css';

const HomeLazyPage = lazy(() => import('./views/Home/HomePage'));
const TweetsLazyPage = lazy(() => import('./views/Tweets/TweetsPage'));
const NotFoundLazyPage = lazy(() => import('./views/NotFound/NotFoundPage'));

const App = () => {
	return (
		<>
			<div className={styles.sidebar}>
				<NavLink
					to="/"
					activeclassname={styles.active}
					style={{ fontSize: '50px' }}
				>
					Home
				</NavLink>
				<NavLink
					to="/tweets"
					activeclassname={styles.active}
					style={{ fontSize: '50px' }}
				>
					Tweets
				</NavLink>
			</div>
			<div className="content">
				<Suspense fallback={<div>Loading...</div>}>
					<Routes>
						<Route path="/" index element={<HomeLazyPage />} />
						<Route path="/tweets" element={<TweetsLazyPage />} />
						<Route path="*" element={<NotFoundLazyPage />} />
					</Routes>
				</Suspense>
			</div>
		</>
	);
};

export default App;
