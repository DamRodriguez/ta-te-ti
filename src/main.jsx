import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BackgroundBeamsWithCollision } from './components/ui/background-beams-with-collision.tsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BackgroundBeamsWithCollision />
    <App />
  </StrictMode>,
)
