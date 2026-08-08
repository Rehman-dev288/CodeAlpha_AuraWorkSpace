import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom' // Ye import lazmi hai

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Browser Router ko yahan hona chahiye taake App ke andar hooks kaam karein */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)