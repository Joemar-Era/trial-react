import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MyQue from './components/MyQue/MyQue';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyQue />
  </StrictMode>,
)
