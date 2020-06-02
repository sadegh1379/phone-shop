import React from "react";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import App from "../../App";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER
};

const Alert = () => (
  <Provider template={AlertTemplate} {...options}>
    <App />
  </Provider>
);

