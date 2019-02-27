import React from 'react';
import ReactDOM from 'react-dom';
import b2cauth from 'react-azure-adb2c';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

b2cauth.initialize({
  instance: 'https://login.microsoftonline.com/tfp/', 
  tenant: 'cmapp2.onmicrosoft.com',
  signInPolicy: 'B2C_1_react_test_signup',
  applicationId: 'a239d3ec-f2e3-4b55-b674-ed2a7c672620',
  cacheLocation: 'sessionStorage',
  scopes: ['https://cmapp2.onmicrosoft.com/api/user_impersonation'],
  redirectUri: 'http://localhost:3000',
  postLogoutRedirectUri: window.location.origin,
});

b2cauth.run(() => {
  ReactDOM.render(<App />, document.getElementById('root'));
  serviceWorker.unregister();
});