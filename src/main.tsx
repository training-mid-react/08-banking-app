import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { router } from './app/routes/index.tsx';
import './app/ui/styles/index.scss';
import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './app/core/state/AuthContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);
