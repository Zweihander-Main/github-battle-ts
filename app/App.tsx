import * as React from 'react';
import './index.css';
import { ThemeProvider } from './contexts/theme';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loading from './components/Loading';
import { AppState } from './types';

const Popular = React.lazy(() => import('./components/Popular'));
const Battle = React.lazy(() => import('./components/Battle'));
const Results = React.lazy(() => import('./components/Results'));

/**
 * Sets up application including theme context and routing
 *
 * @class      App (name)
 */
const App: React.FC = () => {
	const [theme, setTheme] = React.useState<AppState>('light');

	const toggleTheme = (): void => {
		setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
	};

	return (
		<Router>
			<ThemeProvider value={theme}>
				<div className={theme}>
					<div className="container">
						<Nav toggleTheme={toggleTheme} />
						<React.Suspense fallback={<Loading />}>
							<Switch>
								<Route exact path="/" component={Popular} />
								<Route
									exact
									path="/battle"
									component={Battle}
								/>
								<Route
									path="/battle/results"
									component={Results}
								/>
								<Route
									render={(): React.ReactNode => <h1>404</h1>}
								/>
							</Switch>
						</React.Suspense>
					</div>
				</div>
			</ThemeProvider>
		</Router>
	);
};

export default App;
