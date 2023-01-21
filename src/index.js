import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
  // import Home component
import Home from "./components/Home";
import About from './components/About';
import Counter from './components/Counter';
  
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Counter />}>
          <Route index element={<Home />} />
          <Route path="signIn" element={<About />} />
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
 