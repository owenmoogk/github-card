import { useState } from 'react';

import './styles.css';
import type { GithubCardProps } from '@component/GithubCard';
import { GithubCard } from '@component/GithubCard';

export default function App() {
  const [username, setUsername] = useState<string>();
  const [repository, setRepo] = useState<string>();
  const [showUsername, setIncludeUsername] = useState<boolean>(false);
  const [showZeros, setIncludeZeros] = useState<boolean>(false);

  const [cardProps, setCardProps] = useState<GithubCardProps>();

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
            repository &&
            setCardProps({
              username,
              repository,
              showUsername,
              showZeros,
            })
          }
        >
          Submit
        </button>
      </div>
      <br />
      {cardProps && <GithubCard {...cardProps} />}
      <p style={{ textAlign: 'center' }}>
        Download the package with{' '}
        <pre style={{ display: 'inline' }}>npm install github-repo-card</pre> or{' '}
        <pre style={{ display: 'inline' }}>yarn add github-repo-card.</pre>
      </p>
      <p style={{ textAlign: 'center' }}>
        For more information, check it out on{' '}
        <a href="https://github.com/owenmoogk/github-repo-card">GitHub</a> or{' '}
        <a href="https://npmjs.com/github-repo-card">NPM</a>.
      </p>
    </div>
  );
}
