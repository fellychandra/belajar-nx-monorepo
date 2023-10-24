import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { LandingPages } from './app/pages/LandingPage';
import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <LandingPages />
  </StrictMode>
);
