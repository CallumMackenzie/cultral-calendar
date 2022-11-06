import { Helmet } from "react-helmet";
import { Calendar } from "./components/Calendar";
import { Layout } from "./components/Layout"
import Split from 'react-split';
import './App.css';
import { InfoPane } from "./components/InfoPane";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Helmet>
					<title>Cultral Calendar</title>
				</Helmet>
				<Layout>
					<Split style={{
						display: "flex",
						width: "calc(100vw - 3rem)",
						height: "calc(100vh - 4rem)"
					}}
						gutterSize={10}
						gutterAlign="center"
						direction="horizontal"
						cursor="col-resize">
						<Calendar />
						<InfoPane />
					</Split>
				</Layout>
			</header>
		</div>
	);
}

export default App;
