import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  // password generator
  const [range, setRange] = useState(8);
  const [hash, setHash] = useState("Password");

  const [numberAllowed, setNumberAllowed] = useState(false);
  const [symbolAllowed, setSymbolAllowed] = useState(false);

  const hashRef = useRef(null);
  const generateHash = useCallback(() => {
    let result = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const symbols = "~`!@#$%^&*()_+|/.,<>{}[]";
    const numbers = "0123456789";
    if (numberAllowed) characters += numbers;
    if (symbolAllowed) characters += symbols;
    const charactersLength = characters.length;
    for (let i = 0; i < range; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    setHash(result);
  }, [numberAllowed, symbolAllowed, range, setHash]);

  const copyText = useCallback(() => {
    hashRef.current?.select();
    window.navigator.clipboard.writeText(hash);
  }, [hash]);
  useEffect(() => {
    generateHash();
  }, [range, numberAllowed, symbolAllowed, generateHash]);

  return (
    <main className="min-h-screen bg-gray-950 text-orange-500 flex flex-col items-center">
      <div className="bg-gray-700 p-6 mt-2 text-center rounded-lg">
        <h1 className="text-3xl font-bold my-4">Password Generator</h1>
        <div className="rounded-lg flex justify-between overflow-hidden bg-white mb-3">
          <input
            type="text"
            value={hash}
            readOnly
            className="text-xl px-3 py-2 w-full outline-none"
            ref={hashRef}
          />
          <button
            className="bg-blue-600 py-2 px-3 text-white hover:bg-blue-400"
            onClick={copyText}
          >
            copy
          </button>
        </div>
        <div className="flex gap-2 justify-center">
          <div className="">
            <input
              type="range"
              value={range}
              onChange={(e) => setRange(e.target.value)}
              min="8"
              max="48"
              className="ml-2 w-56 accent-orange-500"
              name="range"
            />
            <label className="ml-2" htmlFor="range">
              Length ({range})
            </label>
          </div>
          <div className="">
            <input
              type="checkbox"
              name="number"
              id="number"
              onChange={() => setNumberAllowed((prevState) => !prevState)}
            />
            <label className="ml-2" htmlFor="number">
              Number
            </label>
          </div>
          <div className="">
            <input
              type="checkbox"
              name="symbol"
              id="symbol"
              onChange={() => setSymbolAllowed((prevState) => !prevState)}
            />
            <label className="ml-2" htmlFor="symbol">
              Symbol
            </label>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
