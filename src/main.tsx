import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './core.css';
import App from './App.tsx';

if (!window.location.hash) {
  window.location.replace(`${window.location.pathname}#/`);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
