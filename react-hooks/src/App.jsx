import { useState, useEffect, useCallback } from "react";

function App() {
  // password generator
  const [length, setLength] = useState(8);

  return (
    <main className="min-h-screen bg-gray-950 text-gray-200">
      <input
        className="p-2 rounded-md"
        type="text"
        name=""
        id=""
        placeholder="Your Password!"
      />
      <br />
      <input type="radio" name="" id="" />
      <button
        className="p-2 bg-blue-500 text-white rounded-md"
        onClick={() => setLength(Math.floor(Math.random() * 20) + 1)}
      >
        Generate Password
      </button>
      <h1 className="font-bold text-3xl">
        Hello, World! I am learning react hooks.
      </h1>
    </main>
  );
}

export default App;
