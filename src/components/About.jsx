import { useState } from "react";

export default function About() {
  const [random, setRandom] = useState(0);

  return (
    <section className="card">
      <h2>About</h2>
      <button onClick={() => setRandom(Math.floor(Math.random() * 100) + 1)}>
        random num button
      </button>
      <p>
        Random : <strong>{random}</strong>
      </p>
    </section>
  );
}
