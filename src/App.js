import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ListComp from "./components/ListComp";
import Main from "./components/Main";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="App">
        <SideBar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/list' element={<ListComp />}/>
        </Routes>
    </div>
  );
}

export default App;
