import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom';

import './sass/index.scss';

import { FreelancerRegistrationProvider } from 'context/FreelancerRegistration/freelancer-context';
import { ClientRegistrationProvider } from 'context/ClientRegistration/client-context';
import { AuthContextProvider } from 'context/AuthContext/auth-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <ClientRegistrationProvider>
      <FreelancerRegistrationProvider>
        <React.StrictMode>
          <Router>
            <App />
          </Router>
        </React.StrictMode>
      </FreelancerRegistrationProvider>
    </ClientRegistrationProvider>
  </AuthContextProvider>
);
