import React from 'react'
import { transitions, positions,  AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import App from '../../App';


const options = {
    timeout: 5000,
    position: positions.BOTTOM_CENTER
  };
  
  const MyAlert = () => {
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  );

