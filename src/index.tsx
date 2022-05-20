import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import {BrowserRouter} from "react-router-dom";

const rootElement = document.getElementById('root');
// rootElement can be null, so typescript requires check
if (!rootElement) {
    throw new Error('Failed to find the root element');
}
const root = ReactDOM.createRoot(rootElement);
root.render(
      <React.StrictMode>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </React.StrictMode>
    );



