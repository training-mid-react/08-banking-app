import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { router } from './app/routes/index.tsx';
import { RouterProvider } from 'react-router-dom';
import './app/ui/styles/index.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
