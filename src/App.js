import { Helmet } from "react-helmet";
import Split from 'react-split';
import './App.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Helmet>
					<title>Cultral Calendar</title>
				</Helmet>
				<Split>
					<div className="Calendar">
						<h2>TODO: ADD CALENDAR</h2>
					</div>
					<div className="InfoPane">
						<h2>TODO: ADD INFO PANE</h2>
					</div>
				</Split>
			</header>
		</div>
	);
}

export default App;
