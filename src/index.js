import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyChn5uHkFt7ONZKDyMyySbETkKR1y2OA2A",
  authDomain: "eccomerscoder.firebaseapp.com",
  projectId: "eccomerscoder",
  storageBucket: "eccomerscoder.appspot.com",
  messagingSenderId: "764152376610",
  appId: "1:764152376610:web:2b71ad9d70277eb662897b"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
