import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="App">
      <h2>Timer</h2>
      <div>Timer:{count} seconds</div>
    </div>
  );
}
