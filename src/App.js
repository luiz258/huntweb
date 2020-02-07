import React, { Component } from "react";
import Header from './components/Header';
import Main from './page/main'
import api from './service/api'
import "./styless.css"


const App = () =>(
  <div className="App">
     <Header />
     <Main />
    </div>
);



export default App;
