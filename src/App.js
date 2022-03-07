import logo from './logo.svg';
import React, {useState} from 'react';
import { Nav, Navbar, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import './App.css';

import BestBook from './component/BestBook'
import Bestcarousel from './component/Bestcarousel'
import List from './component/List'
import Login from './component/login/Login'
import Mypage from './component/mypage/Mypage'

import PostMain from './component/Post/PostMain';
import PostView from './component/Post/PostView';

import axios from 'axios';

import { Link, Route, Switch } from 'react-router-dom';

import Header from './component/Header';
import Footer from './component/Footer';


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


      <Footer />



    </div>
	);
}





export default App;
