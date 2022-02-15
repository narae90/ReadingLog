import logo from './logo.svg';
import React, {useState} from 'react';
import { Nav, Navbar, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import './App.css';

import BestBook from './BestBook'
import Bestcarousel from './Bestcarousel'
import List from './List'
import Login from './login/Login'

import PostMain from './board/PostMain';
import PostView from './board/PostView';

import axios from 'axios';

import { Link, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar className="navbar" collapseOnSelect expand="lg" bg="dark" variant="dark" >
        <Container>
        <Navbar.Brand href="/">Reading Log</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <NavDropdown title="카테고리" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/">Reading Log</NavDropdown.Item>
              <NavDropdown.Item href="/">Movie Log</NavDropdown.Item>
              <NavDropdown.Item href="/">Drama Log</NavDropdown.Item>
              <NavDropdown.Item href="/">Stock log</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/community">커뮤니티</Nav.Link>
            <Nav.Link href="/bestbook">도서 투표</Nav.Link>
            {/* <Nav.Link href="/new">신간 도서</Nav.Link>
            <Nav.Link href="/recommend">추천 도서</Nav.Link> */}

          </Nav>
          <Nav>
            <Nav.Link href="/Login">로그인</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              마이페이지
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>

      

	  <Switch>




<Route exact path="/">
	{/* <BestBook /> */}
  <Bestcarousel />
  <List />
	
</Route>


<Route path="/bestbook">
  <BestBook />
</Route>

<Route exact path="/Login" component={Login} />



<Route exact path='/postView/:no' component={PostView} />
<Route exact path='/community' component={PostMain} />

</Switch>






    </div>
	);
}





export default App;
