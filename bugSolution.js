```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: Updates the count only once on mount
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  return <div>Count: {count}</div>;
}
```