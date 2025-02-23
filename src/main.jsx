import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'src/Application/App.jsx'
import 'src/index.css'
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)


// Hosted at : https://dashboard.render.com/