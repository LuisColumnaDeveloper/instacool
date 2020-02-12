import React from 'react';
import './App.css';

import Login from "./containers/Auth/Login";
import Register from "./containers/Auth/Register";

import NewsFeed from "./containers/NewsFeed";
import Profile from "./containers/Profile";
import Navbar from "./components/Navbar";



import { Route } from "react-router";

const App: React.FC = () => {
  return (

    <div>
      <Route exact={true} path='/' component={Login}/>
      
      <Route exact={true} path='/register' component={Register}/>
      <Route path='/app' component={Navbar}/>
      <Route exact={true} path='/app/newsfeed' component={NewsFeed}/>
      <Route exact={true} path='/app/profile' component={Profile}/>
    </div>
    
  );
}

export default App;