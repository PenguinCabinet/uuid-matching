import { createSignal } from "solid-js";

function App() {
  const [count, setCount] = createSignal(0);

  return (
    <main>
      <h1>Solid.js</h1>
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        Count is {count()}
      </button>
    </main>
  );
}

export default App;
