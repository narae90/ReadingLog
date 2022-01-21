import logo from './logo.svg';
import React, {useState} from 'react';
import { Nav, Navbar, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import './App.css';
import BestBook from './BestBook'
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
              <NavDropdown.Item href="/bestbook">Reading Log</NavDropdown.Item>
              <NavDropdown.Item href="/">Movie Log</NavDropdown.Item>
              <NavDropdown.Item href="/">Drama Log</NavDropdown.Item>
              <NavDropdown.Item href="/">Stock log</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/">커뮤니티</Nav.Link>
            <Nav.Link href="/bestbook">이 달의 도서</Nav.Link>
            <Nav.Link href="/">신간 도서</Nav.Link>
            <Nav.Link href="/">추천 도서</Nav.Link>

          </Nav>
          <Nav>
            <Nav.Link href="/">로그인</Nav.Link>
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
	
</Route>


<Route path="/bestbook">
  <BestBook />
</Route>



</Switch>






    </div>
	);
}





export default App;
