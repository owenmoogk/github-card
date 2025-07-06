import { useState } from 'react';

import './styles.css';
import { GithubCard } from '@component/GithubCard';

export default function App() {
  const [username, setUsername] = useState<string>();
  const [repo, setRepo] = useState<string>();
  const [includeUsername, setIncludeUsername] = useState<boolean>(false);
  const [includeZeros, setIncludeZeros] = useState<boolean>(false);

  const [cardProps, setCardProps] = useState<{
    username: string;
    repo: string;
    includeUsername: boolean;
    includeZeros: boolean;
  }>();

  return (
    <div className="App">
      <h1>Github Cards (React)</h1>
      <div id="inputGroup">
        <input
          placeholder="User"
          id="usernameInput"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="Repository"
          id="repoInput"
          type="text"
          onChange={(e) => setRepo(e.target.value)}
        />
        <label>
          <input
            type="checkbox"
            id="includeUsername"
            onChange={(e) => setIncludeUsername(e.target.checked)}
          />
          <span>Include Username</span>
        </label>
        <label>
          <input
            type="checkbox"
            id="includeZeros"
            onChange={(e) => setIncludeZeros(e.target.checked)}
          />
          <span>Include Zero'd Icons (stars, forks, etc)</span>
        </label>
        <br />
        <button
          onClick={() =>
            username &&
            repo &&
            setCardProps({ username, repo, includeUsername, includeZeros })
          }
        >
          Submit
        </button>
      </div>
      <br />
      {cardProps && <GithubCard {...cardProps} />}
    </div>
  );
}
