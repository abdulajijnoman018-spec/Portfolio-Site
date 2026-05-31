// Safeguard against runtimes/iframes trying to overwrite read-only window.fetch getter
try {
  let originalFetch = window.fetch;
  Object.defineProperty(window, 'fetch', {
    configurable: true,
    enumerable: true,
    get() {
      return originalFetch;
    },
    set(val) {
      originalFetch = val;
    }
  });
} catch (e) {
  console.warn("Failed to patch window.fetch:", e);
}

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
