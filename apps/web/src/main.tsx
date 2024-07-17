import React from 'react'
import ReactDOM from 'react-dom/client'
import { WagmiProvider } from 'wagmi'
import { wagmiConfig } from './wagmi'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createHashRouter } from 'react-router-dom'

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WagmiProvider config={wagmiConfig}>
      <RouterProvider router={router} />
    </WagmiProvider>
  </React.StrictMode>,
)