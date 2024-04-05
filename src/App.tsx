import './App.css'
import Mainheaderendnavbar from './components/MainBlockProduct/MainHeaderend/Mainheaderendnavbar'
import Mainheadernavbar from './components/MainBlockProduct/Mainheadernavbarapp/Mainheadernavbar'
import Mainheaderstartnavbar from './components/MainBlockProduct/Mainheaderstart/Mainheaderstartnavbar'
import Maininformationstart from './components/MainBlockProduct/Maininformation/Maininformationstart'

function App() {
	return (
		<>
			<Mainheadernavbar />
			<Mainheaderstartnavbar />
			<Mainheaderendnavbar />
			<Maininformationstart />
		</>
	)
}

export default App
