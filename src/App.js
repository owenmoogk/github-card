import GithubCard from './GithubCard'
import react, { useState } from 'react'
import './styles.css'

export default function App() {

	const [username, setUsername] = useState()
	const [repo, setRepo] = useState()
	const [includeUsername, setIncludeUsername] = useState()
	const [includeZeros, setIncludeZeros] = useState()

	function submit(){
		setUsername(document.getElementById('usernameInput').value)
		setRepo(document.getElementById('repoInput').value)
		setIncludeZeros(document.getElementById('includeZeros').checked)
		setIncludeUsername(document.getElementById('includeUsername').checked)
		console.log(document.getElementById('includeZeros').checked)
	}

	return (
		<div className="App">
			<h1>Github Cards (React)</h1>
			<div id='inputGroup'>
				<input placeholder='User' id='usernameInput' type='text'/>
				<input placeholder='Repository' id='repoInput' type='text' />
				<label><input type='checkbox' id='includeUsername' /><span>Include Username</span></label>
				<label><input type='checkbox' id='includeZeros' /><span>Include Zero'd Icons (zero stars...etc)</span></label>
				<br/>
				<button onClick={() => submit()}>Submit</button>
			</div>
			<br/>
			<GithubCard username={username} repo={repo} includeUsername={includeUsername} includeZeros={includeZeros}/>
			<p id='downloadButton'><a href={process.env.PUBLIC_URL + '/GithubCardDownload.js'}download>Download React Component</a></p>
		</div>
	);
}
