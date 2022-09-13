import React from 'react';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import {Route, Routes} from 'react-router-dom';
import {BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Membre from "./Pages/Membre";
import Addmembre from "./Pages/Addmembre";
import Modifiermembre from "./Pages/Modifiermembre";

function App() {
  return (
    <Router>
      <Routes>
          <Route exact path="/" element={<Membre/>} />
          <Route path="/ajouter-membre" element={<Addmembre/>} />
          <Route path="/modifier-membre/:id" element={<Modifiermembre/>} />
      </Routes>
      </Router>
    
  );
}

export default App;
