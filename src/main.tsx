import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import { AutenticacaoProvider } from './Auth/contexts/AutenticacaoContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AutenticacaoProvider>
        <App />
      </AutenticacaoProvider>
    </BrowserRouter>
  </StrictMode>
)