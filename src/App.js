import logo from './logo.svg';
import React, {useState} from 'react';
import { Nav, Navbar, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import './App.css';

import BestBook from './component/BestBook'
import Bestcarousel from './component/Bestcarousel'
import List from './component/List'
import Login from './component/login/Login'
import Mypage from './component/mypage/Mypage'

import PostMain from './component/board/PostMain';
import PostView from './component/board/PostView';

import axios from 'axios';

import { Link, Route, Switch } from 'react-router-dom';
import Header from './component/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Bestcarousel />
          <List />
        </Route>




        <Route path="/bestbook" component={BestBook} />
        <Route path="/Login" component={Login} />
        <Route path="/mypage" component={Mypage} />

        <Route exact path='/postView/:no' component={PostView} />
        <Route exact path='/community' component={PostMain} />

      </Switch>


  <div id='wrapper'>
  <div>
    content
  </div>
</div>
<footer />



    </div>
	);
}





export default App;
