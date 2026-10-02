import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
// Imported after index.css so the CirCure skin wins over the token defaults,
// matching the wiki iframe's previous <link> ordering.
import './circure-skin.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
