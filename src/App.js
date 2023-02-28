import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Counter from './components/Counter';
import Login from './components/Loginpage'
import SignUp from './components/SignUp';
import Homepage from "./components/Homepage";
import Postlists from "./components/postlists";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Counter />}>
          <Route index element={<Home />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="signIn" element={<Login />} />
          <Route path="Home" element={<Homepage />} />
          <Route path="posts" element={<Postlists />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
