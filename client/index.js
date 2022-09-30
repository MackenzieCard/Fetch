import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CurrentUserProvider } from './src/Context/UserContext';
import { Auth0Provider } from "@auth0/auth0-react"; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-omwx3v5z.us.auth0.com"
    clientId="287OfHBZmwBZXFaKK2dsooYXphRk4VqI"
    redirectUri={"http://localhost:3000/"}
    >
    <CurrentUserProvider>
    <App />
    </CurrentUserProvider>
    </Auth0Provider>
  </React.StrictMode>
);
