import React from 'react';
import Header from './Components/Navbar/Header'
import Home from './Components/Pages/Home'
import Roster from './Components/Pages/Roster'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header/>
      <Router>
        <Route exact path="/"> <Home/> </Route>
      </Router>
      <Router>
        <Route path="/Roster"> <Roster/> </Route>
      </Router>
    </div>
  );
}

export default App;
