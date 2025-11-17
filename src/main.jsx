import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router'
import './index.css'
import App from './App.jsx'
import Layout from './routes/Layout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
