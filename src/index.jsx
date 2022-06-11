import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { ActionProvider } from './providers/ActionProvider';
import { InventoryProvider } from './providers/InventoryProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <InventoryProvider>
      <ActionProvider>
        <App />
      </ActionProvider>
    </InventoryProvider>
  </React.StrictMode>,
);
