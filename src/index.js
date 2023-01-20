import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
//import Hello from './components/encounter';
//import reportWebVitals from './reportWebVitals';
//import Big from './components/Counter';
//import  Postlists from './components/postlists';

import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
  
// import Home component
import Home from "./components/Home";
// import About component
//import About from "./components/About";
// import ContactUs component
import ContactUs from "./components/ContactUs";
import About from './components/About';
import Counter from './components/Counter';
//import Postlists from './components/postlists';
//import ContactUs from './components/ContactUs';
  
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Counter />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
const router = ReactDOM.createRoot(document.getElementById('root'));
router.render(
  //<React.StrictMode>
    <App />
 // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
 