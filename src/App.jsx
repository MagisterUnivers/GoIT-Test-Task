import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router';

const HomeLazyPage = lazy(() => import('./views/Home/HomePage'));
const TweetsLazyPage = lazy(() => import('./views/Tweets/TweetsPage'));
const NotFoundLazyPage = lazy(() => import('./views/NotFound/NotFoundPage'));

const App = () => {
	return (
		<>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path="/" element={<HomeLazyPage />} />
					<Route path="/tweets" element={<TweetsLazyPage />} />
					<Route path="*" element={<NotFoundLazyPage />} />
				</Routes>
			</Suspense>
		</>
	);
};

export default App;
