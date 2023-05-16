import { Suspense } from 'react';
import { Route, Routes } from 'react-router';
import TweetsPage from './views/Home/Tweets/TweetsPage';
import HomePage from './views/Home/HomePage';
import NotFoundPage from './views/Home/NotFound/NotFoundPage';

const App = () => {
	return (
		<>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/tweets" element={<TweetsPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</Suspense>
		</>
	);
};

export default App;
