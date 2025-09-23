import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Doors from './components/Doors/Doors';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Doors />
  </StrictMode>,
)
