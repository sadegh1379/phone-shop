import React from 'react'
import { render } from 'react-dom'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import App from '../../App'
 
// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: 'top-left',
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}
 
const Root = () => (
  <AlertProvider>
    <App />
  </AlertProvider>
)