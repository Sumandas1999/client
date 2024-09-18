import React from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { logo } from "./assets";
import { Home, CreatePost } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <header
        className="w-full flex justify-between item center bg-white
      sm:px-8 px-4 py-4 border-b border-b-[e6ebf4]"
      >
        <Link to="/">
          <img src={logo} className=" w-28 object-contain" />
        </Link>
        <Link
          to="/Create-Post"
          className="font-inter font-medium bg-[#6469ff] 
           text-white px-4 py-2 rounded-md"
        >
          Create
        </Link>
        
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-emerald-100 min-h-[calc(100vh-75px)]">
        <Routes>
          <Route   path="/"  element={ <Home/>}/>

         <Route path="/Create-Post" element={<CreatePost/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
  