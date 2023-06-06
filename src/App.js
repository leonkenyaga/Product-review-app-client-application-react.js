import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Counter from "./components/Counter";
import Login from "./components/Loginpage";
import SignUp from "./components/SignUp";
//import Postlists from "./components/postlists";
import Post from "./components/post";
import BasicRating from "./components/image";
import RecipeReviewCard from "./components/Card";
import Write from "./components/Firebasewrite";
import Inputs from "./components/Inputfield";
import Input from "./components/input";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Counter />}>
          <Route index element={<Home />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="signIn" element={<Login />} />
          <Route path="posts" element={<RecipeReviewCard />} />
          <Route path="post" element={<Post />} />
          <Route path="image" element={<BasicRating />} />
          <Route path="post" element={<Post />} />
          <Route path="write" element={<Write />} />
          <Route path="inputs" element={<Inputs />} />
          <Route path="input" element={<Input />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
