# github-repo-card

An NPM package to easily display a github repo 'card' for linking and stats.

Install via `npm install github-repo-card` or `yarn add github-repo-card`.

Use by importing into react:

```typescript
import { GithubCard } from 'github-repo-card';

export const myComponent: FC = () => (
  <GithubCard
    setRateLimit={(remaining: number, limit: number) => console.log(remaining, limit)}
    showUsername
    showZeros
    username="owenmoogk"
    repository="owenmoogk.github.io"
  />
);
```

Available on [NPM](https://www.npmjs.com/package/github-repo-card) and [Yarn](https://yarnpkg.com/package?q=github-repo-card&name=github-repo-card).
