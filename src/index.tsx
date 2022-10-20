import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './style/index.css'
import 'antd/dist/antd.css';

const rootElement = document.getElementById('root')!
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
