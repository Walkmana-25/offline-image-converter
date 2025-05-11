import './App.css'
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
// @deno-types="./image-converter/pkg/image_converter.d.ts"
import init, {greet} from "./image-converter/pkg"

function App() {
  const [count, setCount] = useState(0)
  const [inputFile, setInputFile] = useState<File | null>(null)
  const [outputFile, setOutputFile] = useState<File | null>(null)
  useEffect(() => {
    (async () => {
      await init();
      greet();
    })();
  }, []);

  return (
    <>
      <div>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0]
            if (file) {
              setInputFile(file)
            }
          }}
        />
        <button
          onClick={async () => {
            if (inputFile) {
              // const output = await convertImage(inputFile)
              // setOutputFile(output)
              setOutputFile(inputFile)
            }
          }}
        >
          Convert Image
        </button>
        </div>
        
      {outputFile && (
        <div>
          <h2>Converted Image:</h2>
          <a
            href={URL.createObjectURL(outputFile)}
            download={outputFile.name}
          >
            {outputFile.name}
          </a>
        </div>
      )}

      <img src="/vite-deno.svg" alt="Vite with Deno" />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
