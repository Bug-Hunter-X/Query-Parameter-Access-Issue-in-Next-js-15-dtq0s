```javascript
// pages/aboutSolution.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();

  return (
    <div>
      <h1>About Page</h1>
      {router.isReady && (
        <p>Query Parameters: {JSON.stringify(router.query)}</p>
      )}
    </div>
  );
}
```