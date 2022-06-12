import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { ActionProvider } from './providers/ActionProvider';
import { InventoryProvider } from './providers/InventoryProvider';
import { BackgroundProvider } from './providers/BackgroundProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <InventoryProvider>
      <ActionProvider>
        <BackgroundProvider>
          <App />
        </BackgroundProvider>
      </ActionProvider>
    </InventoryProvider>
  </React.StrictMode>,
);
