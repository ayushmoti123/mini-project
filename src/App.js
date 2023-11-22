import './App.css';
import React, { Component } from 'react'
import Navbar from './components/navbar'
import Newsitem from './components/newsitem';
import Home from'./components/home';
import{
  BrowserRouter as Router,
  Routes,
  Route
}from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'> 
         <Navbar/>
         <Home/>
         <Routes>
            <Route path="/science" element={<Newsitem pagesize={5} country="in" category="science"/>}></Route>
          </Routes>
        </div>
      </Router>
    )
    
  }
}
