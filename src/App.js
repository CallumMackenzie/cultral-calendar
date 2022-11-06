import { Helmet } from "react-helmet";
import { Calendar } from "./components/Calendar";
import { Layout } from "./components/Layout"
import Split from 'react-split';
import './App.css';

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
						<Calendar />
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
