import { Calendar } from "./components/Calendar";
import { Layout } from "./components/Layout"
import Split from 'react-split';
import './App.css';
import { InfoPane } from "./components/InfoPane";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Layout>
					<Split style={{
						position: "relative",
						display: "flex",
						width: "calc(100vw - 3rem)",
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
