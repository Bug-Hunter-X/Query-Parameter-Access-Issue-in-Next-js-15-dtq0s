# Next.js 15 Query Parameter Access Issue

This repository demonstrates a common issue encountered when accessing query parameters in Next.js 15 applications.  The problem occurs because the `router.query` object is undefined during the initial render of the component. This leads to errors when trying to access parameters before the component is fully hydrated.

## Bug

The `about.js` file shows how trying to access `router.query` directly leads to a runtime error.  The console will throw an error: `Cannot read properties of undefined (reading 'key')`.

## Solution

The `aboutSolution.js` file demonstrates a simple fix using conditional rendering.  It checks if `router.isReady` is true before attempting to access the query parameters, ensuring that they are available.