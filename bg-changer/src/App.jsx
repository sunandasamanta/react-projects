import React, { useState } from 'react'

function App() {
  const [backgroundColor, setBackgroundColor] = useState('black')
  return (
    <main className={`h-screen flex justify-center items-center text-white bg-${backgroundColor}`}>
      <div className="bg-gray-300 shadow-md flex text-white font-bold px-4 py-3 gap-4 max-w-[800px] rounded-lg absolute bottom-0 mb-12">
        <button
          className="bg-red-800 hover:bg-red-700 py-2 px-4 rounded"
          onClick={() => setBackgroundColor('red-800')}
        >
          Red
        </button>
        <button
          className="bg-green-800 hover:bg-green-700 py-2 px-4 rounded"
          onClick={() => setBackgroundColor('green-800')}
        >
          Green
        </button>
        <button
          className="bg-blue-800 hover:bg-blue-700 py-2 px-4 rounded"
          onClick={() => setBackgroundColor('blue-800')}
        >
          Blue
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-700 py-2 px-4 rounded"
          onClick={() => setBackgroundColor('yellow-500')}
        >
          Yellow
        </button>
        <button
          className="bg-purple-800 hover:bg-purple-700 py-2 px-4 rounded"
          onClick={() => setBackgroundColor('purple-800')}
        >
          Purple
        </button>
        <button
          className="bg-indigo-800 hover:bg-indigo-700 py-2 px-4 rounded"
          onClick={() => setBackgroundColor('indigo-800')}
        >
          Indigo
        </button>
      </div>
    </main>
  )
}

export default App