import GithubCard from './GithubCard'
import UserPage from './UserPage'
import react, { useState } from 'react'
import './styles.css'

export default function App() {

	const [username, setUsername] = useState()
	const [repo, setRepo] = useState()

	function submit(){
		setUsername(document.getElementById('usernameInput').value)
		setRepo(document.getElementById('repoInput').value)
	}

	return (
		<div className="App">
			<h1>Github Cards (React)</h1>
			<div id='inputGroup'>
				<input placeholder='User' id='usernameInput' />
				<input placeholder='Repository' id='repoInput' />
				<button onClick={() => submit()}>Submit</button>
			</div>
			<br/>
			<GithubCard username={username} repo={repo} />
			<p id='downloadButton'><a href={process.env.PUBLIC_URL + '/GithubCardDownload.js'}download>Download React Component</a></p>
		</div>
	);
}
