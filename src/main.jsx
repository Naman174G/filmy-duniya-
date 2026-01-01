import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// 1. Router import kiya
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  // 2. App ko Router ke andar wrap kiya
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)