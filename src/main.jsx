import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'mathlive/static.css' // ✅ This loads MathLive's styles
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
