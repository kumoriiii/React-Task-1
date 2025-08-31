import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <section className="card">
      <h2>Hello</h2>
      <div className="row">
        <button onClick={() => setCount((c) => c - 1)} aria-label="Decrement">
          − dec
        </button>
        <strong>{count}</strong>
        <button onClick={() => setCount((c) => c + 1)} aria-label="Increment">
          + inc
        </button>
      </div>
    </section>
  );
}
