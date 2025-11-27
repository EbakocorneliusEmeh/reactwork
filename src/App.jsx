

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/home";
import Detail from "./component/detail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/movie/:id" element={<Detail />} /> 
      </Routes>
    </Router>
  );
};

export default App;
