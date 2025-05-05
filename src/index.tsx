import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'  // Tailwind
import 'antd/dist/reset.css';



const rootEl = document.getElementById('root')
if (!rootEl) throw new Error('No root element found')

ReactDOM.createRoot(rootEl).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
