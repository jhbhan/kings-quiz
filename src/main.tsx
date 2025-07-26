import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import KingsQuiz from './KingsQuiz'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <KingsQuiz />
  </StrictMode>,
)
