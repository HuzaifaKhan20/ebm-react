import Home from './pages/home';
import './App.css';
import React from 'react';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiAnq-vSIQMfgElDpgTOGDi2Sp7Sc6g-s",
  authDomain: "ebm-react.firebaseapp.com",
  projectId: "ebm-react",
  storageBucket: "ebm-react.appspot.com",
  messagingSenderId: "228702857028",
  appId: "1:228702857028:web:2d8c2f0510d90132025911"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);    


class App extends React.Component {
  render() {
    return (
      <Home />
    )
  }
}

export default App;
