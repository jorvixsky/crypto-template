import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import contract from '../contracts.json'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useReadContract, useWriteContract } from 'wagmi'

function App() {
  const counter = useReadContract({
    address: contract[0].address as `0x${string}`,
    abi: contract[0].abi,
    functionName: 'count',
  })

  const { writeContract } = useWriteContract()

  const increment = () => {
    writeContract({
      address: contract[0].address as `0x${string}`,
      abi: contract[0].abi,
      functionName: 'increment',
    })
  }

  const count = counter.data ? counter.data.toString() : '0'

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ConnectButton />
      </div>
      <div className="card">
        <button onClick={increment}>
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