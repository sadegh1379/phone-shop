import React from 'react'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import App from '../../App';


const options = {
    timeout: 5000,
    position: positions.BOTTOM_CENTER
  };
  
  const MyAlert = () => (
    <Provider template={AlertTemplate} {...options}>
      <App />
    </Provider>
  );

