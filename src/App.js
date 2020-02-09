import React, {Component} from "react";
import Routes from "./routes";

import Header from './components/Header';
import Main from './page/main'

import "./styless.css"





const App = () =>(
  <div className="App">
     <Header />
     <Routes />
    </div>
);



export default App;
