```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href='/about'>
        <a>Go to About</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();

  // Accessing query parameters
  const query = router.query;

  return (
    <div>
      <h1>About Page</h1>
      {/* Error: Cannot read properties of undefined (reading 'key') */}
      <p>Query Parameters: {JSON.stringify(query)}</p>
    </div>
  );
}
```