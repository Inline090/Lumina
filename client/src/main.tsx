import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import '@fontsource/poppins/latin-600.css';
import '@fontsource/poppins/latin-700.css';
import '@fontsource-variable/dm-sans';
import './index.css';
import App from './App.tsx';
import { consumeAuthRedirect } from './api.ts';

// A provider sign-in lands back with the token in the address fragment.
consumeAuthRedirect();

// BrowserRouter wraps the app because it uses routes and useNavigate.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Analytics />
    </BrowserRouter>
  </StrictMode>,
);
