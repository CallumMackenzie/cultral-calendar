import { Helmet } from "react-helmet";
import Split from 'react-split';
import './App.css';

import { Layout } from "./components/Layout"

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Helmet>
					<title>Cultral Calendar</title>
				</Helmet>
				<Layout>
					<Split style={{ display: "flex" }}
						gutterSize={10}
						gutterAlign="center"
						direction="horizontal"
						cursor="col-resize">
						<div className="Calendar">
							<h2>TODO: ADD CALENDAR</h2>
						</div>
						<div className="InfoPane">
							<h2>TODO: ADD INFO PANE</h2>
						</div>
					</Split>
				</Layout>
			</header>
		</div>
	);
}

export default App;
