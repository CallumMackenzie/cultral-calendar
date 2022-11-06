import { Calendar } from "./components/Calendar";
import { Layout } from "./components/Layout"
import { InfoPane } from "./components/InfoPane";
import Split from 'react-split';
import './App.css';

function App() {
	return (
		<div className="App">
			<Layout>
				<Split style={{
					display: "flex",
					width: "calc(100vw - 3rem)",
					height: "100%",
				}}
					gutterSize={10}
					gutterAlign="center"
					direction="horizontal"
					cursor="col-resize">
					<Calendar className="Calendar" />
					<InfoPane className="InfoPane" />
				</Split>
			</Layout>
		</div>
	);
}

export default App;
