import { Navbar } from "./Navbar"
export { Layout }


const Layout = ({ children }) => {
	return (<>
		<Navbar />
		{children}
	</>)
}
