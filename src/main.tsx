import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Modal from './components/Modal';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Modal />
  </StrictMode>,
)
